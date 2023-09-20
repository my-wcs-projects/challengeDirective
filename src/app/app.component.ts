import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'challengDirective';

  isAdmin: boolean = false;

  isAdminFct(): void {
    this.isAdmin = !this.isAdmin;
  }
}
