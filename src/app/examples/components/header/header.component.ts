import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { exampleModulePath } from '../../../app-routing.module';

import { selector as ariaLandmarksSelector } from '../aria-landmarks/aria-landmarks.component';
import { selector as buttonSelector } from '../button/button.component';
import { selector as colorContrastSelector } from '../color-contrast/color-contrast.component';
import { selector as headingsSelector } from '../headings/headings.component';
import { selector as imageAltTextSelector } from '../image-alt-text/image-alt-text.component';
import { selector as inputLabelsSelector } from '../input-labels/input-labels.component';
import { selector as keyboardNavigationSelector } from '../keyboard-navigation/keyboard-navigation.component';
import { selector as linkUnderlinesSelector } from '../link-underlines/link-underlines.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  paths: string[] = [
    ariaLandmarksSelector,
    buttonSelector,
    colorContrastSelector,
    headingsSelector,
    imageAltTextSelector,
    keyboardNavigationSelector,
    inputLabelsSelector,
    linkUnderlinesSelector,
  ].map((path) => path.split('app-')[1]);
  pathToRouterLinkMappings: { [key: string]: string } = {};
  pathToAriaLabelMappings: { [key: string]: string } = {};

  ngOnInit(): void {
    this.initPathToRouterLinkMappings();
    this.initPathToAriaLabelMappings();
  }

  initPathToRouterLinkMappings(): void {
    this.pathToRouterLinkMappings = this.paths.reduce((acc, path) => {
      acc[path] = `/${exampleModulePath}/${path}`;
      return acc;
    }, this.pathToRouterLinkMappings);
  }

  initPathToAriaLabelMappings(): void {
    this.pathToAriaLabelMappings = this.paths.reduce((acc, path) => {
      acc[path] = path
        .split('-')
        .map(
          (examplePath) =>
            `${examplePath[0].toUpperCase()}${examplePath.substring(1)}`
        )
        .join(' ');
      return acc;
    }, this.pathToAriaLabelMappings);
  }
}
