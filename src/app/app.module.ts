import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsService } from './analytics/services/analytics.service';
import { GooogleTagManagerService } from './analytics/services/googleTagManager.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnalyticsService, GooogleTagManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
