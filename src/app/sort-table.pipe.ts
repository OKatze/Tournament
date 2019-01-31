import { Pipe, PipeTransform } from '@angular/core';
import {player} from './player';

@Pipe({
  name: 'sortTable',
  pure: false
})
export class SortTablePipe implements PipeTransform {

  transform(value: any, args?: player []): any {
    return args.sort(this.comparePoints);
  }

  comparePoints(a, b): number {
    // compare Points
    if (a.points < b.points) {
      return 1;
    } else if (a.points > b.points) {
      return -1;
    } else {
      // compare goalsDiference
      if (a.goalsDifference < b.goalsDifference) {
        return 1;
      } else if (a.goalsDifference > b.goalsDifference) {
        return -1;
      } else {
        // compare goalsOwned
        if (a.goalsOwned < b.goalsOwned) {
          return 1;
        } else if (a.goalsOwned > b.goalsOwned) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }
}
