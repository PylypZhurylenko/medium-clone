import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../feed/feed.module';
import { BannerModule } from '../banner/banner.module';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../feed-toggler/feed-toggler.module';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  exports: [YourFeedComponent],
})
export class YourFeedModule {}
