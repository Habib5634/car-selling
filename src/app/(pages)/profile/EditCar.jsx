'use client'
import { fetchCategories } from '@/Store/Actions/userActions'
import { API_URL, getAuthHeaders } from '@/utils/ApiUrl'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { IoIosArrowBack, IoIosCloseCircle } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

const EditCar = ({ handleActiveTab, user, car }) => {
    const params = useSearchParams()
    const carId = params.get('carId')
    console.log(carId)
    // const [car,setCar] = useState({})
    // const fetchCarDetail=async()=>{
    //     try {
    //         const {data} = await axios.get(`${API_URL}/user/get-single-car/${carId}`)
    //         setCar(data?.car)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(()=>{
    //     fetchCarDetail()
    // },[])
    const { categories } = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())

    }, [dispatch])
    const [formData, setFormData] = useState({
        title: car?.title || '',
        carCategory: car?.carCategory.name || '',
        make: car?.make || '', // "new" or "old"
        model: car?.model || '',
        year: car?.year || '',
        price: car?.price || '',
        mileage: car?.mileage || '',
        fuelType: car?.fuelType || 'diesel',
        transmission: car?.transmission || 'manual',
        description: car?.description || '',
        color: car?.color || '',
        horsePower: car?.horsePower || '',
        engine: car?.engine || '',
        gears: car?.gears || '',
        images: car?.images || [],
    });

    const [imageLink, setImageLink] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addImageLink = () => {
        if (imageLink.trim()) {
            setFormData((prevData) => ({
                ...prevData,
                images: [...prevData.images, imageLink.trim()],
            }));
            setImageLink('');
        }
    };

    const removeImage = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index),
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // handleUpdateProduct(formData);
        console.log("updatedForm data", formData)
        try {
            const { data } = axios?.put(`${API_URL}/user/update-car/${carId}`, formData, getAuthHeaders());
            if (data.success) {
                toast.success(data?.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)

        }
    };

    return (
        <div className='flex flex-col '>

            <IoIosArrowBack className='mb-4 ' onClick={() => handleActiveTab('cars')} />
            <div>
                <h1 className="text-xl font-bold mb-4">Add New Product for Auction</h1>
                <form onSubmit={handleSubmit} className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title*/}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Car Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter Car Title"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* categories */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select
                                name="carCategory"
                                value={formData.carCategory}
                                onChange={handleChange}
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            >
                                <option value="">
                                    Select Category
                                </option>
                                {categories?.map((cat, index) => (
                                    <option key={index} value={cat?._id}>
                                        {cat?.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* make */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Make</label>
                            <input
                                type="text"
                                name="make"
                                value={formData.make}
                                onChange={handleChange}
                                placeholder="Enter Car make"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* model */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Model</label>
                            <input
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                placeholder="Enter Car Model"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* year */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Year</label>
                            <input
                                type="text"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                placeholder="Enter Car Year"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* Price */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter Car Price"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* mileage */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Mileage</label>
                            <input
                                type="number"
                                name="mileage"
                                value={formData.mileage}
                                onChange={handleChange}
                                placeholder="Enter Car mileage"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* feul type */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Fuel Type</label>
                            <select
                                name="fuelType"
                                value={formData.fuelType}
                                onChange={handleChange}
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            >

                                <option selected value="diesel">
                                    Diesel
                                </option>
                                <option value="petrol">
                                    Petrol
                                </option>
                                <option value="electric">
                                    Electric
                                </option>

                            </select>
                        </div>
                        {/* transmission */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Transmission</label>
                            <select
                                name="transmission"
                                value={formData.transmission}
                                onChange={handleChange}
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            >

                                <option selected value="manual">
                                    Manual
                                </option>
                                <option value="automatic">
                                    Automatic
                                </option>


                            </select>
                        </div>

                        {/* color */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Color</label>
                            <input
                                type="text"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                placeholder="Enter Car Color"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* horse power */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Horse Power</label>
                            <input
                                type="number"
                                name="horsePower"
                                value={formData.horsePower}
                                onChange={handleChange}
                                placeholder="Enter Car Horse Power"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* engine */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Engine</label>
                            <input
                                type="text"
                                name="engine"
                                value={formData.engine}
                                onChange={handleChange}
                                placeholder="Enter Car Engine"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>
                        {/* Gears */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">No of Gears</label>
                            <input
                                type="number"
                                name="gears"
                                value={formData.gears}
                                onChange={handleChange}
                                placeholder="Enter No of Gears"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            />
                        </div>



                        {/* car consition */}
                        <div className="mb-4 ">
                            <label className="block text-sm font-medium mb-2">Car Condition</label>
                            <select
                                name="carCondition"
                                value={formData.carCondition}
                                onChange={handleChange}
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            >

                                <option selected value="new">
                                    New
                                </option>
                                <option value="used">
                                    Used
                                </option>


                            </select>
                        </div>
                        {/* description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter description"
                                className="w-full border border-purple bg-transparent px-3 py-2.5 rounded"
                            ></textarea>
                        </div>
                        {/* images */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Image</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={imageLink}
                                    onChange={(e) => setImageLink(e.target.value)}
                                    placeholder="Enter image link"
                                    className="flex-1 border border-purple bg-transparent px-3 py-2.5 rounded"
                                />
                                <button
                                    type="button"
                                    onClick={addImageLink}
                                    className="bg-blue text-white px-4 py-2 rounded"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center my-6 gap-4">
                                {formData.images.map((link, index) => (
                                    <div className=' h-20 w-20 relative'>
                                        <img src={link} alt="images" className='h-full w-full object-cover' />
                                        <IoIosCloseCircle size={24} onClick={() => removeImage(index)} className='text-red absolute -top-2 -right-2 cursor-pointer' />

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-green text-white px-4 py-2 rounded">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditCar
