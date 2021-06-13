import { Component, ViewEncapsulation } from '@angular/core';
import { faSchool, faGraduationCap, faCalendarAlt, faPercentage, faMapMarkerAlt, faAngleRight, faExpandAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: 'app-profile-v2',
    templateUrl: './profile-v2.component.html',
    styleUrls: ['./profile-v2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileV2Component {
    faSchool = faSchool;
    faGraduationCap = faGraduationCap;
    faCalendarAlt = faCalendarAlt;
    faPercentage = faPercentage;
    faMapMarkerAlt = faMapMarkerAlt;
    faAngleRight = faAngleRight;
    faExpandAlt = faExpandAlt;

    applyAnimationForProjectCard = false;
    projects = [
        {
            title: 'Commercial Agent Front End',
            content: 'My part is to develop, enhance and do modifications in frontend using React Js & backend webapi in .net core.',
            technologies: ['React Js', 'Dotnet Core'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Merchant Wallet Interface',
            content: 'My role involves developing web api services (ASP.NET - MVC) and creating tables, stored procedures (SQL Server)',
            technologies: ['ASP.NET - MVC', 'SQL Server'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'CBD Refunds',
            content: 'My role is developing web API service methods, also responsible for designing UI using aspx pages with CSS, Bootstrap, jQuery and integration.',
            technologies: ['ASP.NET', 'CSS', 'Bootstrap', 'jQuery'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Cash Online Virtual Wallet',
            content: 'I am responsible for developing web API service methods and to be consumed in client side. Developed client side (front-end) in ASP.Net MVC and UI designing CSS, Bootstrap, jQuery and integration.',
            technologies: ['ASP.NET - MVC', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Merchant Wallet Back office',
            content: 'My work involved consuming service and integrating the data with UI, designing UI and dealing with SP (Stored Proc) in SQL.',
            technologies: ['ASP.NET - MVC', 'CSS', 'Bootstrap', 'jQuery', 'SQL Server'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'ISRM Qualys',
            content: 'Accountable for enhancements, bug fixes and testing.',
            technologies: ['ASP.NET - MVC'],
            applyAnimationForProjectCard: false
        }];

    projectExpandClick(selectedProject: string) {
        this.projects.map(proj => {
            if (proj.title === selectedProject) {
                proj.applyAnimationForProjectCard = !proj.applyAnimationForProjectCard;
            }
            else {
                proj.applyAnimationForProjectCard = false;
            }
        });
    }
}