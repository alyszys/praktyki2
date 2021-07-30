import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallsComponent } from './walls/walls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WallDetailComponent } from './wall-detail/wall-detail.component';


const routes: Routes = [
  { path: 'walls', component: WallsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: WallDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
