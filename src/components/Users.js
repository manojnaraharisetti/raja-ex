import React from 'react'
// import { Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
export default function Users() {
  const [searchparams, setsearchparams] = useSearchParams();
  const showactiveusers = searchparams.get('filter') === 'active';
  return (
    <>
      <div>
        {/* <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2> */}
        <button onClick={() => setsearchparams({ filter: 'active' })}>Active users</button>
        <button id="res" onClick={() => setsearchparams({})}>Reset Users</button>
        {
          showactiveusers ? <h1>These are active users</h1> : <h1>These are all users</h1>
        }
      </div>
      {/* <Outlet/> */}
    </>
  )
}
