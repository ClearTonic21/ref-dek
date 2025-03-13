import FileSection from '../models/FileSection'
import './FileSection.component.css'

function FileSectionComponent({section: FileSection}: {section: FileSection}) {

  return (
    <>
      <div className="file-section-container">
        <div className="section-title">{FileSection.title}</div>
      </div>
    </>
  )
}

export default FileSectionComponent