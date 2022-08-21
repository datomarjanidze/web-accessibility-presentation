import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type ExampleType = 'bad-example' | 'good-example';
export interface IMatDialogData {
  exampleType: ExampleType;
}

@Component({
  selector: 'app-keyboard-navigation-popup',
  templateUrl: './keyboard-navigation-popup.component.html',
  styleUrls: ['./keyboard-navigation-popup.component.scss'],
})
export class KeyboardNavigationPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private matDialogData: IMatDialogData) {}
}
