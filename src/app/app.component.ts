import { Component } from '@angular/core';
import { Data } from './data';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'earthsEmotions';

  readonly date = new Date();
  readonly formattedDate = this.date.toLocaleDateString('en-US', {
    weekday: 'short', 
    year: 'numeric',  
    month: 'short',   
    day: 'numeric'    
  });

  data: Data = {
    polarity: 0.01,
    country: "Uganda",
    date: this.formattedDate
  }

  constructor(private apiService: APIService) {
    this.apiService.polarityNow().subscribe(
      (data) => {
        this.data.polarity = data.average_polarity;
      }
    )
  }
}
