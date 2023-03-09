import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../../store/actions/addToFavorites.actions';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps: boolean;
  @Input('favoritesCount') favoritedCountProps: number;
  @Input('articleSlug') articleSlugProps: string;

  favoritesCount: number = 5;
  isFavorited: boolean;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritedCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount -= 1;
    } else {
      this.favoritesCount += 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}
