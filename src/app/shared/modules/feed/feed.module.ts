import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { FeedService } from './services/feed.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../banner/banner.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { AddToFavoritesModule } from '../add-to-favorites/add-to-favorites.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    BannerModule,
    ErrorMessageModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
