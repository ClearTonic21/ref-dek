import { JSX, useState } from 'react';
import ControlPanel from '../control-panel/ControlPanel';
import SidebarSelector from './sidebar-selector/SidebarSelector';
import DekFile from './dek-file/DekFile';
import './RefDek.css';

class RefDek {
  dekNumber: number = -1;
  dekName: string = '';
  dekFiles: DekFile[] = [];

  constructor(number: number, name: string, files: DekFile[]) {
    this.dekNumber = number;
    this.dekName = name;
    this.dekFiles = files || [new DekFile(0, 'Title', '', '', [])];
  }

  render(latestFile: number = 0): JSX.Element {
    let [currentFileIndex, setDekFileIndex] = useState(latestFile);

    return (
      <>
        <div className='ref-dek-container'>
          <div className='ref-dek-content'>
            <div className='banner'></div>
            <SidebarSelector
              currentDekIndex={this.dekNumber}
              dekName={this.dekName}
              dekFiles={this.dekFiles}
              defaultFileIndex={latestFile}
              onFileChange={setDekFileIndex}
            ></SidebarSelector>
            {this.dekFiles[currentFileIndex].render()}
          </div>
          <ControlPanel></ControlPanel>
        </div>
      </>
    );
  }
}

export default RefDek;
