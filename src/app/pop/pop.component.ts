import { Component, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}
