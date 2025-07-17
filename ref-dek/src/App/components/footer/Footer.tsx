import { Tab, TabGroup, TabList, } from '@headlessui/react'
import addCircle from '../../../assets/add-circle-white-fill.png'
import RefDek from '../RefDek/RefDek'
import './Footer.css'

function Footer({
    refDeks = [new RefDek(0, '', [])],
    defaultTab = 0,
    onTabChange
  }: {
    refDeks: RefDek[],
    defaultTab: number,
    onTabChange: (tabIndex: number) => void
  }) {

  function addDek() {
    console.log('Add Dek');
  }

  return (
    <>
      <div className="footer-container">
        <TabGroup defaultIndex={defaultTab} onChange={onTabChange}>
          <TabList className="dek-tab-list">
            {refDeks.map((dek: RefDek) => {
              return (
                <Tab className="dek-tab" key={dek.dekNumber}>
                  <div className="dek-number">{dek.dekNumber}</div>
                  <div className="divider">|</div>
                  <div className="dek-name">{dek.dekName}</div>
                </Tab>
              )
            })}
            <button className="add-dek"><img onClick={addDek} src={addCircle} alt="Add Ref Dek"/></button>
          </TabList>
        </TabGroup>
      </div>
    </>
  )
}

export default Footer
