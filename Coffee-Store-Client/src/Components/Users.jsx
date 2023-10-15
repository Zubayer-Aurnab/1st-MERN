import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUsers = useLoaderData()

    const [Users, setUsers] = useState(loadedUsers)



    const handelDelete = (id) => {

        Swal.fire({
            title: 'Are you sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log(id)

                fetch(`https://coffee-store-server-mt79l8sbo-aurnabs-projects.vercel.app/user/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                           const remaining = Users.filter(use => use._id !== id)
                           setUsers(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })
    }


    return (
        <>
            <div>
                <h1 className="text-4xl text-center" >Users : {loadedUsers.length}</h1>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create Time</th>
                            <th>Last Logged at </th>
                            <th>User id</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            Users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.creatAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>{user._id}</td>
                                <td>
                                    <button
                                        onClick={() => handelDelete(user._id)}
                                        className="btn btn-outline" >
                                        X
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Users;