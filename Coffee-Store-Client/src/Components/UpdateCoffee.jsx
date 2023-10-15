import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loaderData = useLoaderData()
    const { name, quantity, supply, taste, photo, detail, category, _id } = loaderData

    const handelUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supply = form.supply.value
        const taste = form.taste.value
        const category = form.category.value
        const detail = form.detail.value
        const photo = form.photo.value

        const updatedCoffee = { name, quantity, supply, taste, category, detail, photo }

        
        console.log(updatedCoffee)
        console.log(_id)


        fetch(`https://coffee-store-server-mt79l8sbo-aurnabs-projects.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }
    return (
        <>
            <div className="mb-9">
                <h1 className='text-center font-bold text-purple-500 text-4xl '>UPDATE Coffee</h1>
            </div>

            <div>
                <form
                    onSubmit={handelUpdate}
                    className="border-2 rounded-md p-4 py-10" >
                    {/* TR */}
                    <div className="flex justify-evenly mb-8 ">
                        <div>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Type here"
                                        defaultValue={name}
                                        className="input input-bordered input-lg" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>QUANTITY</span>
                                    <input
                                        type="text"
                                        name="quantity"
                                        placeholder="Type here"
                                        defaultValue={quantity} className="input input-bordered input-lg" />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* TR */}
                    <div className="flex justify-evenly mb-8 ">
                        <div>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>SUPPLY</span>
                                    <input
                                        type="text"
                                        name="supply"
                                        defaultValue={supply}
                                        placeholder="Type here" className="input input-bordered input-lg" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>TASTE</span>
                                    <input
                                        type="text"
                                        name="taste"
                                        defaultValue={taste}
                                        placeholder="Type here" className="input input-bordered input-lg" />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* TR */}
                    <div className="flex justify-evenly mb-8 ">
                        <div>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>CATEGORY</span>
                                    <input
                                        type="text"
                                        defaultValue={category}
                                        name="category"
                                        placeholder="Type here" className="input input-bordered input-lg" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="input-group input-group-lg">
                                    <span>DETAIL</span>
                                    <input
                                        type="text"
                                        name="detail"
                                        defaultValue={detail}
                                        placeholder="Type here" className="input input-bordered input-lg" />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* TR */}
                    <div className=" mb-8  ">
                        <div className="flex justify-center">
                            <div className="form-control w-1/2 ">
                                <label className="input-group input-group-lg">
                                    <span> URL</span>
                                    <input
                                        type="text"
                                        name="photo"
                                        defaultValue={photo}
                                        placeholder="Photo URL" className="input input-bordered input-lg w-full " />
                                </label>
                            </div>
                        </div>

                    </div>
                    <div>
                        <input type="submit" value="ADD" className="btn btn-outline w-1/2" />
                    </div>

                </form>
            </div>
        </>
    );
};

export default UpdateCoffee;