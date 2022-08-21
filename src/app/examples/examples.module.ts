import { NgModule } from '@angular/core';

// Native Modules
import { CommonModule } from '@angular/common';

// `@angular/material` Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// App Modules
import { ExamplesRoutingModule } from './examples-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { AriaLandmarksComponent } from './components/aria-landmarks/aria-landmarks.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorContrastComponent } from './components/color-contrast/color-contrast.component';
import { AccessibilityExampleComponent } from './components/accessibility-example-container/accessibility-example-container.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { ImageAltTextComponent } from './components/image-alt-text/image-alt-text.component';
import { InputLabelsComponent } from './components/input-labels/input-labels.component';
import { KeyboardNavigationComponent } from './components/keyboard-navigation/keyboard-navigation.component';
import { KeyboardNavigationPopupComponent } from './components/keyboard-navigation/keyboard-navigation-popup/keyboard-navigation-popup.component';
import { LinkUnderlinesComponent } from './components/link-underlines/link-underlines.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ExamplesRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    LandingComponent,
    AccessibilityExampleComponent,
    AriaLandmarksComponent,
    ButtonComponent,
    ColorContrastComponent,
    HeadingsComponent,
    ImageAltTextComponent,
    InputLabelsComponent,
    KeyboardNavigationComponent,
    KeyboardNavigationPopupComponent,
    LinkUnderlinesComponent,
  ],
})
export class ExamplesModule {}
