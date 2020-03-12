import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  @Input() receivedText;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
