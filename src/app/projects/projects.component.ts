import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

export interface Project {
  image: string;
  name: string;
  Technology: string;
  description: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    image: 'Images/Handgesturegaming',
    name: 'Gesture Controlled Gaming Application',
    Technology: 'OpenCV, Python, MediaPipe',
    description: 'This project involves creating a gesture-controlled gaming application using OpenCV and MediaPipe. It allows users to interact with games using hand gestures, enhancing the gaming experience.',
    link: 'https://github.com/AbdulZahidShaik'
  },
  {
    image: 'Images/SudokuSolverAlgo',
    name: 'Sudoku Puzzle Solving with algorithms',
    Technology: 'Algorithm Analysis and Design',
    description: 'This project focuses on solving Sudoku puzzles using various algorithms, including backtracking, constraint propagation, simulated annealing, and algorithms. It aims to demonstrate the efficiency and effectiveness of these algorithms in solving complex puzzles.',
    link: 'https://github.com/AbdulZahidShaik'
  },
  {
    image: 'Images/EthicsClassProject.jpg',
    name: 'Ethics in AI (CS510)',
    Technology: 'Artificial Intelligence',
    description: 'This project explores the ethical implications of AI technologies and their impact on society. It includes discussions and presentations on bias in AI, privacy concerns, and the responsible use of AI in various applications.',
    link: 'https://github.com/AbdulZahidShaik'
  },
  {
    image: 'Images/MedicalChatbotLLM.jpg',
    name: 'Medical Chatbot using Generative AI',
    Technology: 'Large Language Models (LLMs), Generative AI',
    description: 'This project involves developing a medical chatbot using Generative AI and Large Language Models (LLMs). It aims to provide users with accurate medical information and assistance through natural language processing.',
    link: 'https://github.com/AbdulZahidShaik'
  },
  {
    image: 'Images/Edge-AI-Chips-Market.jpg',
    name: 'CS 505 (R&C) – AI and Semi-Conductor industry synergy',
    Technology: 'AI, Semiconductor Industry',
    description: 'This project investigates the synergy between AI and the semiconductor industry, exploring how AI technologies can enhance semiconductor design, manufacturing, and applications. It includes research and analysis of current trends and future prospects.',
    link: 'https://github.com/AbdulZahidShaik'
  },
  {
    image: 'Images/Handgesturegaming',
    name: 'Project 6',
    Technology: 'Apr 2024 - Jun 2024',
    description: 'Description of Project 6',
    link: 'https://github.com/AbdulZahidShaik'
  }
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.projects = PROJECTS;
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}