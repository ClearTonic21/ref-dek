import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import SidebarSelector from './components/sidebar-selector/SidebarSelector';

function App() {
  const latestTab: number = 0;
  let [currentTab, setTab] = useState(latestTab);

  return (
    <>
      <div className="app-container">
        <Header></Header>
        <SidebarSelector currentDek={currentTab}></SidebarSelector>
      </div>
      <Footer onTabChange={setTab} defaultTab={latestTab}></Footer>
    </>
  )
}

export default App
