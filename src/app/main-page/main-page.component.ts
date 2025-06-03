import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('statsRef') statsRef!: ElementRef;
  
  isVisible = false;
  isFloating = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Trigger animations on load
    setTimeout(() => {
      this.isVisible = true;
    }, 500);

    // Set up intersection observer for stats animation
    setTimeout(() => {
      if (this.statsRef) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible = true;
            }
          });
        });
        
        observer.observe(this.statsRef.nativeElement);
      }
    }, 1000);

    // Add smooth scrolling for navigation links
    if (isPlatformBrowser(this.platformId)) {
      this.setupSmoothScrolling();
    }
  }

  setupSmoothScrolling(): void {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
}

function constructor(arg0: any, platformId: any, Object: ObjectConstructor) {
  throw new Error('Function not implemented.');
}
