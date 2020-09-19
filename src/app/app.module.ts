import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TemplateModule } from '@rx-angular/template';
import { RxState } from '@rx-angular/state';
import { GLOBAL_RX_STATE, GlobalState } from './states/global.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    TemplateModule,
  ],
  providers: [
    {
      provide: GLOBAL_RX_STATE,
      useFactory: () => new RxState<GlobalState>()
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
