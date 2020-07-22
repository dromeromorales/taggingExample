import { Injectable } from '@angular/core';
import { GooogleTagManagerService } from './googleTagManager.service';


export type PartialDimensionsSet = { [key: string]: string };

@Injectable()
export class AnalyticsService {
  constructor(
    private _gooogleTagManagerService: GooogleTagManagerService, 
  ) {}

  notification(someDimensions: PartialDimensionsSet, overridePath?: string) {
    this._gooogleTagManagerService.dimensionsPush(someDimensions);
  }
}