import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    
    { path: '', component: MainPageComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactmeComponent },
    { path: 'footer', component: FooterComponent }

];
