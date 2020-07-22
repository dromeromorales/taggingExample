import { Component } from '@angular/core';
import { AnalyticsService } from './analytics/services/analytics.service';
import {DataLayerCustomDimensions} from './analytics/enums/dataLayerCustomDimensions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taggingExample';
  constructor(private _analyticsService: AnalyticsService) {}
  
  ngOnInit() {
    this._analyticsService.notification({
      [DataLayerCustomDimensions.eventCategory]: 'App-Inversion por objetivos', 
      [DataLayerCustomDimensions.eventAction]: 'Page view', 
      [DataLayerCustomDimensions.eventLabel]: '1. Beneficios y caracteristicas'
    });
  }
  clickbutonone($event){
    this._analyticsService.notification({
      [DataLayerCustomDimensions.eventCategory]: 'App-Otro', 
      [DataLayerCustomDimensions.eventAction]: 'Button', 
      [DataLayerCustomDimensions.eventLabel]: '14.5. Salir'
    });
  }

  clickbutontwo($event){
    this._analyticsService.notification({
      [DataLayerCustomDimensions.eventCategory]: 'App-Inversion por objetivos', 
      [DataLayerCustomDimensions.eventAction]: 'Button', 
      [DataLayerCustomDimensions.eventLabel]: '1.1. Boton Continuar'
    });

   

  }


}
