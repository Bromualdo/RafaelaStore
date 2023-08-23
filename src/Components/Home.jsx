import React from 'react'
import Eventos from './Eventos'
import { useState,useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Collection from './Collection'

const Home = () => {
  
  return (
    <>
    <div>Bienvenido a mis productos</div>
    <Eventos/>
    <Collection/>
    </>       
  )
}

export default Home