import { Component } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'earthsEmotions';

  readonly date = new Date("2024-09-11T14:59:16");
  readonly formattedDate = this.date.toLocaleDateString('en-US', {
    weekday: 'short',   // "Wed"
    year: 'numeric',    // "2024"
    month: 'short',     // "Sep"
    day: 'numeric'      // "11"
  });

  data: Data = {
    polarity: 0.01,
    country: "Uganda",
    date: this.formattedDate
  }
}
