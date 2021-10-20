import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fxexample',
  templateUrl: './fxexample.component.html',
  styleUrls: ['./fxexample.component.css']
})
export class FxexampleComponent implements OnInit {
  data: any;
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;

  constructor() { }

  ngOnInit(): void {
  }

  fxlayout(value:any) {
    this.data = value.value;
    // console.log(this.data);
  }

  fxlayoutgap(value1:any) {
    this.data1 = value1.value;
    // console.log(this.data1);
  }

  fxlayoutAlign(value2:any){
    this.data2 = value2.value;
    // console.log(this.data1);
  }

  fxlayoutAligncol(value3:any){
    this.data3 = value3.value;
    // console.log(this.data1);
  }

  fxflex(value4:any){
    this.data4 = value4.value;
    // console.log(this.data4);
  }

  fxflexalign(value5:any){
    this.data5 = value5.value;
    console.log(this.data5);
  } 

}
