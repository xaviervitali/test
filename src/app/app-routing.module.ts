import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameViewComponent } from './game-view/game-view.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListComponent,
  },
  { path: 'game/:id', component: GameViewComponent, pathMatch: 'full' },

  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
