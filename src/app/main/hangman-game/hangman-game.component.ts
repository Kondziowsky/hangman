import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.sass']
})
export class HangmanGameComponent implements OnInit {

  stringsArray: [];
  randomizedStrings: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.stringsArray = this.route.snapshot.data.tablicaHasel.ArrayOfStrings;
    this.randomizedStrings = this.randomizeFiveStrings();
  }

  sendTypedLetter(val) {

  }

  private randomizeFiveStrings() {
    const arr = [...this.stringsArray];
    return[...Array(5)].map( () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0] );
  }

}
