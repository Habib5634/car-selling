'use client'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'

import { redirect, useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuth } from '@/Store/ReduxSlice/userSlice'
import LoaderOverLay from '@/components/LoaderOverlay'
import ProfileInfo from './profileInfo'
import SellCar from './SellCar'
import PostedCars from './PostedCars'
import EditCar from './EditCar'

const Profile = ({user}) => {
    
    const router = useRouter()
    const { userData, loadingData, errorUser, isAuthenticated } = useSelector((state) => state.userData)
    const dispatch = useDispatch()
    const params =useSearchParams()
    const tab = params.get('tab')
    const [selectedCar, setSelectedCar] = useState(null);
    const [activeTab, setActiveTab] = useState(tab ||'profile' )


    const handleActiveTab = (tab,id) => {
        setActiveTab(tab)
        if(id){

            router.push(`/profile/?tab=${tab}&carId=${id}`)
        }else{

            router.push(`/profile/?tab=${tab}`)
        }
    }
    const handleLogout = async () => {
        try {
            localStorage.removeItem('token')
            dispatch(clearAuth());
            toast.success("Logout Successfully")
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
const handleSelectCar=(car)=>{
    setSelectedCar(car)
    setActiveTab('edit-car')
    router.push(`/profile/?tab=edit-car`)
}
 
    return (
         <div className='relative'>
            <Navbar />
            <div className="bg-catbg relative -mt-[83px]  bg-center bg-no-repeat bg-cover h-[250px]   ">
                <div className="absolute inset-0 z-0 bg-black bg-opacity-80 "></div>
                <div className='flex justify-center items-center h-full '>
                    <h1 className='text-white z-30 text-3xl font-bold mt-24'>Hello, {user?.firstName} {user?.lastName}</h1>

                </div>
            </div>
            <div className='bg-white   w-full relative'>
                <div className='w-full  flex flex-col md:flex-row  mx-auto  bg-white  '>

                <div className='w-full md:w-1/4 h-fit md:h-full overflow-y-auto bg-gray shadow-shad p-4'>
                        <div className='flex flex-col gap-3 items-center'>
                            <img src="/cars/car.jpg" alt="user-profile" className='h-[200px] w-[200px] md:h-[150px] md:w-[150px] rounded-full bg-lightgray mx-auto' />

                            <h1 className='text-center border-b w-fit text-nowrap text-ellipsis text-20 md:text-24 uppercase font-semibold text-purple'>{userData?.fullName}</h1>
                        </div>
                        <div className='flex flex-row md:flex-col overflow-x-auto scrollbar-hide w-full mx-auto justify-start  mt-6 items-center md:items-start px-6 gap-6'>
                            <button onClick={() => handleActiveTab('profile')} className={` text-nowrap ${activeTab === 'profile' ? 'text-red anim3  font-semibold border-b text-20' : 'text-lightgray text-18'}`}>Profile</button>
                          
                            <button onClick={() => handleActiveTab('cars')} className={` text-nowrap ${(activeTab === 'cars' || activeTab === 'edit-car') ? 'text-red anim3  font-semibold border-b text-20' : 'text-lightgray text-18'}`}>My Posted Cars</button>
                            <button onClick={() => handleActiveTab('sell-car')} className={` text-nowrap ${activeTab === 'sell-car' ? 'text-red anim3  font-semibold border-b text-20' : 'text-lightgray text-18'}`}>Sell Your Car</button>
                            <button onClick={handleLogout} className={` text-nowrap text-lightgray text-18`}>Logout</button>

                        </div>

                    </div>
                    <div className='w-full md:w-3/4 h-full py-4 px-6 overflow-auto'>
                        {activeTab === 'profile' && <ProfileInfo user={userData} />}
                        {activeTab === 'sell-car' && <SellCar user={userData} />}
                        {activeTab === 'cars' && <PostedCars 
                        user={userData} 
                        handleSelectCar={handleSelectCar} 
                        
                        />}
                        {activeTab === 'edit-car' && <EditCar user={userData} handleActiveTab={handleActiveTab} car={selectedCar} />}
                        {/* {activeTab === 'new-product' && <AddNewProduct user={userData} />} */}
                        {/* {activeTab === 'product-bids' && <RecievedBids user={userData} />} */}

                    </div>
                </div>
            </div>
          
        </div>
       
    )
}

export default Profile