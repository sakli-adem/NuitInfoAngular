import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-enjoy-ia-in3d',
  templateUrl: './enjoy-ia-in3d.component.html',
  styleUrls: ['./enjoy-ia-in3d.component.css'],
})
export class EnjoyIaIn3dComponent {
  // Original English text
  englishText: string =
    "Bro, I thought I was going to use an API (a free one, of course, because we dont have money). But for real, if I win the 250 euros, maybe I’ll develop the module for you.";
  // Translated Chinese text
  chineseText: string =
    "兄弟，我本以为我要用一个 API（当然是免费的，因为你不配）。不过说真的，如果我赢了 250 欧元，也许我会为你开发这个模块。";

  // Variable to store the current text (initialized to English)
  currentText: string = this.englishText;

  constructor(private router: Router) {} // Inject Router

  // Function to translate to Chinese
  translateToChinese(): void {
    this.currentText = this.chineseText;
  }

  // Function to navigate to the home page
  navigateToHome(): void {
    this.router.navigate(['/']); // Navigate to the root page
  }
}
