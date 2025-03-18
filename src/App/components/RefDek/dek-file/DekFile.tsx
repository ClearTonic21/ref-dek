
import { useState } from 'react';
import ImageDisplay from '../../../../lib/ImageDisplay'
import FileSection from '../file-section/FileSection';
import './DekFile.css'

class DekFile {
  public fileNumber: number;
  public fileNumberSuffix!: string;
  public name: string;
  public iconSrc: string;
  public fileSections: FileSection[];

  private primaryImage: ImageDisplay = new ImageDisplay('', '', '');

  constructor(fileNum: number, name: string, fileNumberSuffix: string, iconSrc: string, fileSections: FileSection[]) {
    this.fileNumber = fileNum;
    this.fileNumberSuffix = fileNumberSuffix || '';
    this.name = name || 'undefined';
    this.iconSrc = iconSrc || ``;
    this.fileSections = fileSections || [new FileSection(0, 'Title', 'Value')];

    this.primaryImage.title = this.name;
  }

  render() {
    let [primaryImg, setImg] = useState(this.primaryImage);

    return (
      <>
        <div className="dek-file-container">
          <div className="file-header">
            <div className="banner"></div>
            <div className="primary-image">
              {primaryImg.render()}
            </div>
          </div>
          {this.fileSections.map((section: FileSection) => {
            return (
              <div className="section-panel">
                {section.render()}
              </div>
            )})
          }
        </div>
      </>
    )
  }
}

export default DekFile;