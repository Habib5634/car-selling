'use client'
import { API_URL, getAuthHeaders } from '@/utils/ApiUrl'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaTrashAlt } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

const PostedCars = ({user,handleSelectCar}) => {
    const [cars, setCars] = useState([])
    const [selectedCar, setSelectedCar] = useState(null); // State to hold clicked application details
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false)
  const [carDetailModal, setCardetailModal] = useState(false)
  const [carId, setCarId] = useState('')
  const router = useRouter()
  const fetchCars = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/user/user-cars/`, getAuthHeaders())

      setCars(data?.cars)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  const handleEditCar = (car) => {
    setSelectedCar(car); // Set the clicked application data
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCar(null); // Clear selected application
  };
  const handleOpenConfirmationModal = (id) => {
    setConfirmationModal(true)
    setCarId(id)
  }
  const handleCloseConfirmationModal = () => {
    setConfirmationModal(false)
    setCarId('')
  }

//   const handleCloseCar = async () => {
//     console.log(carId)
//     try {
//       const { data } = await axios.put(`${API_URL}/seller/close-product-bids/${carId}`, {}, getAuthHeaders())
//       if (data.success) {
//         toast.success(data?.message)
//         setConfirmationModal(false)
//         setProductId('')
//         fetchProducts()
//       } else {
//         toast.error(data.message)
//         setConfirmationModal(false)
//         setProductId('')
//       }

//     } catch (error) {
//       console.log(error)
//       setConfirmationModal(false)
//       setProductId('')
//     }
//   }
const handleOpenCarDetailModal = (car) => {
    setSelectedCar(car)
    setCardetailModal(true)
  }
  const handleCloseCarDetailModal = () => {
    setSelectedCar(null)
    setCardetailModal(false)
  }
  return (
    <>
    <div className="w-full overflow-x-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Cars</h2>
      <table className="table-auto w-full border-collapse border border-darkgray">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Image</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Title</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Category</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Price</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Make</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Model</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Year</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Mileage</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">FuelType</th>
            <th className="border border-darkgray px-4 py-2 text-left text-nowrap">Transmission</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Color</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Horse Power</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Engine</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Gears</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Location</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Condition</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Status</th>
            <th className="border border-darkgray px-4 py-2 text-nowrap text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) =>  (
              <tr key={car._id} className="hover:bg-gray-100 capitalize">
                <td onClick={() => handleOpenCarDetailModal(car)} className="border border-darkgray px-4 py-2">
                  <img src={car?.images[0]} alt={car.carNtitleame} className="h-10 w-10" />
                </td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.title}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.carCategory?.name}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.price}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.make}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.model}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.year}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.mileage}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.fuelType}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.transmission}</td>
                <td onClick={() => handleCloseChandleOpenCarDetailModalarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.color}</td>
                <td onClick={() => handleCloseChandleOpenCarDetailModalarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.horsePower}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.engine}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.gears}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis capitalize border border-darkgray px-4 py-2">{car?.location?.city}, {car?.location?.state} {car?.location?.country}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.carCondition}</td>
                <td onClick={() => handleOpenCarDetailModal(car)} className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-2">{car?.status}</td>
              
                <td className="w-full max-w-[150px] text-nowrap overflow-hidden text-ellipsis border border-darkgray px-4 py-[18px]  flex items-center justify-center gap-2">{car?.isActive ? 
                <>
                  <MdEdit className="text-purple cursor-pointer" size={20} onClick={() => handleSelectCar(car)} /> <FaTrashAlt onClick={() => handleOpenConfirmationModal(car?._id)} className=" text-red cursor-pointer" size={20} />
                </>:<span className='text-red '>Blocked</span>}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    {/* {isModalOpen &&
      <EditProductModal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        handleOpenConfirmationModal={handleOpenConfirmationModal}
      />
    } */}
    {carDetailModal &&
      <CarDetailModal
        closeModal={handleCloseCarDetailModal}
        car={selectedCar}

      />
    }
    {confirmationModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative ">

          <h1 className="text-2xl font-bold text-blackish text-center mb-4">Are you Sure! You want to close this Product on Auction</h1>


          <div className="flex justify-center items-center gap-10 w-full">


            <button
              className="bg-green text-white px-4 py-2 rounded-md hover:bg-blue-700"
            //   onClick={handleCloseProduct}
            >
              Yes
            </button>
            <button
              className="bg-red text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handleCloseConfirmationModal}
            >
              No
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default PostedCars




const CarDetailModal = ({ car, closeModal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % car?.images?.length);
    };

    // Handler to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? car?.images?.length - 1 : prevIndex - 1
        );
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative max-h-[90vh] overflow-auto">
  
      
          <div className="relative flex justify-center items-center">
                              <button
                                  onClick={prevImage}
                                  className="absolute flex justify-center items-center left-0 w-10 h-10 text-24 leading-none bg-white text-purplelight rounded-full "
                              >
                                  <FaAngleLeft />
                              </button>
                              <div className='px-4 pb-4 md:px-6 md:pb-6 lg:px-10 lg:pb-10'>
          
                                  <img
                                      src={car?.images && car?.images?.length > 0 ? car?.images[currentIndex] : '/placeholder.jpg'}
                                      alt={`Slide ${currentIndex + 1}`}
                                      className="w-full h-[450px] object-cover"
                                      />
                              </div>
                              <button
                                  onClick={nextImage}
                                  className="absolute flex justify-center items-center right-0 w-10 h-10 text-24 leading-none bg-white text-purplelight rounded-full hover:bg-gray-600"
                                  >
                                  <FaAngleRight />
                              </button>
          
                          </div>
          <div className='  p-5 h-fit '>
                <h1 className='text-xl font-medium robo uppercase text-black '>Specifications</h1>
                <div className='flex justify-between mt-8 rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Title</h1>
                    <h3 className='text-gray2'>{car?.title}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Price</h1>
                    <h3 className='text-gray2'>{car?.price}</h3>
                </div>
                <div className='flex justify-between rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Make</h1>
                    <h3 className='text-gray2'>{car?.make}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Model</h1>
                    <h3 className='text-gray2'>{car?.model}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Condition</h1>
                    <h3 className='text-gray2'>{car?.carCondition}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Year</h1>
                    <h3 className='text-gray2'>{car?.year}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Mileage</h1>
                    <h3 className='text-gray2'>{car?.mileage}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Transmission</h1>
                    <h3 className='text-gray2'>{car?.transmission}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Interior Color</h1>
                    <h3 className='text-gray2'>{car?.color}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Engine</h1>
                    <h3 className='text-gray2'>{car?.engine}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Fuel Type</h1>
                    <h3 className='text-gray2'>{car?.fuelType}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>No of Gears</h1>
                    <h3 className='text-gray2'>{car?.gears}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Location</h1>
                    <h3 className='text-gray2'>{car?.location?.city}</h3>
                </div>
               

            </div>
          
          <IoMdCloseCircleOutline onClick={closeModal} size={25} className='absolute top-6 right-6 text-black' />
        </div>
      </div>
    )
  }