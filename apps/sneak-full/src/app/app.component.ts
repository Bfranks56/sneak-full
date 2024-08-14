import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShoeTestComponent } from './components/shoe-test/shoe-test.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ShoeTestComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sneak-full';
}
