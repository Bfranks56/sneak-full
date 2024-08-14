import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoe-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoe-test.component.html',
  styleUrl: './shoe-test.component.scss',
})
export class ShoeTestComponent {
   userName = 'Bryant';
}
