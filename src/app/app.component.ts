import { Component, ViewEncapsulation } from '@angular/core';
import { faSchool, faGraduationCap, faCalendarAlt, faPercentage, faMapMarkerAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Portfolio';
  faSchool = faSchool;
  faGraduationCap = faGraduationCap;
  faCalendarAlt = faCalendarAlt;
  faPercentage = faPercentage;
  faMapMarkerAlt = faMapMarkerAlt;
  faAngleRight = faAngleRight;
  projects = [
    {
      title: 'Commercial Agent Front End (CAFE)',
      description: 'My part is to develop, enhance and do modifications in frontend using React Js & backend webapi in .net core.',
      technologies: ['React Js', 'Dotnet Core']
    },
    {
      title: 'Merchant Wallet Interface',
      description: 'My role involves developing web api services (ASP.NET - MVC) and creating tables, stored procedures (SQL Server)',
      technologies: ['ASP.NET - MVC', 'SQL Server']
    },
    {
      title: 'CBD Refunds',
      description: 'My role is developing web API service methods, also responsible for designing UI using aspx pages with CSS, Bootstrap, jQuery and integration.',
      technologies: ['ASP.NET', 'CSS', 'Bootstrap', 'jQuery']
    },
    {
      title: 'Cash Online Virtual Wallet',
      description: 'I am responsible for developing web API service methods and to be consumed in client side. Developed client side (front-end) in ASP.Net MVC and UI designing CSS, Bootstrap, jQuery and integration.',
      technologies: ['ASP.NET - MVC', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server']
    },
    {
      title: 'Merchant Wallet Back office',
      description: 'My work involved consuming service and integrating the data with UI, designing UI and dealing with SP (Stored Proc) in SQL.',
      technologies: ['ASP.NET - MVC', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server']
    },
    {
      title: 'ISRM Qualys',
      description: 'Accountable for enhancements, bug fixes and testing.',
      technologies: ['ASP.NET - MVC']
    }];
}


// https://medium.com/@chiodigiovanni1/a-simple-on-scroll-sticky-menu-with-angular-and-bulma-66fafc7fc7b9
