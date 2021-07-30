import { Injectable } from '@angular/core';
import { wall } from './wall';
import { WALLS } from './months';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class WallService {

  constructor(private messageService: MessageService) { }

  getWalls(): Observable<wall[]> {
    const walls = of(WALLS);
    this.messageService.add('uwaga!: wybierz miesiąc');
    return walls;
  }

  getWall(id: number): Observable<wall> {
    const wall = WALLS.find(h => h.id === id)!;
    this.messageService.add(`uwaga!: wybrano ${id} miesiąc`);
    return of(wall);
  }
  
}
