import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact1 = {
    name: 'SAKLI Adem',
    linkedin: 'https://www.linkedin.com/in/adem-sakli-269190201/'
  };

  contact2 = {
    name: 'HASSINE Helmi',
    linkedin: 'https://www.linkedin.com/in/helmi-hassine/'
  };

  openLinkedIn(url: string): void {
    window.open(url, '_blank');
  }
}
