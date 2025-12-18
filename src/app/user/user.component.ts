import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import {User} from "../models/user.model";
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) selectedUser!: boolean;

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
