import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),

          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private router: Router
  ) {}
}
