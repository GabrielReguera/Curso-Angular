import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'clebinho';
  userData = {
    email: 'clebinho@gmail.com',
    password: 'coxinha123'
  };

  title = 'curso-angular';
}
