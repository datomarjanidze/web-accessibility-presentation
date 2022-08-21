import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// Native Modules
import { RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './components/landing/landing.component';
import { AriaLandmarksComponent } from './components/aria-landmarks/aria-landmarks.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorContrastComponent } from './components/color-contrast/color-contrast.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { ImageAltTextComponent } from './components/image-alt-text/image-alt-text.component';
import { InputLabelsComponent } from './components/input-labels/input-labels.component';
import { KeyboardNavigationComponent } from './components/keyboard-navigation/keyboard-navigation.component';
import { LinkUnderlinesComponent } from './components/link-underlines/link-underlines.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Web Accessibility Examples',
  },
  {
    path: 'aria-landmarks',
    component: AriaLandmarksComponent,
    title: 'Aria Landmarks',
  },
  {
    path: 'button',
    component: ButtonComponent,
    title: 'Button',
  },
  {
    path: 'color-contrast',
    component: ColorContrastComponent,
    title: 'Color Contrast',
  },
  {
    path: 'headings',
    component: HeadingsComponent,
    title: 'Headings',
  },
  {
    path: 'image-alt-text',
    component: ImageAltTextComponent,
    title: 'Image Alt Text',
  },
  {
    path: 'input-labels',
    component: InputLabelsComponent,
    title: 'Input Labels',
  },
  {
    path: 'keyboard-navigation',
    component: KeyboardNavigationComponent,
    title: 'Keyboard Navigation',
  },
  {
    path: 'link-underlines',
    component: LinkUnderlinesComponent,
    title: 'Link Underlines',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
