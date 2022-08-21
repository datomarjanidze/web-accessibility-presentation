import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accessibility-example-container',
  templateUrl: './accessibility-example-container.component.html',
  styleUrls: ['./accessibility-example-container.component.scss'],
})
export class AccessibilityExampleComponent {
  @Input() exampleType: '' | 'bad-example' | 'good-example' = '';
}
