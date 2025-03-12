import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import SidebarSelector from './components/sidebar-selector/SidebarSelector';
import DekFileComponent from './components/Dek/dek-file/DekFileComponent';
import DekFile from './components/Dek/models/DekFile';
import DekFileExamples from './components/Dek/models/DekFileExamples';
import RefDek from './components/Dek/models/RefDek';

function App() {
  const latestDek: number = 0;
  let [currentDek, setTab] = useState(latestDek);
  let [currentFileIndex, setDekFileIndex] = useState(0);

  const refDeks: RefDek[] = [new RefDek(0, `Dek 0`, DekFileExamples()), new RefDek(1, `Dek 1`, [new DekFile(0, 'empty', '', '',)]), new RefDek(2, `Dek 2`, [new DekFile(0, 'empty', '', '',)])];

  return (
    <>
      <div className="app-container">
        <Header></Header>
        <div className="app-content">
          <SidebarSelector
            currentDekIndex={refDeks[currentDek]===undefined ? 0 : currentDek}
            dekFiles={refDeks[currentDek].dekFiles}
            defaultFileIndex={0}
            onFileChange={setDekFileIndex}
          ></SidebarSelector>
          <DekFileComponent file={refDeks[currentDek].dekFiles[currentFileIndex]}></DekFileComponent>
        </div>
      </div>
      <Footer onTabChange={setTab} defaultTab={latestDek}></Footer>
    </>
  )
}

export default App
