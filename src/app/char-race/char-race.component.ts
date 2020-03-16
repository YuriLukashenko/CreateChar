import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {ClarsComponent} from '../clars/clars.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ImagesService} from '../services/images.service';
import {TipsComponent} from '../tips/tips.component';
import {SessionStateService} from '../services/session-state.service';

@Component({
  selector: 'app-char',
  templateUrl: './char-race.component.html',
  styleUrls: ['./char-race.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CharRaceComponent implements OnInit {
  imagePath: string;
  selectedChar: string;
  tipsStatuses: {[id: string]: boolean; } = { };
  isHuman: string;
  isElf: string;
  isDwarf: string;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private imagesService: ImagesService,
              private sessionStateService: SessionStateService,
              private route: ActivatedRoute,
              private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.selectedChar = this.sessionStateService.getSelectedChar();
    this.tipsStatuses = this.sessionStateService.getTipsStatuses();
    this.imagePath = this.imagesService.getPure(this.selectedChar);
  }

  ngOnInit(): void {
    if (!this.sessionStateService.getIsShowFirstClar()) {
      const modalRef = this.modalService.open(ClarsComponent);
      modalRef.componentInstance.lines = ['The first:', 'Race', 'Everyone is crazy about it now...'];
      this.sessionStateService.setIsShowFirstClar(true);
    }
    switch (this.selectedChar) {
      case 'human':
        this.isHuman = 'checked';
        this.isElf = null;
        this.isDwarf = null;
        break;
      case 'elf':
        this.isHuman = null;
        this.isElf = 'checked';
        this.isDwarf = null;
        break;
      case 'dwarf':
        this.isHuman = null;
        this.isElf = null;
        this.isDwarf = 'checked';
        break;
      default: break;
    }
  }

  OnClick() {
    switch (this.selectedChar) {
      case 'human':
        if (!this.tipsStatuses.human) {
          const modalRef = this.modalService.open(TipsComponent);
          modalRef.componentInstance.receivedText = 'Seriously?\nHuman?\nYou are human in real life... ';
          this.tipsStatuses.human = true;
          this.sessionStateService.setTipsStatuses(this.tipsStatuses);
        } else {
          this.router.navigateByUrl('/char-class');
        }
        break;
      case 'elf':
        if (!this.tipsStatuses.elf) {
          const modalRef1 = this.modalService.open(TipsComponent);
          modalRef1.componentInstance.receivedText = 'Elf?\nAre you gay?)';
          this.tipsStatuses.elf = true;
          this.sessionStateService.setTipsStatuses(this.tipsStatuses);
        } else {
          this.router.navigateByUrl('/char-class');
        }
        break;
      case 'dwarf':
        if (!this.tipsStatuses.dwarf) {
          const modalRef2 = this.modalService.open(TipsComponent);
          modalRef2.componentInstance.receivedText = 'Good choice.';
          this.tipsStatuses.dwarf = true;
          this.sessionStateService.setTipsStatuses(this.tipsStatuses);
        } else {
          this.router.navigateByUrl('/char-class');
        }
        break;
      default: break;
    }
  }

  selectHuman() {
    this.selectedChar = 'human';
    this.setValues();
  }

  selectElf() {
    this.selectedChar = 'elf';
    this.setValues();
  }

  selectDwarf() {
    this.selectedChar = 'dwarf';
    this.setValues();
  }

  setValues() {
    this.imagePath = this.imagesService.getPure(this.selectedChar);
    this.sessionStateService.setSelectedChar(this.selectedChar);
  }
}
