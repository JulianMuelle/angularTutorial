import {Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true})
  userId!: string;

  @Input({required: true})
  avatar!: string;

  @Input({required: true})
  name!: string

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=> {return 'assets/users/' + this.avatar()});

  @Output()
  select = new EventEmitter();

  get imagePath() {
  return '../assets/users/' + this.avatar;
  }

  onSelectUser() {
    //outputte die User-Id an die Parent-Component
    console.log("User mit der ID " + this.userId + " wurde angeklickt");
    this.select.emit(this.userId);
  }
}
