import { useState } from "react";
import ControlPanel from "../control-panel/ControlPanel";
import SidebarSelector from "./sidebar-selector/SidebarSelector";
import DekFile from "./dek-file/DekFile";

class RefDek {
  dekNumber: number = -1;
  dekName: string = '';
  dekFiles: DekFile[] = [];

  constructor (number: number, name: string, files: DekFile[]) {
    this.dekNumber = number;
    this.dekName = name;
    this.dekFiles = files || [new DekFile(0, 'Title', '', '', [])];
   }

   render() {
    let [currentFileIndex, setDekFileIndex] = useState(0);

    return (
      <>
        <div className="ref-dek-container">
          <SidebarSelector
            currentDekIndex={this.dekNumber}
            dekFiles={this.dekFiles}
            defaultFileIndex={0}
            onFileChange={setDekFileIndex}
          ></SidebarSelector>
          {this.dekFiles[currentFileIndex].render()}
          <ControlPanel></ControlPanel>
        </div>
      </>
    )
   }
}

export default RefDek;