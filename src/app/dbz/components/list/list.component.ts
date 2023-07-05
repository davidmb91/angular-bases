import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(id: number): void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(id);
  }

}
