import { useState } from 'react';
import Header from './components/header/Header';
import RefDek from './components/RefDek/RefDek';
import RefDekExamples from './models/RefDekExamples';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const latestDek: number = 0;
  let [currentDek, setTab] = useState(latestDek);
  let [currentFileIndex, setDekFileIndex] = useState(0);

  const refDeks: RefDek[] = RefDekExamples();

  return (
    <>
      <div className="app-container">
        <Header></Header>
        <div className="app-content">
          {refDeks[currentDek].render()}
        </div>
      </div>
      <Footer refDeks={refDeks} defaultTab={latestDek} onTabChange={setTab}></Footer>
    </>
  )
}

export default App;