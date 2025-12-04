import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = signal(DUMMY_USERS[randomIndex]); //signal hat Tracking-Mechanism, der autom. UI updatet bei Änderung
  imagePath = computed(()=> '../assets/users/' + this.selectedUser().avatar);

  //for computed values in the template -> get-Funktion
  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser().avatar;
  //}

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
