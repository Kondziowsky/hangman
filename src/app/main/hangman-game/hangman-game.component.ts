import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObjectOfLettersPattern} from '../../shared/models/objectOfLettersPattern';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalGameOverComponent} from '../../components/modal-game-over/modal-game-over.component';

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
  hidedSlogan;
  typedLetter;
  constructor(private route: ActivatedRoute,
              private modalService: NgbModal) { }

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
    this.chooseHidedSlogan();
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
    const word = ('abcdefghijklmnopqrstuvwxyz');
    this.letters = word.split('').map((char) => {
      return { name: char, chosen: false };
    });

  }

  chooseHidedSlogan() {
    if (this.randomizedStrings.length > 0) {
      this.hidedSlogan = this.randomizedStrings[0].split('').map( ch => {
        return {char: ch, found: false};
      });
    } else {
      debugger;
      this.openEndGameModal(true);
    }
  }

  sendTypedLetter(val) {
    this.ngOnInit();
  }

  checkLetter(val) {
    if (val) {
      this.letters.find( (x: ObjectOfLettersPattern) => {
        if (x.name === val.name) {
          x.chosen = true;
        }
      });
      this.hidedSlogan.find((x) => {
        if (x.char === val.name) {
          x.found = true;
        }
      });
      this.typedLetter = null;
    }
    const isFound = this.allLettersTrue();
    if (isFound) {
      this.randomizedStrings.shift();
      this.chooseHidedSlogan();
    }
  }

  private allLettersTrue() {
    for (const letter of this.hidedSlogan) {
      if (!letter.found) {
        return false;
      }
      // if(something_wrong) break;
    }
    return true;
    //  this.hidedSlogan.forEach( letter => {
    //   if (!letter.found) { return false; }
    // });
    //  return true;
    // console.log(isFound);
  }

  private randomizeFiveStrings() {
    const arr = [...this.stringsArray];
    return[...Array(1)].map( () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0] );
  }

  private openEndGameModal(success: boolean) {
    const modalGameOver = this.modalService.open(ModalGameOverComponent, {size: 'sm', });
    modalGameOver.result.then(
      (result) => {
        debugger;
      },
      (err) => {
        debugger;
      });
  }

}
