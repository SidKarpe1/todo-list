import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navBar">
        <ul>
          <li> Login </li>
          <li> Register </li>
          <li></li>
        </ul>
      </div>
      <div className='main-section'>
        <button> add a new task</button>
      </div>
      <div className='tasks'>
        bruh
      </div>
    </>
  )
}

export default App

{/* <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}