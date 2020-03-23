import { Component, OnInit } from '@angular/core';
import {SessionStateService} from '../services/session-state.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {ClarsComponent} from '../clars/clars.component';
import {ImagesService} from '../services/images.service';
import {TipsComponent} from '../tips/tips.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-char-class',
  templateUrl: './char-class.component.html',
  styleUrls: ['./char-class.component.css']
})
export class CharClassComponent implements OnInit {
  imagePath: string;
  selectedChar: string;
  selectedClass: string;
  tipsStatusesSecond: {[id: string]: boolean; } = { };
  isWarrior: string;
  isBow: string;
  isMage: string;
  constructor(config: NgbModalConfig,
              private sessionStateService: SessionStateService,
              private imagesService: ImagesService,
              private modalService: NgbModal,
              private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.selectedChar = this.sessionStateService.getSelectedChar();
    this.selectedClass = this.sessionStateService.getSelectedClass();
    this.tipsStatusesSecond = this.sessionStateService.getTipsStatusesSecond();
    this.imagePath =  this.imagesService.getFull(this.selectedChar, this.selectedClass);
  }

  ngOnInit(): void {
    if (!this.sessionStateService.getIsShowSecondClar()) {
      const modalRef = this.modalService.open(ClarsComponent);
      modalRef.componentInstance.lines = ['The second:', 'Class', 'Second but not least'];
      this.sessionStateService.setIsShowSecondClar(true);
    }
    switch (this.selectedClass) {
      case 'warrior':
        this.isWarrior = 'checked';
        this.isBow = null;
        this.isMage = null;
        break;
      case 'bow':
        this.isWarrior = null;
        this.isBow = 'checked';
        this.isMage = null;
        break;
      case 'mage':
        this.isWarrior = null;
        this.isBow = null;
        this.isMage = 'checked';
        break;
      default: break;
    }
  }

  selectWarrior() {
    this.selectedClass = 'warrior';
    this.setValues();
  }

  selectBow() {
    this.selectedClass = 'bow';
    this.setValues();
  }

  selectMage() {
    this.selectedClass = 'mage';
    this.setValues();
  }

  setValues() {
    this.imagePath = this.imagesService.getFull(this.selectedChar, this.selectedClass);
    this.sessionStateService.setSelectedClass(this.selectedClass);
  }

  OnClick() {
    switch (this.selectedChar) {
      case 'human':
        switch (this.selectedClass) {
          case 'warrior':
            if (!this.tipsStatusesSecond.human_warrior) {
              const modalRef = this.modalService.open(TipsComponent);
              modalRef.componentInstance.receivedText = '"Original"';
              this.tipsStatusesSecond.human_warrior = true;
              this.sessionStateService.setTipsStatusesSecond(this.tipsStatusesSecond);
            } else {
              this.sessionStateService.setSelectedFinally('warrior human');
              this.router.navigateByUrl('/char-theme');
            }
            break;
          case 'bow':
            this.sessionStateService.setSelectedFinally('human-archer');
            this.router.navigateByUrl('/char-theme');
            break;
          case 'mage':
            this.sessionStateService.setSelectedFinally('human-mage');
            this.router.navigateByUrl('/char-theme');
            break;
          default: break;
        }
        break;
      case 'elf':
        switch (this.selectedClass) {
          case 'warrior':
            this.sessionStateService.setSelectedFinally('warrior elf');
            this.router.navigateByUrl('/char-theme');
            break;
          case 'bow':
            this.sessionStateService.setSelectedFinally('elf-archer');
            this.router.navigateByUrl('/char-theme');
            break;
          case 'mage':
            this.sessionStateService.setSelectedFinally('elf-mage');
            this.router.navigateByUrl('/char-theme');
            break;
          default: break;
        }
        break;
      case 'dwarf':
        switch (this.selectedClass) {
          case 'warrior':
            if (!this.tipsStatusesSecond.dwarf_warrior) {
              const modalRef = this.modalService.open(TipsComponent);
              modalRef.componentInstance.receivedText = 'Classic';
              this.tipsStatusesSecond.dwarf_warrior = true;
              this.sessionStateService.setTipsStatusesSecond(this.tipsStatusesSecond);
            } else {
              this.sessionStateService.setSelectedFinally('warrior dwarf');
              this.router.navigateByUrl('/char-theme');
            }
            break;
          case 'bow':
            this.sessionStateService.setSelectedFinally('dwarf-archer');
            this.router.navigateByUrl('/char-theme');
            break;
          case 'mage':
            if (!this.tipsStatusesSecond.dwarf_mage) {
              const modalRef = this.modalService.open(TipsComponent);
              modalRef.componentInstance.receivedText = 'LOL really?';
              this.tipsStatusesSecond.dwarf_mage = true;
              this.sessionStateService.setTipsStatusesSecond(this.tipsStatusesSecond);
            } else {
              this.sessionStateService.setSelectedFinally('dwarf-mage');
              this.router.navigateByUrl('/char-theme');
            }
            break;
          default: break;
        }
        break;
      default: break;
    }
  }
}
