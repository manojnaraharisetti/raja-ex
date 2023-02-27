import React from 'react'
import {Link, Outlet} from 'react-router-dom'
export default function Products() {
  return (
    <>
   
    <div>
      <h1>This is Products Page</h1>
    </div>
    <nav className='primary-Nav'>
        <Link to="featured">Featured</Link>&emsp;&emsp;
        <Link to="new">New Products</Link>
    </nav>
    <Outlet/>
    </>
  )
}
