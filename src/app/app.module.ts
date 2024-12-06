import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HaveFunComponent } from './have-fun/have-fun.component';
import { ContactComponent } from './contact/contact.component'; // Import ContactComponent


@NgModule({
  declarations: [
    AppComponent,
    HaveFunComponent, // Declare HaveFunComponent
    ContactComponent, // Declare ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, // Add CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
