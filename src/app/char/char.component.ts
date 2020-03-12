import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {ClarsComponent} from '../clars/clars.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ImagesService} from '../services/images.service';
import {TipsComponent} from '../tips/tips.component';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css'],
  providers: [NgbModalConfig, NgbModal, ImagesService]
})
export class CharComponent implements OnInit {
  prevPageName: string;
  imagePath: string;
  selectedChar: string;
  tipsStatuses: {[id: string]: boolean; } = { };

  constructor(config: NgbModalConfig, private modalService: NgbModal,
              private imagesService: ImagesService,
              private route: ActivatedRoute, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.selectedChar = 'human';
    this.imagePath = this.imagesService.getPure(this.selectedChar);

    this.tipsStatuses.human = false;
    this.tipsStatuses.elf = false;
    this.tipsStatuses.dwarf = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.prevPageName = params.prevPageName;
      console.log(params.prevPageName);
      if (this.prevPageName === 'start') {
        this.modalService.open(ClarsComponent);
        // this.modalService.open(TipsComponent);
      }
    });
  }

  OnClick() {

    switch (this.selectedChar) {
      case 'human':
        if (!this.tipsStatuses.human) {
          const modalRef = this.modalService.open(TipsComponent);
          modalRef.componentInstance.receivedText = 'Seriously?\nHuman?\nYou are human in real life... ';
          this.tipsStatuses.human = true;
        } else {
          // todo navigate to the next page
        }
        break;
      case 'elf':
        if (!this.tipsStatuses.elf) {
          const modalRef1 = this.modalService.open(TipsComponent);
          modalRef1.componentInstance.receivedText = 'Elf?\nAre you gay?)';
          this.tipsStatuses.elf = true;
        } else {
          // todo navigate to the next page
        }
        break;
      case 'dwarf':
        if (!this.tipsStatuses.dwarf) {
          const modalRef2 = this.modalService.open(TipsComponent);
          modalRef2.componentInstance.receivedText = 'Good choice.';
          this.tipsStatuses.dwarf = true;
        } else {
          // todo navigate to the next page
        }
        break;
      default: break;
    }
  }

  selectHuman() {
    this.selectedChar = 'human';
    this.imagePath = this.imagesService.getPure(this.selectedChar);
  }

  selectElf() {
    this.selectedChar = 'elf';
    this.imagePath = this.imagesService.getPure(this.selectedChar);
  }

  selectDwarf() {
    this.selectedChar = 'dwarf';
    this.imagePath = this.imagesService.getPure(this.selectedChar);
  }
}
