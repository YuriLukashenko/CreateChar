import {Injectable} from '@angular/core';

@Injectable()
export class ImagesService {
  getPure(character: string) {
    return 'assets/' + character + '-pure.png';
  }
  getFull(character: string, className: string) {
    return 'assets/' + character + '-' + className + '.png';
  }
}
