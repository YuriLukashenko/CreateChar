import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clars',
  templateUrl: './clars.component.html',
  styleUrls: ['./clars.component.css']
})
export class ClarsComponent implements OnInit {
  @Input() lines;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
