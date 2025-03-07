import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const latestTab: string = "tab1"

  return (
    <>
      <div className='app-container'>
        <Header></Header>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
