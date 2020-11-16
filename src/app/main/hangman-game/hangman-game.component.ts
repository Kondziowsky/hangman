import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObjectOfLettersPattern} from '../../shared/models/objectOfLettersPattern';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.sass']
})
export class HangmanGameComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  stringsArray: [];
  randomizedStrings: any;
  letters: Array<ObjectOfLettersPattern>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.stringsArray = this.route.snapshot.data.tablicaHasel.ArrayOfStrings;
    this.randomizedStrings = this.randomizeFiveStrings();
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.drawCanvas();

    this.ctx.beginPath();
    // -> głowa
    this.ctx.arc(200, 100, 50, 0, 2 * Math.PI);

    // -> tułów
    this.ctx.moveTo(200, 150);
    this.ctx.lineTo(200, 270);

    // -> nogi
    this.ctx.moveTo(200, 270);
    this.ctx.lineTo(150, 350);

    this.ctx.moveTo(200, 270);
    this.ctx.lineTo(250, 350);

    // -> rece
    this.ctx.moveTo(200, 210);
    this.ctx.lineTo(130, 180);

    this.ctx.moveTo(200, 210);
    this.ctx.lineTo(280, 180);

    this.ctx.stroke();

    this.makeLetters();
  }

  drawCanvas() {
    this.ctx.beginPath();
    this.ctx.moveTo(200, 50);
    this.ctx.lineTo(200, 10);
    this.ctx.lineTo(50, 10);
    this.ctx.lineTo(50, 400);
    this.ctx.stroke();
  }

  makeLetters() {
    debugger;
    const word = ('abcdefghijklmnopqrstuvwxyz');
    this.letters = word.split('').map((char) => {
      return { name: char, chosen: false };
    });
  }

  sendTypedLetter(val) {

  }

  checkLetter(val) {
    if (val) {
      this.letters.find( (x: ObjectOfLettersPattern) => {
        if (x.name === val.name) {
          x.chosen = true;
        }
      });
    }
  }

  private randomizeFiveStrings() {
    const arr = [...this.stringsArray];
    return[...Array(5)].map( () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0] );
  }

}
