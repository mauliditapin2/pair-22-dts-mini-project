import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header'
import Slideshow from '../component/Slideshow'


import ListMoviesReal from "../container/ListMoviesReal";
export default function HomePage() {
  return (
    <div>
        <Header/>
        <Slideshow/>

        <div style={{  alignContent: 'center', alignItems: 'center'}}>
        <ListMoviesReal/>
        
        <Footer/>
        </div>    
    </div>
  )
}
