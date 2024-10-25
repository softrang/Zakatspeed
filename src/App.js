import React from 'react'
import Header from './Header'
import Fotter from './Fotter'
import Donation from './Page/Donation'
import Services from './Page/Services'
import PublicOp from './Page/PublicOp'
import Album from './Page/Album'

const App = () => {
  return (
    <>
      <Header/>
      <Donation/>
      <Services/>
      <Album/>
      <PublicOp/>
      <Fotter/>
    </>
  )
}

export default App
