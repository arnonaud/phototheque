import angular from 'angular';


import {Home} from './home/home.component';
import {Photo} from './photo/photo.component';

angular.module('app', [])
.component('home',Home)
.component('photo', Photo)
.run( function() {
  console.log('PHOTOTHEQUE !');
})