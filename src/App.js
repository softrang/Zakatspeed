import React from 'react'
import Header from './Header'
import Fotter from './Fotter'
import Donation from './Page/Donation'
import Services from './Page/Services'
import PublicOp from './Page/PublicOp'
import Album from './Page/Album'
import Bigslider from './Page/Bigslider'

const App = () => {
  return (
    <>
      <Header/>
      <Bigslider/>
      <Donation/>
      <Services/>
      <Album/>
      <PublicOp/>
      <Fotter/>
    </>
  )
}

export default App
