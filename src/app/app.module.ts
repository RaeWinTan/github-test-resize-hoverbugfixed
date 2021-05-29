import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularResizeElementModule } from 'angular-resize-element';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AngularResizeElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
