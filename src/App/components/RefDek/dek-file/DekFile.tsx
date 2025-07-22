import { useState } from 'react';
import ImageDisplay from '../../../../lib/ImageDisplay';
import FileSection from '../file-section/FileSection';
import './DekFile.css';

class DekFile {
  public fileNumber: number;
  public fileNumberSuffix!: string;
  public fileName: string;
  public iconSrc: string;
  public fileSections: FileSection[];

  private primaryImage: ImageDisplay = new ImageDisplay('', '', '');

  constructor(
    fileNum: number,
    fileName: string,
    fileNumberSuffix: string,
    iconSrc: string,
    fileSections: FileSection[],
  ) {
    this.fileNumber = fileNum;
    this.fileNumberSuffix = fileNumberSuffix || '';
    this.fileName = fileName || 'undefined';
    this.iconSrc = iconSrc || ``;
    this.fileSections = fileSections || [new FileSection(0, 'Title', 'Value')];
  }

  render() {
    let [primaryImg, setImg] = useState(this.primaryImage);
    this.primaryImage.title = this.fileName;

    return (
      <>
        <div className='dek-file-container'>
          <div className='file-header'>
            <div className='banner'></div>
            <h3>{this.fileName}</h3>
            <div className='primary-image'>{primaryImg.render()}</div>
          </div>
          <div className='file-section-list'>
            {this.fileSections.map((section: FileSection) => {
              return <div className='section-panel'>{section.render()}</div>;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default DekFile;
