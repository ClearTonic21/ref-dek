import './SidebarSelector.css'

function SidebarSelector({currentDek = 0} : {currentDek: number}) {

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-title">
          <h3>Dek {currentDek}</h3>
        </div>
        <div className="sidebar">
          <div className="selector-list">
            <button className="selector-item">
              Selector item
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarSelector