import './SidebarSelector.css'
import { Tab, TabGroup, TabList, } from '@headlessui/react'


function SidebarSelector({currentDek = 0} : {currentDek: number}) {

  return (
    <>
      <div className="sidebar-selector-container">
        <div className="sidebar">
          <div className="sidebar-title">
            <h3>Dek {currentDek}</h3>
          </div>
          <div className="selector-list">
            <TabGroup vertical>
              <TabList className="dek-file-list">
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
                <Tab>DekFile</Tab>
              </TabList>
            </TabGroup>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarSelector