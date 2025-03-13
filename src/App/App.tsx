import { useState } from 'react';
import Header from './components/header/Header';
import SidebarSelector from './components/sidebar-selector/SidebarSelector';
import DekFileComponent from './components/RefDek/dek-file/DekFile.component';
import ControlPanel from './components/control-panel/ControlPanel';
import Footer from './components/footer/Footer';
import RefDek from './components/RefDek/models/RefDek';
import DekFile from './components/RefDek/models/DekFile';
import DekFileExamples from './components/RefDek/models/DekFileExamples';
import './App.css';

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
          <ControlPanel></ControlPanel>
        </div>
      </div>
      <Footer onTabChange={setTab} defaultTab={latestDek}></Footer>
    </>
  )
}

export default App
