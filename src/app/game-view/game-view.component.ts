import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  game: GameInterface

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getGame(45).subscribe((data) =>
      this.game = data


    )
  }

  getGame(id: number) {
    return this.http.get<GameInterface>("https://api.rawg.io/api/games/" + id + "?key=df36627613444db88ad0c2e5753df533");
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
  released: Date;
}
