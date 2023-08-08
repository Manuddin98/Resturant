import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layouts({children}) {
  return (
    <div>
        <Header/>
        <div>{children}</div>
        <Footer/>
        </div>
  )
}

export default Layouts