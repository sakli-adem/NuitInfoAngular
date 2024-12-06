import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-have-fun',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './have-fun.component.html',
  styleUrls: ['./have-fun.component.css'],
})
export class HaveFunComponent {
  isCatchMeButtonVisible: { [key: number]: boolean } = { 1: false, 2: false, 3: false };
  buttonPosition: { [key: number]: { top: string; left: string } } = {
    1: { top: '50%', left: '50%' },
    2: { top: '50%', left: '50%' },
    3: { top: '50%', left: '50%' },
  };

  constructor(private router: Router) {} // Inject Router

  // Show the button for the corresponding section and reset others
  showCatchMeButton(section: number) {
    Object.keys(this.isCatchMeButtonVisible).forEach((key) => {
      this.isCatchMeButtonVisible[+key] = false;
    });
    this.isCatchMeButtonVisible[section] = true;
  }

  // Move the button for the corresponding section
  moveButton(section: number, event: MouseEvent) {
    const container = (event.target as HTMLElement).parentElement as HTMLElement;
    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      const randomTop = Math.random() * (containerHeight - 50);
      const randomLeft = Math.random() * (containerWidth - 100);

      this.buttonPosition[section] = {
        top: `${randomTop}px`,
        left: `${randomLeft}px`,
      };
    }
  }

  // Navigate to home page
  navigateToHome() {
    this.router.navigate(['/']); // Navigate to root
  }
}
