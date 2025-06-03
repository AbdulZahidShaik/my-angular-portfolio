import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ButtonModule, CarouselModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent { }