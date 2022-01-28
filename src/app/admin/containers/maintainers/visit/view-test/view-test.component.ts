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
  dataSource: any
  displayedColumns: any

  checkName: any = true
  checkLast: any = true
  checkPhone: any = true
  checkAdress: any = true


  arraySplit: any = []
  arraySplittemp: any = []

  elem = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  hiden: boolean = false;
  array: string = "";

  constructor(private ServicesSave: SaveFileService,) { }

  ngOnInit(): void {
    //  this.displayedColumns = ['name', 'lastName', 'phone', 'adress'];
    // this.dataSource = this.elem;
  }



  onChange() { console.log("test"); }
  async handleFileInput(files: any) {
    this.arraySplit = []
    this.arraySplittemp = []
    this.dataSource = []

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
    this.hiden = true
    console.log(this.filetest);

    var splitCol = this.filetest.split("\r\n")


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

    this.displayedColumns = ['name', 'lastName', 'phone', 'adress'];
    this.dataSource = this.arraySplit
    this.arraySplittemp = this.arraySplit
    localStorage.removeItem('array')
    localStorage.setItem('array', JSON.stringify(this.arraySplit));


  }

  onChangeDemo(e: any) {
    this.arraySplit = []
    this.arraySplittemp = []
    this.dataSource = []

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

  check(e: any) {
    console.log("tes");


    switch (e) {
      case 1:
        if (this.checkName) {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            this.arraySplit[index].name = element.name

          });

        } else {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            console.log(element);
            this.arraySplit[index].name = ""
          });

        }
        break;
      case 2:
        if (this.checkLast) {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            this.arraySplit[index].lastName = element.lastName

          });

        } else {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            console.log(element);
            this.arraySplit[index].lastName = ""
          });

        }
        break;
      case 3:
        if (this.checkPhone) {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            this.arraySplit[index].phone = element.phone

          });

        } else {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            console.log(element);
            this.arraySplit[index].phone = ""
          });

        }
        break;
      case 4:
        if (this.checkAdress) {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            this.arraySplit[index].adress = element.adress

          });

        } else {
          this.array = String(localStorage.getItem('array'))
          var arraySave = []
          arraySave = JSON.parse(this.array)
          arraySave.forEach((element: any, index: any) => {
            console.log(element);
            this.arraySplit[index].adress = ""
          });

        }
        break;

      default:
        break;
    }

    this.dataSource = this.arraySplit




  }

  save() {
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
