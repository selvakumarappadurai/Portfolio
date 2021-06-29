import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import {
    faSchool, faGraduationCap, faCalendarAlt, faPercentage,
    faMapMarkerAlt, faAngleRight, faExpandAlt, faBuilding,
    faCompressAlt, faBars, faTimes
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

    applyAnimationForProjectCard = false;
    showMenu = false;

    projects = [
        {
            title: 'Data Magine',
            content: 'This is legacy windows application (VB6, C++) migration to web application (Angular, .NET Core) project. Here I played my role in both frontend development using angular and backend development using .NET Core. Took responsibility to do POC and put a base for new idea E-Form as enhancement to our applications. Have learned about external third-party tool “LeadTools” which plays vital role in our application. And experienced a new flavour in developing web API using DDD – Domain driven design, CQRS – Command and Query Responsibility Segregation. Responsible for reviewing UX, requirements discussion with BA and analyse the requirement against legacy.',
            technologies: ['Angular', '.NET Core', 'SCSS'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Commercial Agent Front End',
            content: 'This is a legacy web application (asp.net - MVC) migration to web application using React JS and .NET core. Here am responsible for developing new features and enhancement to existing features in front end part and also have involved in API enhancements for few features.',
            technologies: ['React Js', '.NET Core'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Merchant Wallet Interface',
            content: 'This is a web API project, where my role involves creating tables, stored procedures and web API services.',
            technologies: ['.NET - MVC', 'SQL'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'CBD Refunds',
            content: 'My role is developing web API service endpoints and also modifications in existing UI (aspx).',
            technologies: ['.NET - MVC', 'CSS', 'Bootstrap', 'jQuery'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Cash Online Virtual Wallet',
            content: 'Here my work involves developing both front end (ASP.NET - MVC), web API service and integration of service in front end.',
            technologies: ['.NET - MVC', 'CSS', 'Bootstrap', 'jQuery'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'Merchant Wallet Back office',
            content: 'Here my work involves developing front end (ASP.NET – MVC) and consuming web API service in front end. Also sometimes involved in changes in stored procedures.',
            technologies: ['.NET - MVC', 'CSS', 'Bootstrap', 'jQuery'],
            applyAnimationForProjectCard: false
        },
        {
            title: 'ISRM Qualys',
            content: 'Accountable for enhancements and bug fixes.',
            technologies: ['.NET', 'C#'],
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