import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassQuizComponent } from './class-quiz/class-quiz.component';
import { CraftQuizComponent } from './craft-quiz/craft-quiz.component';
import { appRoutes } from './routes';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassQuizComponent,
    CraftQuizComponent,
    DefaultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
