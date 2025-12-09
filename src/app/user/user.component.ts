import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=> {return 'assets/users/' + this.avatar()});

  @Output()
  select = new EventEmitter();


  get imagePath() {
  return '../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    //outputte die User-Id an die Parent-Component
    console.log("User mit der ID " + this.user.id + " wurde angeklickt");
    this.select.emit(this.user.id);
  }
}
