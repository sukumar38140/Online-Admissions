import { Routes } from '@angular/router';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { Form01Component } from './form01/form01.component';
import { PerformComponent } from './perform/perform.component';
import { QualformComponent } from './qualform/qualform.component';
import { CrudComponent } from './crud/crud.component';
import { AccpComponent } from './accp/accp.component';
import { AccpformComponent } from './accpform/accpform.component';

export const routes: Routes = [
    { path: '', redirectTo: 'mylogin', pathMatch: 'full' },
    { path: 'mylogin', component: MyloginComponent },
    { path: 'myregister', component: MyregisterComponent },
    { path: 'form01', component: Form01Component },
    {path: 'perform', component: PerformComponent},
    {path: 'qualform', component: QualformComponent},
    {path:'crud', component: CrudComponent},
    {path: 'accp', component: AccpComponent},
    {path: 'accpform', component:AccpformComponent}
];