import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  checkpoints = [
    { route: '/have-fun', label: 'Have Fun' },
    { route: '/enjoy-ia-in3d', label: 'Enjoy IA in 3D' },
    { route: '/games', label: 'Games' },
    { route: '/explore', label: 'Explore' },
    { route: '/contact', label: 'Contact Us' }, // Fifth Checkpoint
  ];

  currentCheckpointIndex = 0;
  nextCheckpointIndex = 1;
  exploreCheckpointIndex = 2;
  fifthCheckpointIndex = 4; // New checkpoint

  currentCheckpointY = -800;
  nextCheckpointY = -1000;
  exploreCheckpointY = -1200;
  fifthCheckpointY = -1600; // Y position for the fifth checkpoint

  carY = 1500;
  movementStep = 50;
  arrivalDistance = 0;
  buttonDistance = 1200;
  lineOffset = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (this.currentCheckpointIndex >= this.checkpoints.length) return;

    const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

    this.currentCheckpointY += (scrollDirection === 'down') ? this.movementStep : -this.movementStep;

    if (this.nextCheckpointIndex < this.checkpoints.length) {
      this.nextCheckpointY = this.currentCheckpointY - this.buttonDistance;
    }

    if (this.exploreCheckpointIndex < this.checkpoints.length) {
      this.exploreCheckpointY = this.nextCheckpointY - this.buttonDistance;
    }

    if (this.fifthCheckpointIndex < this.checkpoints.length) {
      this.fifthCheckpointY = this.exploreCheckpointY - this.buttonDistance;
    }

    this.lineOffset += (scrollDirection === 'down') ? -40 : 40;
    const roadElem = document.querySelector('.road') as HTMLElement;
    if (roadElem) {
      roadElem.style.setProperty('--line-offset', `${this.lineOffset}px`);
    }

    const currentDistance = Math.abs(this.currentCheckpointY - this.carY);
    if (currentDistance < this.arrivalDistance) {
      this.currentCheckpointIndex++;
      this.currentCheckpointIndex = Math.min(this.currentCheckpointIndex, this.checkpoints.length);

      this.nextCheckpointIndex = this.currentCheckpointIndex + 1;
      if (this.nextCheckpointIndex < this.checkpoints.length) {
        this.nextCheckpointY = this.currentCheckpointY - this.buttonDistance;
      }

      this.exploreCheckpointIndex = this.nextCheckpointIndex + 1;
      if (this.exploreCheckpointIndex < this.checkpoints.length) {
        this.exploreCheckpointY = this.nextCheckpointY - this.buttonDistance;
      }

      this.fifthCheckpointIndex = this.exploreCheckpointIndex + 1;
      if (this.fifthCheckpointIndex < this.checkpoints.length) {
        this.fifthCheckpointY = this.exploreCheckpointY - this.buttonDistance;
      }
    }

    this.updateCheckpointDisplay();
  }

  updateCheckpointDisplay(): void {
    const currentElem = document.getElementById('checkpoint-current');
    const nextElem = document.getElementById('checkpoint-next');
    const exploreElem = document.getElementById('checkpoint-explore');
    const fifthElem = document.getElementById('checkpoint-fifth');

    if (currentElem) {
      if (this.currentCheckpointIndex < this.checkpoints.length) {
        currentElem.style.visibility = 'visible';
        const currentDistance = Math.abs(this.currentCheckpointY - this.carY);
        const scale = this.computeScale(currentDistance);
        currentElem.style.transform = `translateZ(50px) translateX(-50%) translateY(${this.currentCheckpointY}px) scale(${scale})`;
      } else {
        currentElem.style.visibility = 'hidden';
      }
    }

    if (nextElem) {
      if (this.nextCheckpointIndex < this.checkpoints.length) {
        nextElem.style.visibility = 'visible';
        const nextDistance = Math.abs(this.nextCheckpointY - this.carY);
        const scaleNext = this.computeScale(nextDistance);
        nextElem.style.transform = `translateZ(50px) translateX(-50%) translateY(${this.nextCheckpointY}px) scale(${scaleNext})`;
      } else {
        nextElem.style.visibility = 'hidden';
      }
    }

    if (exploreElem) {
      if (this.exploreCheckpointIndex < this.checkpoints.length) {
        exploreElem.style.visibility = 'visible';
        const exploreDistance = Math.abs(this.exploreCheckpointY - this.carY);
        const scaleExplore = this.computeScale(exploreDistance);
        exploreElem.style.transform = `translateZ(50px) translateX(-50%) translateY(${this.exploreCheckpointY}px) scale(${scaleExplore})`;
      } else {
        exploreElem.style.visibility = 'hidden';
      }
    }

    if (fifthElem) {
      if (this.fifthCheckpointIndex < this.checkpoints.length) {
        fifthElem.style.visibility = 'visible';
        const fifthDistance = Math.abs(this.fifthCheckpointY - this.carY);
        const scaleFifth = this.computeScale(fifthDistance);
        fifthElem.style.transform = `translateZ(50px) translateX(-50%) translateY(${this.fifthCheckpointY}px) scale(${scaleFifth})`;
      } else {
        fifthElem.style.visibility = 'hidden';
      }
    }
  }

  computeScale(distance: number): number {
    const maxScale = 2.0;
    const minScale = 0.5;
    const maxDistance = 2000;
    return Math.max(
      minScale,
      maxScale - (distance / maxDistance) * (maxScale - minScale)
    );
  }

  get currentCheckpointLabel(): string {
    if (this.currentCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.currentCheckpointIndex].label;
    }
    return '';
  }

  get nextCheckpointLabel(): string {
    if (this.nextCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.nextCheckpointIndex].label;
    }
    return '';
  }

  get exploreCheckpointLabel(): string {
    if (this.exploreCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.exploreCheckpointIndex].label;
    }
    return '';
  }

  get fifthCheckpointLabel(): string {
    if (this.fifthCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.fifthCheckpointIndex].label;
    }
    return '';
  }

  get currentCheckpointRoute(): string {
    if (this.currentCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.currentCheckpointIndex].route;
    }
    return '';
  }

  get nextCheckpointRoute(): string {
    if (this.nextCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.nextCheckpointIndex].route;
    }
    return '';
  }

  get exploreCheckpointRoute(): string {
    if (this.exploreCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.exploreCheckpointIndex].route;
    }
    return '';
  }

  get fifthCheckpointRoute(): string {
    if (this.fifthCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.fifthCheckpointIndex].route;
    }
    return '';
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  onExploreClick(): void {
    const audio = document.getElementById('exploreAudio') as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0; // Reset audio to the beginning
      audio.play()
        .then(() => {
          console.log('Audio started playing successfully.');
          this.router.navigate([this.exploreCheckpointRoute]); // Navigate after audio plays
        })
        .catch((error) => {
          console.error('Error playing audio:', error);
          this.router.navigate([this.exploreCheckpointRoute]); // Navigate even if audio fails
        });
    } else {
      console.error('Audio element not found');
      this.router.navigate([this.exploreCheckpointRoute]);
    }
  }
}
