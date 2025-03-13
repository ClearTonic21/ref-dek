import FileSectionComponent from '../file-section/FileSection.component'
import DekFile from '../models/DekFile'
import FileSection from '../models/FileSection'
import './DekFile.component.css'

function DekFileComponent({file: DekFile}: {file: DekFile}) {

  return (
    <>
      <div className="dek-file-container">
        <div className="section-panel">
          <FileSectionComponent section={new FileSection(0, 'Title', 'Value')} />
        </div>
      </div>
    </>
  )
}

export default DekFileComponent