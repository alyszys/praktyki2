import { Component, OnInit } from '@angular/core';
import { wall } from '../wall';
import { WallService } from '../wall.service';
import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.sass']
})
export class WallsComponent implements OnInit {

  

  walls: wall[] = [];

  constructor(private wallService: WallService) { }

  ngOnInit() {
    this.getWalls();
  }
  
  

  getWalls(): void {
    this.wallService.getWalls()
        .subscribe(walls => this.walls = walls);
  }

}


