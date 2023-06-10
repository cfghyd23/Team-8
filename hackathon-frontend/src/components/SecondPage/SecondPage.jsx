import Login from "./Login"
import Register from "./Register"
 import React from 'react'
 
 function SecondPage() {
   return (
    <div className="flex justify-center items-center h-screen">
    <div className="flex flex-row items-center">
      <Login/>
      <Register/>
    </div>
  </div>
   )
 }