import './FileSection.css';

class FileSection {
  public sectionNumber: number;
  public title: string;
  public value: string;

  constructor(sectionNum: number, title: string, value: string) {
    this.sectionNumber = sectionNum;
    this.title = title || 'undefined';
    this.value = value || '';
  }

  render() {
    return (
      <>
        <div className='file-section-container'>
          <div className='section-title'>{this.title}</div>
        </div>
      </>
    );
  }
}

export default FileSection;
