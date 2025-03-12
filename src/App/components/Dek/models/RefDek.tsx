import DekFile from "./DekFile";

class RefDek {
  dekNumber: number = -1;
  dekName: string = '';
  dekFiles: DekFile[] = [];

  constructor (number: number, name: string, files: DekFile[]) {
    this.dekNumber = number;
    this.dekName = name;
    this.dekFiles = files;
   }
}

export default RefDek;