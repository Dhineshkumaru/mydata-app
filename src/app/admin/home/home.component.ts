import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // strArrs: Object[];
  strArrs = [
    {
      strline:'these texts are working1-1',
      strline1:'these texts are working1-2'
    },
    {
      strline:'these texts are working2-1',
      strline1:'these texts are working2-2'
    },
    {
      strline:'these texts are working3-1',
      strline1:'these texts are working3-2'
    }
  ];
  strArrs1 = [
    {
      strline2:'these texts are working1-3',
      strline3:'these texts are working1-4'
    },
    {
      strline2:'these texts are working2-3',
      strline3:'these texts are working2-4'
    },
    {
      strline2:'these texts are working3-3',
      strline3:'these texts are working3-4'
    }
  ];
  
  constructor() {
    // this.strArrs = [
    //   {
    //     strline:'these texts are working1',
    //     strline1:'these texts are working2'
    //   },
    //   {
    //     strline:'these texts are working3',
    //     strline1:'these texts are working4'
    //   },
    //   {
    //     strline:'these texts are working5',
    //     strline1:'these texts are working6'
    //   }
    // ];
   }

  ngOnInit(): void {
  }

}
