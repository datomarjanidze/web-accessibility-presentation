import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const exampleModulePath = 'examples';
const routes: Routes = [
  { path: '', redirectTo: 'examples', pathMatch: 'full' },
  {
    path: exampleModulePath,
    loadChildren: () =>
      import('./examples/examples.module').then((m) => m.ExamplesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
