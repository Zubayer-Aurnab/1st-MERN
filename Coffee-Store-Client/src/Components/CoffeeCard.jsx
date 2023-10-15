import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee ,setCoffees, coffees }) => {
    const { name, supply, taste, photo, detail, _id } = coffee
    const handelDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-mt79l8sbo-aurnabs-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-full" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{detail}</p>
                <p>supplier : {supply}</p>
                <p>taste : {taste}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button className="btn bg-red-500" onClick={() => handelDelete(_id)}>X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;