import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import {
    faSchool, faGraduationCap, faCalendarAlt, faPercentage,
    faMapMarkerAlt, faAngleRight, faExpandAlt, faBuilding,
    faCompressAlt, faBars, faTimes, faSun, faMoon
} from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: 'app-profile-v2',
    templateUrl: './profile-v2.component.html',
    styleUrls: ['./profile-v2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileV2Component implements OnInit {
    faSchool = faSchool;
    faGraduationCap = faGraduationCap;
    faCalendarAlt = faCalendarAlt;
    faPercentage = faPercentage;
    faMapMarkerAlt = faMapMarkerAlt;
    faAngleRight = faAngleRight;
    faExpandAlt = faExpandAlt;
    faBuilding = faBuilding;
    faCompressAlt = faCompressAlt;
    faBars = faBars;
    faTimes = faTimes;
    faSun = faSun;
    faMoon = faMoon;

    applyAnimationForProjectCard = false;
    showMenu = false;

    projects = [
        {
            title: 'Data Magine',
            content: 'This is legacy windows application (VB6, C++) migration to web application (Angular, .NET Core) project. Here I played my role in both frontend development using angular and backend development using .NET Core. Took responsibility to do POC and put a base for new idea E-Form as enhancement to our applications. Have learned about external third-party tool “LeadTools” which plays vital role in our application and also experienced a new flavor in developing web API using DDD – Domain driven design, CQRS – Command and Query Responsibility Segregation. Responsible for reviewing UX, requirements discussion with BA and analyze the requirement against legacy.',
            // technologies: ['Angular', '.NET Core', 'SCSS'],
            technologies: ['ASP.NET CORE 3.1 WEB API', 'C# 8.0', 'ANGULAR 9', 'ENTITY FRAMEWORK CORE', 'LINQ', 'SQL', 'HTML 5', 'CSS', 'TYPE SCRIPT', 'BOOTSTRAP 4.3', 'DESIGN PATTERNS (REPOSITORY, UNIT OF WORK, MEDIATOR)'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Commercial Agent Front End',
            content: 'This is a legacy web application (asp.net - MVC) migration to web application using React JS and .NET core. Here am responsible for developing new features, enhancement to existing features in front end part and also have involved in API enhancements for few features.',
            technologies: ['React Js', 'ASP.NET Core'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Merchant Wallet Interface',
            content: 'Responsible for developing web API using asp.net MVC and it is consumed by another team for their angular UI application. Actively interacted with the UI team for gathering their requirements and come up with a plan for developing the API from database table to outer face contracts.',
            technologies: ['ASP.NET - MVC', 'SQL'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'CBD Refunds',
            content: 'Responsible for developing business logics and few changes in existing UI. ',
            technologies: ['ASP.NET - MVC', 'Bootstrap', 'jQuery'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Cash Online Virtual Wallet',
            content: 'Responsible for developing web API, UI and integration of service.',
            technologies: ['ASP.NET - MVC', 'Bootstrap', 'jQuery'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Merchant Wallet Back office',
            content: 'Here my work involves developing web API, UI as per requirement and also some involved in creation/modification of few stored procedures in SQL.',
            technologies: ['ASP.NET - MVC', 'Bootstrap', 'jQuery', 'SQL'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'ISRM Qualys',
            content: 'Involved in few enhancements and Bug fixes.',
            technologies: ['ASP.NET'],
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

    ngOnInit() {
        if (window.innerWidth >= 720) {
            this.showMenu = true;
        }
        else {
            this.showMenu = false;
        }
    }

    openMenu() {
        this.showMenu = !this.showMenu;
    }

    onThemeChange(e) {
        if (e.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth >= 720) {
            this.showMenu = true;
        }
        else {
            this.showMenu = false;
        }
    }
}