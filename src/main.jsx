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
  apiKey: "AIzaSyALgpiINNq71R89IC-ycUpjaXEJWdNOzS8",
  authDomain: "rafaela-store-e7c77.firebaseapp.com",
  projectId: "rafaela-store-e7c77",
  storageBucket: "rafaela-store-e7c77.appspot.com",
  messagingSenderId: "844539887925",
  appId: "1:844539887925:web:afb4bc9e3e337d5f790c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <App />
    </ChakraProvider>
)
