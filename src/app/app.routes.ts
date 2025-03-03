import { Routes } from '@angular/router';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MyregisterComponent } from './myregister/myregister.component';

export const routes: Routes = [
    { path: ' ', redirectTo: 'mylgoin', pathMatch:'full'},
    { path : 'myloign', component: MyloginComponent},
    { path: 'myregister', component: MyregisterComponent}
];
