import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//  import { routes } from '../app.routes'; 
import { MyloginComponent } from '../mylogin/mylogin.component';
import { MyregisterComponent } from '../myregister/myregister.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

 const routes: Routes = [
  { path: '', redirectTo: '/mylogin', pathMatch: 'full' }, 
  { path: 'mylogin', component: MyloginComponent },
  { path: 'myregister', component: MyregisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}