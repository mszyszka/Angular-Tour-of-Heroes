//We need to always import Component symbol
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//We're using @Component symbol to annotate component class, @Component id decorator function that specifies metadata
//for the component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit() {
  }

}
