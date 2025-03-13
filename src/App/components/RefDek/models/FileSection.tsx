class FileSection {
  public sectionNumber: number;
  public title: string;
  public value: string;

  constructor(sectionNum: number, title: string, value: string) {
    this.sectionNumber = sectionNum;
    this.title = title || 'undefined';
    this.value = value || '';
  }
}

export default FileSection;