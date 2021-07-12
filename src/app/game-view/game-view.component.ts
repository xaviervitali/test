import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent implements OnInit {
  game: GameInterface;
  plateform: string;
  tags: string;
  released: string;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.getGame(id))
      )
      .subscribe((data) => {
        this.game = data;
        this.plateform = data.platforms.map((e) => e.platform.name).join(', ');
        this.tags = data.tags.map((e) => e.name).join(', ');
        this.released = data.released.split('-').reverse().join('/');
      });
  }

  getGame(id: string) {
    return this.http.get<GameInterface>(
      'https://api.rawg.io/api/games/' +
        id +
        '?key=df36627613444db88ad0c2e5753df533'
    );
  }
}

export interface GameInterface {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: any[];
  released: string;
  background_image: string;
  platforms: any[];
  tags: any[];
}
