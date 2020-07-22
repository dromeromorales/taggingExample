import { DataLayerCustomDimensions } from '../enums/dataLayerCustomDimensions';

export type DimensionsSet = { 
  [key in DataLayerCustomDimensions]: string | undefined 
};