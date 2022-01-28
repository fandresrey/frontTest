import { Component, OnInit } from '@angular/core';
import { SaveFileService } from 'src/admin/services/api/save-file.service';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit {
  fileToUpload: any = []
  fileContent: string = '';
  filetest: any = []
  dot: any = true
  comma: any = false
  percentage: any = false
  space: any = false
  other: any = false
  otherWord: any
  arraySplit: any = []

  constructor(private ServicesSave: SaveFileService,) { }

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

    var splitCol = this.filetest.split("\r\n")

    console.log(splitCol);

    splitCol.forEach((element: any, index: any) => {



      if (this.dot) {
        var newElement = element.split('.')
      }
      if (this.comma) {
        var newElement = element.split(',')
      }
      if (this.percentage) {
        var newElement = element.split('%')
      }
      if (this.space) {
        var newElement = element.split(' ')
      }
      if (this.other) {


        var newElement = element.split(this.otherWord)
      }








      this.arraySplit.push({
        name: newElement[0],
        lastName: newElement[1],
        phone: newElement[2],
        adress: newElement[3],
      })



    });
    console.log(this.arraySplit);

  }


  onChangeDemo(e: any) {
    switch (e) {
      case 1:
        if (this.dot) {
          this.comma = false
          this.percentage = false
          this.space = false
          this.other = false
        }

        break;
      case 2:
        if (this.comma) {
          this.dot = false
          this.percentage = false
          this.space = false
          this.other = false
        }
        break;
      case 3:
        if (this.percentage) {
          this.comma = false
          this.dot = false
          this.space = false
          this.other = false
        }
        break;
      case 4:
        if (this.space) {
          this.comma = false
          this.percentage = false
          this.dot = false
          this.other = false
        }
        break;
      case 5:
        if (this.other) {
          this.comma = false
          this.percentage = false
          this.dot = false
          this.space = false
        }
        break;

      default:
        break;
    }


  }



  save() {

    console.log("test");



    console.log(this.arraySplit);

    try {




      this.ServicesSave.setCreate(
        this.arraySplit
      )
        .then((res: any) => {
          console.log(res);
        })
        .catch((err) => {
          console.log({ err });
        });
    } catch (error) {
      console.log(error);
    }



  }
}
