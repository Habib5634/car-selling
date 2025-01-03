import React, { Suspense } from 'react'
import Category from './Category'

const CategoryPage = () => {
  return (
    <Suspense fallback={'...loading'}>
      <Category/>
    </Suspense>
  )
}

export default CategoryPage
