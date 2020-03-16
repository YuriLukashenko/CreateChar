import {ImagesService} from './images.service';
import {Injectable} from '@angular/core';

@Injectable()
export class SessionStateService {
  selectedChar: string;
  selectedClass: string;
  tipsStatuses: {[id: string]: boolean; } = { };
  tipsStatusesSecond: {[id: string]: boolean; } = { };
  isShowFirstClar: boolean;
  isShowSecondClar: boolean;

  constructor(private imagesService: ImagesService) {
    this.selectedChar = 'human';
    this.selectedClass = 'warrior';

    this.tipsStatuses.human = false;
    this.tipsStatuses.elf = false;
    this.tipsStatuses.dwarf = false;

    this.tipsStatusesSecond.human_warrior = false;
    this.tipsStatusesSecond.dwarf_warrior = false;
    this.tipsStatusesSecond.dwarf_mage = false;

    this.isShowFirstClar = false;
    this.isShowSecondClar = false;
  }

  getSelectedChar() {
    return this.selectedChar;
  }

  setSelectedChar(selectedChar: string) {
    this.selectedChar = selectedChar;
  }

  getSelectedClass() {
    return this.selectedClass;
  }

  setSelectedClass(selectedClass: string) {
    this.selectedClass = selectedClass;
  }

  getTipsStatuses() {
    return this.tipsStatuses;
  }

  setTipsStatuses(tipsStatuses: {[id: string]: boolean; }) {
    this.tipsStatuses = tipsStatuses;
  }

  getTipsStatusesSecond() {
    return this.tipsStatusesSecond;
  }

  setTipsStatusesSecond(tipsStatusesSecond: {[id: string]: boolean; }) {
    this.tipsStatusesSecond = tipsStatusesSecond;
  }

  getIsShowFirstClar() {
    return this.isShowFirstClar;
  }

  setIsShowFirstClar(isShowFirstClar: boolean) {
    this.isShowFirstClar = isShowFirstClar;
  }

  getIsShowSecondClar() {
    return this.isShowSecondClar;
  }

  setIsShowSecondClar(isShowSecondClar: boolean) {
    this.isShowSecondClar = isShowSecondClar;
  }
}
