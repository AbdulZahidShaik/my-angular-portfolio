import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from '../main-page/main-page.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';
// Update the path below to the correct location of ContactMeComponent
import { ContactmeComponent } from '../contactme/contactme.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgbModule, // For Bootstrap components behavior (collapse, etc.)
    RouterModule, // Required for routerLink directives
   
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

}