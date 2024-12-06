// appConfig.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HaveFunComponent } from './have-fun/have-fun.component';
import { GameComponent } from './games/games.component';
import { EnjoyIaIn3dComponent } from './enjoy-ia-in3d/enjoy-ia-in3d.component';
import { ContactComponent } from './contact/contact.component'; // Import ContactComponent

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'have-fun', component: HaveFunComponent },
  { path: 'games', component: GameComponent },
  { path: 'enjoy-ia-in3d', component: EnjoyIaIn3dComponent },
  { path: 'contact', component: ContactComponent }, // Add route for ContactComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
