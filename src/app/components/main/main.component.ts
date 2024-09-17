import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  @Input() data!: Data;
  countries: { name: string }[] = [];

  selectedCountry: { name: string } | null = null;

  selectedDate: Date = new Date();

  ngOnInit(): void {
    this.countries = [
      { name: "Uganda" },
      { name: "Kenya" },
      { name: "Tanzania" },
    ]
    this.selectedCountry = this.countries[0]; 
  }

}
