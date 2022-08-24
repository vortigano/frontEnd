import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.css']
})
export class CircleProgressBarComponent implements OnInit {
  @Input()
  public mi_var : number;
  @Input()
  label  : string;
  @Input()
  url     : string;

  constructor() {
    this.mi_var = 10;
    this.label  = "";
    this.url    = "";
  }

  ngOnInit(): void {
  }

}
