import DekFile from '../dek-file/DekFile';
import './SidebarSelector.css';
import { Tab, TabGroup, TabList, } from '@headlessui/react';

function SidebarSelector({
  currentDekIndex = 0,
  dekName = `Dek ${currentDekIndex}`,
  dekFiles = [],
  defaultFileIndex = 0,
  onFileChange
}: {
  currentDekIndex: number,
  dekName: string,
  dekFiles: DekFile[],
  defaultFileIndex: number,
  onFileChange: (fileIndex: number) => void
}) {

  return (
    <>
      <div className="sidebar-selector-container resize-x">
        <div className="sidebar resize-x">
          <div className="sidebar-title">
            <h3>{dekName}</h3>
          </div>
          <div className="selector-list">
            <TabGroup vertical defaultIndex={defaultFileIndex} onChange={onFileChange}>
              <TabList className="dek-file-list">
                {dekFiles.map((file: DekFile) => {
                  return (
                    <Tab className="file-preview" key={file.fileNumber}>
                      <div className="file-number">{file.fileNumber}</div>
                      <div className="divider">|</div>
                      <div className="file-name">{file.fileName}</div>
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