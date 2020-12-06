import { Component } from '@angular/core';
import { faSchool, faGraduationCap, faCalendarAlt, faPercentage, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  faSchool = faSchool;
  faGraduationCap = faGraduationCap;
  faCalendarAlt = faCalendarAlt;
  faPercentage = faPercentage;
  faMapMarkerAlt = faMapMarkerAlt;
}


// https://medium.com/@chiodigiovanni1/a-simple-on-scroll-sticky-menu-with-angular-and-bulma-66fafc7fc7b9
