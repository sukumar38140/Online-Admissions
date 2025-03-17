import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//  import { routes } from '../app.routes'; 
import { MyloginComponent } from '../mylogin/mylogin.component';
import { MyregisterComponent } from '../myregister/myregister.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Form01Component } from '../form01/form01.component';
import { PerformComponent } from '../perform/perform.component';
import { QualformComponent } from '../qualform/qualform.component';

 const routes: Routes = [
  { path: '', redirectTo: '/mylogin', pathMatch: 'full' }, 
  { path: 'mylogin', component: MyloginComponent },
  { path: 'myregister', component: MyregisterComponent },
  { path: 'form01', component: Form01Component },
    {path: 'perform', component: PerformComponent},
    {path: 'qualform', component: QualformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
