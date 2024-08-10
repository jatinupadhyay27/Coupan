import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Dialog from './components/Dialog'
import LoginDialog from './components/LoginDialog'
import React, { useState } from 'react';
import Carousel from './components/Carousel'
import CardCarousal from './components/CardCarousal'
import OfferSection from './components/Grids'
import AboutPart from './components/AboutPart'
import Footer from './components/Footer'


        

function App() {
  const [visibleDialog, setVisibleDialog] = useState(null);

  const handleDialogClose = () => {
    setVisibleDialog(null);
  };
  
  return (
    <>
  <Header setVisibleDialog={setVisibleDialog}/>
  <SubHeader />
  <Dialog
        visible={visibleDialog === 'signup'}
        setVisibleDialog={setVisibleDialog}
        handleDialogClose={handleDialogClose}
      />
      <LoginDialog
        visible={visibleDialog === 'login'}
        setVisibleDialog={setVisibleDialog}
        handleDialogClose={handleDialogClose}
      />
      <Carousel/>
      <CardCarousal/>
    <OfferSection/>
    <AboutPart />
    <Footer/>

    </>
  )
}

export default App
