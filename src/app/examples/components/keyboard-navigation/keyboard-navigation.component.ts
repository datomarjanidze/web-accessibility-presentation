import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  KeyboardNavigationPopupComponent,
  ExampleType,
  IMatDialogData as IKeyboardNavigationPopupMatDialogData,
} from './keyboard-navigation-popup/keyboard-navigation-popup.component';

export const selector = 'app-keyboard-navigation';

@Component({
  selector,
  templateUrl: './keyboard-navigation.component.html',
  styleUrls: ['./keyboard-navigation.component.scss', '../common.scss'],
})
export class KeyboardNavigationComponent {
  constructor(private matDialog: MatDialog) {}

  openPopup(exampleType: ExampleType): void {
    this.matDialog.open(KeyboardNavigationPopupComponent, {
      autoFocus: exampleType === 'good-example' ? true : false,
      disableClose: exampleType === 'good-example' ? false : true,
      width: '400px',
      height: '200px',
      data: { exampleType } as IKeyboardNavigationPopupMatDialogData,
    });
  }
}
