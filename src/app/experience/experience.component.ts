import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipModule } from 'primeng/chip';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    
    ChipModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
    trigger('branchGrow', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      image: 'Images/Nowcomlogo.jpg',
      company: 'Nowcom Corporation, India',
      position: 'Jr Software Engineer',
      dates: 'March 2022 - December 2022',
      description: [
        'Developed responsive single-page applications using Angular, TypeScript, and RESTful APIs in an Agile environment, improving page load speed by 20% and enhancing user experience.',
        'Leveraged Angular CLI, Git, and IDEs to create scalable code, implement reactive forms with validations, and utilize Angular modules, services, and directives.',
        'Experimented with 10+ developer tools in Agile sprints to streamline development processes.',
      ],
      tags: ['Angular', 'TypeScript', 'RESTful APIs', 'Agile', 'Git'],
      state: 'enter',
    },
    {
      image: 'Images/agrietern_technologies_private_limited_logo.jpg',
      company: 'Agrietern Technologies, India',
      position: 'Front-End Developer Intern',
      dates: 'July 2021 - October 2021',
      description: [
        'Implemented core e-commerce features like product catalogs and secured checkout processes, optimizing the product recommendation algorithm using linear programming, resulting in a 25% increase in click-through rates.',
        'Partnered with UX/UI designers to develop interactive, brand-aligned components and collaborated with back-end teams for seamless integration and debugging.',
      ],
      tags: ['Bootstrap', 'NgRx', 'Figma', 'Material-UI', 'Git'],
      state: 'enter',
    },
    {
      image: 'Images/ngitlogo.jpg',
      company: 'NgITians, India',
      position: 'Student Website Developer Intern',
      dates: 'March 2020 - June 2021',
      description: [
        'Collaborated with students to build a web application from scratch, featuring platforms for research sharing, club information, college notices, and an interactive leaderboard.',
        'Implemented social media functionalities, boosting user interaction by 60% and reaching 600+ active users within 6 months.',
      ],
      tags: ['Angular', 'JavaScript', 'Bootstrap', 'Team Collaboration'],
      state: 'enter',
    },
  ];

  ngOnInit(): void {}
}