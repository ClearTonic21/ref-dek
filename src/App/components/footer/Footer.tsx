import { Tab, TabGroup, TabList, } from '@headlessui/react'
import addCircle from '../../../assets/add-circle.png'
import './Footer.css'

function Footer({defaultTab = 1, onTabChange}: {defaultTab: number, onTabChange: (tabIndex: number) => void}) {

  function addDek() {
    console.log('Add Dek')
  }

  return (
    <>
      <div className="footer-container">
        <TabGroup defaultIndex={defaultTab} onChange={onTabChange}>
          <TabList>
            <Tab>Dek 0</Tab>
            <Tab>Dek 1</Tab>
            <Tab><img onClick={addDek} src={addCircle} className="addDek" alt="Add Ref Dek"/></Tab>
          </TabList>
        </TabGroup>
      </div>
    </>
  )
}

export default Footer
