import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//  import { routes } from '../app.routes'; 
import { MyloginComponent } from '../mylogin/mylogin.component';
import { MyregisterComponent } from '../myregister/myregister.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Form01Component } from '../form01/form01.component';
import { PerformComponent } from '../perform/perform.component';
import { QualformComponent } from '../qualform/qualform.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { CrudComponent } from '../crud/crud.component';
import { AccpComponent } from '../accp/accp.component';
import { AccpformComponent } from '../accpform/accpform.component';

const routes: Routes = [
  { path: '', redirectTo: '/mylogin', pathMatch: 'full' }, 
  { path: 'mylogin', component: MyloginComponent },
  { path: 'myregister', component: MyregisterComponent },
  { path: 'form01', component: Form01Component },
    {path: 'perform', component: PerformComponent},
    {path: 'qualform', component: QualformComponent},
    {path: 'verify-email', component: VerifyEmailComponent},
    {path:'crud', component: CrudComponent},
    {path:'accp', component: AccpComponent},
    {path: 'accpform', component:AccpformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}