import DekFile from '../RefDek/models/DekFile';
import './SidebarSelector.css';
import { Tab, TabGroup, TabList, } from '@headlessui/react';

function SidebarSelector({
  currentDekIndex: currentDek = 0,
  dekFiles = [],
  defaultFileIndex = 0,
  onFileChange
}:{
  currentDekIndex: number,
  dekFiles: DekFile[],
  defaultFileIndex: number,
  onFileChange: (fileIndex: number) => void
}
) {

  return (
    <>
      <div className="sidebar-selector-container">
        <div className="sidebar">
          <div className="sidebar-title">
            <h3>Dek {currentDek}</h3>
          </div>
          <div className="selector-list">
            <TabGroup vertical defaultIndex={defaultFileIndex} onChange={onFileChange}>
              <TabList className="dek-file-list">
                {dekFiles.map((file: DekFile) => {
                  return (
                    <Tab key={file.fileNumber}>
                      <div className="file-preview">
                        <div className="file-number">{file.fileNumber}</div>
                        <div className="divider">|</div>
                        <div className="file-name">{file.name}</div>
                      </div>
                    </Tab>
                  )
                })}
              </TabList>
            </TabGroup>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarSelector