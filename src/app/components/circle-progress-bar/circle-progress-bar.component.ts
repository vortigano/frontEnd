import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.css']
})
export class CircleProgressBarComponent implements OnInit {
  @Input()
  progress : number;
  @Input()
  label  : string;
  @Input()
  url     : string;
  @Input()
  bgcolor: string;
  @Input()
  shadow : string;
  @Input()
  boxShadow: string;
  constructor() {
    this.progress = 0;
    this.label  = '';
    this.url    = '';
    this.bgcolor = '';
    this.shadow = '';
    this.boxShadow = 'inset 11px 8px 11px 3px #cfb2b2, 16px 9px 13px 3px #373c35';
  }

  ngOnInit(): void {
  }

}
