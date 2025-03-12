class DekFile {
  public fileNumber: number;
  public fileNumberSuffix!: string;
  public name: string;
  public iconSrc: string = ``;

  constructor(fileNum: number, name: string, fileNumberSuffix: string, iconSrc: string) {
    this.fileNumber = fileNum;
    this.fileNumberSuffix = fileNumberSuffix || '';
    this.name = name || 'undefined';
    this.iconSrc = iconSrc || ``;
  }

}

export default DekFile;