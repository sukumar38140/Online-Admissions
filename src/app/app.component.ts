import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
// import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyloginComponent } from "./mylogin/mylogin.component";
import { MyregisterComponent } from "./myregister/myregister.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_form_25';
}