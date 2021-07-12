import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  currentPage: number = 1;
  pages = {};
  itemsPerPage = 20;
  gamesList: Game[] = [];
  gamesCount: number = 400;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getApi(page: number) {
    if (!this.pages[page]) {
      this.http
        .get<Game[]>(
          'https://api.rawg.io/api/games?key=df36627613444db88ad0c2e5753df533&page=' +
            page
        )
        .subscribe((data) => {
          this.pages[page] = data['results'];
        });
    }

    return this.pages[page];
  }
}

export interface Genre {
  id?: number;
  name: string;
}

export interface Game {
  id?: number;
  name: string;
  released: string;
  genres: Genre[];
  backgroundImage: string;
  rating: number;
}
export interface GamesRequest {
  count: number;
  results: Game[];
}
