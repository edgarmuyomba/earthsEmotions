import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() data!: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
