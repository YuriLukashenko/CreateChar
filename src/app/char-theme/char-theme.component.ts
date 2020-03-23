import { Component, OnInit } from '@angular/core';
import {ClarsComponent} from '../clars/clars.component';
import {SessionStateService} from '../services/session-state.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ClarsThemeComponent} from '../clars-theme/clars-theme.component';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-char-theme',
  templateUrl: './char-theme.component.html',
  styleUrls: ['./char-theme.component.css']
})
export class CharThemeComponent implements OnInit {
  imagePath: string;
  isDay = true;
  selectedColor = '#ff0000';
  constructor(private sessionStateService: SessionStateService,
              private modalService: NgbModal,
              private imagesService: ImagesService) { }

  ngOnInit(): void {
    if (!this.sessionStateService.getIsShowThirdClar()) {
      const finalChar = this.sessionStateService.getSelectedFinally();
      const modalRef = this.modalService.open(ClarsThemeComponent);
      modalRef.componentInstance.lines = ['Okay, glad we both chose a ' + finalChar + ':3',
        'Left a little ', 'just choose', 'settings'];
      this.sessionStateService.setIsShowThirdClar(true);
    }

    this.imagePath =  this.imagesService.getFull(
      this.sessionStateService.getSelectedChar(),
      this.sessionStateService.getSelectedClass());

    this.selectedColor = this.isDay
      ? this.sessionStateService.getDayColor()
      : this.sessionStateService.getNightColor();
  }

  onClickDay() {
    this.isDay = true;
    this.selectedColor = this.sessionStateService.getDayColor();
  }

  onClickNight() {
    this.isDay = false;
    this.selectedColor = this.sessionStateService.getNightColor();
  }

  onSaveClick() {
    if (this.isDay) {
      this.sessionStateService.setDayColor(this.selectedColor);
    } else {
      this.sessionStateService.setNightColor(this.selectedColor);
    }
  }
}
