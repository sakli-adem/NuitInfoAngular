import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  standalone: true, // Mark the component as standalone
  imports: [CommonModule] // Import CommonModule
})
export class GameComponent {
  board: string[] = Array(9).fill(null);
  currentPlayer: string = 'X';
  winner: string | null = null;
  displayedWinner: string | null = null;

  constructor(private router: Router) {} // Inject Router

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
        this.displayedWinner = this.board[a] === 'X' ? 'O' : 'X'; // Reverse the winner display
        break;
      }
    }
  }

  isDraw(): boolean {
    return !this.winner && this.board.every(cell => cell);
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.displayedWinner = null;
  }

  // Navigate to the home page
  navigateToHome(): void {
    this.router.navigate(['/']); // Navigate to the root page
  }
}
