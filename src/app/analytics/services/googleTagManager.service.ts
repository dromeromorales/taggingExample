
import { Injectable } from '@angular/core';
import { DataLayerCustomDimensions } from '../enums/dataLayerCustomDimensions';
import { DimensionsSet } from '../models/dimensionsSet.model';

export type PartialDimensionsSet = { [key: string]: string };

@Injectable()
export class GooogleTagManagerService {
  private _constantDimensions = {
      'eventvalue': '',
      'event': 'eventClick'
  }

  constructor() {
    
  }

  dimensionsPush(someDimensions: PartialDimensionsSet) {
    let currentSet: DimensionsSet = this._generateEmptyDimensionsSet();
    Object.keys(DataLayerCustomDimensions).map(key => DataLayerCustomDimensions[key])
    .forEach(key => {
      currentSet[key] = someDimensions[key] || this._constantDimensions[key];
    });
    console.log(currentSet);
    (<any>window).dataLayer.push(currentSet);
  }

  private _generateEmptyDimensionsSet() {
    let currentSet = {
      [DataLayerCustomDimensions.eventCategory]: undefined,
      [DataLayerCustomDimensions.eventAction]: undefined,
      [DataLayerCustomDimensions.eventLabel]: undefined,
      [DataLayerCustomDimensions.eventvalue]: undefined,
      [DataLayerCustomDimensions.event]: undefined,
    };
    return currentSet;
  }


}