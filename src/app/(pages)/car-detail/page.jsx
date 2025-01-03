import React, { Suspense } from 'react'
import CarDetail from './CarDetail'

const CarDetailPage = () => {
  return (
    <Suspense fallback={'...loading'}>
      <CarDetail/>
    </Suspense>
  )
}

export default CarDetailPage
