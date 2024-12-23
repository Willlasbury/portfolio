import { useState } from 'react'
import Home from "./app/page"
import getGithub from './utils/getGithub/getGithub'

import './App.css'

function App() {
  const testFunc = async () => {
    const data = await getGithub()
    console.log("data:", data)
  }
  return (
    <>
     {/* <Home/> */}
     <button onClick={testFunc}>hrere</button>
    </>
  )
}

export default App
