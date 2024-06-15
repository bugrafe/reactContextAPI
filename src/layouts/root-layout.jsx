import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const RootLayout = () => {
  return (
    <>
        <Header/>
        <Container className='my-4'>
           <Outlet/>  
        </Container>
          
    </>
  )
}

export default RootLayout