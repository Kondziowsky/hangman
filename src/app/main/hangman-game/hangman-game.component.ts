import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ObjectOfLettersPattern} from '../../shared/models/objectOfLettersPattern';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalGameOverComponent} from '../../components/modal-game-over/modal-game-over.component';
import {noop} from 'rxjs';

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
  // typedLetter;
  attemptCounter: number;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.setVariables();
    this.stringsArray = this.route.snapshot.data.tablicaHasel.ArrayOfStrings;
    this.randomizedStrings = this.randomizeFiveStrings();
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.drawCanvas();

    this.makeLetters();
    this.chooseHidedSlogan();
  }

  drawCanvas() {
    this.ctx.clearRect(0, 0, 400, 400);
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
      const letterFound = this.hidedSlogan.find( x => x.char === val.name);
      if (!letterFound) {
        this.attemptCounter--;
        this.attemptCounter === 0 ? this.openEndGameModal(false) : noop();
        this.checkCanvas();
      } else {
        this.hidedSlogan.find((x) => {
          if (x.char === val.name) {
            x.found = true;
          }
        });
      }
    }
    const isSloganFound = this.allLettersTrue();
    if (isSloganFound) {
      this.randomizedStrings.shift();
      this.refreshKeyboard();
      this.chooseHidedSlogan();
    }
  }

  private setVariables() {
    this.attemptCounter = 6;
  }

  private refreshKeyboard() {
    for (const key in this.letters) {
      if (this.letters.hasOwnProperty(key)) {
        this.letters[key].chosen = false;
      }
    }
  }

  private allLettersTrue() {
    for (const letter of this.hidedSlogan) {
      if (!letter.found) {
        return false;
      }
    }
    return true;
  }

  private checkCanvas() {
    this.ctx.beginPath();

    switch (this.attemptCounter) {
      case 5:
        this.ctx.arc(200, 100, 50, 0, 2 * Math.PI);
        break;
      case 4:
        this.ctx.moveTo(200, 150);
        this.ctx.lineTo(200, 270);
        break;
      case 3:
        this.ctx.moveTo(200, 270);
        this.ctx.lineTo(150, 350);
        break;
      case 2:
        this.ctx.moveTo(200, 270);
        this.ctx.lineTo(250, 350);
        break;
      case 1:
        this.ctx.moveTo(200, 210);
        this.ctx.lineTo(130, 180);
        break;
      case 0:
        this.ctx.moveTo(200, 210);
        this.ctx.lineTo(280, 180);
        break;
    }
    this.ctx.stroke();
  }

  private randomizeFiveStrings() {
    const arr = [...this.stringsArray];
    return[...Array(5)].map( () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0] );
  }

  private openEndGameModal(success: boolean) {
    const modalGameOver = this.modalService.open(ModalGameOverComponent, {size: 'sm', backdrop: 'static', centered: true, backdropClass: success ? 'success-backdrop' : 'failure-backdrop' });
    modalGameOver.componentInstance.success = success;
    modalGameOver.result.then(
      (result) => {
        if (result && result.tryAgain) {
          this.ngOnInit();
        }
      },
      (err) => {
      });
  }

}
