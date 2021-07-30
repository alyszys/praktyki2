import { Component, OnInit, Input } from '@angular/core';
import { wall } from '../wall';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WallService } from '../wall.service';

@Component({
  selector: 'app-wall-detail',
  templateUrl: './wall-detail.component.html',
  styleUrls: ['./wall-detail.component.sass']
})
export class WallDetailComponent implements OnInit {

  wall: wall | undefined;


  constructor(
    private route: ActivatedRoute,
    private wallService: WallService,
    private location: Location,
    ) {}

  ngOnInit(): void {
    this.getWall();
  }

  getWall(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wallService.getWall(id)
      .subscribe(wall => this.wall = wall);
  }

  goBack(): void {
    this.location.back();
  }
}
