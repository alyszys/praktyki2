import { Component, OnInit } from '@angular/core';
import { wall } from '../wall';
import { WallService } from '../wall.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  walls: wall[] = [];

  constructor(private wallService: WallService) { }

  ngOnInit() {
    this.getWalls();
  }

  getWalls(): void {
    this.wallService.getWalls()
      .subscribe(walls => this.walls = walls.slice(0, 7));
  }

 

  

}
