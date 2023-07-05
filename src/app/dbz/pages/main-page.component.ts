import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }];

  constructor() { }

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(id: number): void {
    this.characters.splice(id, 1);
  }

}
