import {Component, Input} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from './dummy-user';
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;

  currentUserName: string | undefined;

  onSelectedUser(id: string) {
    for (let i = 0; i <= this.users.length; i++) {
      console.log('ID ' + id +  ' wird geprüft.');
      if (this.users[i].id == id) {
        this.currentUserName = this.users[i].name;
        console.log('ID ' + id +  ' ist aktueller User');
        break;
      }
    }
  }
}
