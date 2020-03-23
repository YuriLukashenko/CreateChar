import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clars-theme',
  templateUrl: './clars-theme.component.html',
  styleUrls: ['./clars-theme.component.css']
})
export class ClarsThemeComponent implements OnInit {
  @Input() lines;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
