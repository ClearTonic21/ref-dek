import DekFile from '../models/DekFile'
import './DekFileComponent.css'

function DekFileComponent({file: DekFile}: {file: DekFile}) {

  return (
    <>
      <div className="dek-file-container">
        {DekFile.name}
      </div>
    </>
  )
}

export default DekFileComponent