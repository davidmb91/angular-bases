import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() onNewChracter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewChracter.emit(this.character);

    this.character.name = '';
    this.character.power = 0;
  }

}
