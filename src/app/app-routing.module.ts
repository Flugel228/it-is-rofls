import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)},
  {path: 'text', loadChildren: () => import('./modules/text/text.module').then(m => m.TextModule)},
  {path: 'comics', loadChildren: () => import('./modules/comics/comics.module').then(m => m.ComicsModule)},
  {path: 'video', loadChildren: () => import('./modules/video/video.module').then(m => m.VideoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
