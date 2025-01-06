import React, { Suspense } from 'react'
import Profile from './Profile'
import LoaderOverLay from '@/components/LoaderOverlay'

const ProfilePage = () => {
  return (
    <Suspense fallback={<LoaderOverLay/>}>
      <Profile/>
    </Suspense>
  )
}

export default ProfilePage