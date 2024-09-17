import { Component } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'earthsEmotions';

  data: Data = {
    polarity: 0.01,
    country: "Uganda",
    date: new Date("2024-09-11T14:59:16")
  }
}
