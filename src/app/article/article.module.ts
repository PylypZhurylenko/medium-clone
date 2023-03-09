import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { ArticleService } from './services/article.service';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
