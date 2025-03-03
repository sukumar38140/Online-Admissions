import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyloginComponent } from '../mylogin/mylogin.component';
import { MyregisterComponent } from '../myregister/myregister.component';

const routes: Routes = [
  { path: 'mylogin', component: MyloginComponent },
  { path: 'myregister', component: MyregisterComponent },
  { path: '', redirectTo: '/mylogin', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
