import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular_App';
}

// importing new component get added into app\Components\User\User.Components.ts
// "UserComponent" is the name of the class - 
import { UserComponent } from './Components/User/User.Components';
