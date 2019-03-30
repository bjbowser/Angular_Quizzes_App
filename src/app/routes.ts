import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ClassQuizComponent } from './class-quiz/class-quiz.component';
import { CraftQuizComponent } from './craft-quiz/craft-quiz.component';
import { DefaultComponent } from './default/default.component';

export const appRoutes: Routes = [
    { path: 'default', component: DefaultComponent },
    { path: 'class', component: ClassQuizComponent },
    { path: 'craft', component: CraftQuizComponent },
    { path: '', redirectTo: '/default', pathMatch: 'full'}
];
