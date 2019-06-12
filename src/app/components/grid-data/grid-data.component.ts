import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.scss']
})
export class GridDataComponent implements OnInit {

  @Input('results') results;

  constructor() { }

  ngOnInit() {
    console.log(this.results)
  }

}
