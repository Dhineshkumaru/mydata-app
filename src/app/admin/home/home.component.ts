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
      strline:'these texts are working1',
      strline1:'these texts are working2'
    },
    {
      strline:'these texts are working3',
      strline1:'these texts are working4'
    },
    {
      strline:'these texts are working5',
      strline1:'these texts are working6'
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
