import { Component, ViewEncapsulation } from '@angular/core';
import { faSchool, faGraduationCap, faCalendarAlt, faPercentage, faMapMarkerAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';



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
}