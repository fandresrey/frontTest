import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit {
  fileToUpload: any = []
  fileContent: string = '';
  filetest: any = []

  arraySplit: any = []
  constructor() { }

  ngOnInit(): void {
  }



  onChange() { console.log("test"); }
  async handleFileInput(files: any) {


    this.fileToUpload = files.target.files.item(0);


    let fileReader: FileReader = new FileReader();
    let reader: any = []

    fileReader.onloadend = await function (x) {

      reader = fileReader.result;

    }
    let test = fileReader.readAsText(this.fileToUpload);

    setTimeout(() => {
      this.filetest = reader


      this.splitVar()

    }, 100);


  }


  splitVar() {
    console.log(this.filetest);

    var slitCol = this.filetest.split("\r\n")

    console.log(slitCol);

    slitCol.forEach((element: any, index: any) => {
      if (index === 0) {

        this.arraySplit.push({
          name: newElement[0],
          lastName: newElement[1],
          phone: newElement[2],
          adress: newElement[3],
        })
      } else {
        console.log(element.split(';'));
        console.log(index);
        var newElement = element.split(';')
        this.arraySplit.push({
          name: newElement[0],
          lastName: newElement[1],
          phone: newElement[2],
          adress: newElement[3],
        })
      }


    });
    console.log(this.arraySplit);

  }
}
