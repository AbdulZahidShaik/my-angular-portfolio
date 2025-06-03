import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { EducationComponent } from './education/education.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CardModule } from 'primeng/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import bootstrap from '../main.server'; 
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,CommonModule ,NgbModule ,CardModule, AnimateOnScrollModule, ScrollTopModule, HeaderComponent, MainPageComponent, ExperienceComponent, ProjectsComponent, ContactmeComponent, EducationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
