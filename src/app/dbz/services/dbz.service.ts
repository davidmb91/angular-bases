import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter(character: Character): void {
    // Este
    const newCharater: Character = {id: uuid(), ...character};

    this.characters.push(newCharater);
  }

  // onDeleteCharacter(id: number): void {
  //   this.characters.splice(id, 1);
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
