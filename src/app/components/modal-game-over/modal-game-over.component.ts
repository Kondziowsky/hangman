import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-game-over',
  templateUrl: './modal-game-over.component.html',
  styleUrls: ['./modal-game-over.component.sass']
})
export class ModalGameOverComponent implements OnInit {
  @Input() success: boolean;

  modalTitle: string;
  modalText: string;

  constructor(public activeModal: NgbActiveModal,
              private router: Router) { }

  ngOnInit() {
    if (this.success) {
      this.modalTitle = 'Congratulations!';
      this.modalText = 'You won';
    } else {
      this.modalTitle = 'Try again!';
      this.modalText = 'You lost';
    }
  }

  goToMainMenu() {
    this.router.navigate(['/']);
    this.activeModal.dismiss();
  }

  tryAgain() {
    this.router.navigate(['/hangman']);
    this.activeModal.close({ tryAgain: true });
  }

}
