import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const AppModule = (name: string) => {
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
  })
  class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef) {
      appRef.bootstrap(AppComponent, `app1-root-${name}`);
    }
  }
  return AppModule;
}
