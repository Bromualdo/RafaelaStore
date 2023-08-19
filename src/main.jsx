import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Q2T17UPlrTkJWwElSHU_Nh341mSDnZQ",
  authDomain: "rafaela-store-2ed7f.firebaseapp.com",
  projectId: "rafaela-store-2ed7f",
  storageBucket: "rafaela-store-2ed7f.appspot.com",
  messagingSenderId: "150790484156",
  appId: "1:150790484156:web:30c5ca66d084d92f7320b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <App />
    </ChakraProvider>
)
