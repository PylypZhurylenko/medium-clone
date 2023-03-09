import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../banner/banner.module';
import { FeedTogglerModule } from '../feed-toggler/feed-toggler.module';
import { FeedModule } from '../feed/feed.module';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  exports: [TagFeedComponent],
})
export class TagFeedModule {}
