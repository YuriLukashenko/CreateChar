import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clars',
  templateUrl: './clars.component.html',
  styleUrls: ['./clars.component.css']
})
export class ClarsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
