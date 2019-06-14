import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  data: any;
  options: any;
  constructor(private appService: AppService) {
    this.options = {
      title: {
        text: "Line Chart",
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    this.appService.getLineGraph().subscribe(response => {
      this.data = response;
    });
  }
}
