import React from 'react'
import {Navigate} from 'react-router-dom'
import type {RouteObject} from 'react-router-dom'

const Discover = React.lazy(()=>import('@/views/discover/discover'))
const My = React.lazy(()=>import('@/views/my/my'))
const Follow = React.lazy(()=>import('@/views/follow/follow'))
const DownLoad = React.lazy(()=>import('@/views/download/download'))

const routes:RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover'></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: []
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/follow',
    element: <Follow />
  },
  {
    path: '/download',
    element: <DownLoad />
  },
]
export default routes
