import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface | null;
  @Input('isSumbitting') isSubmittingProps: boolean | null;
  @Input('errors') errorsProps: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps!.title,
      description: this.initialValuesProps!.description,
      body: this.initialValuesProps!.body,
      tagList: this.initialValuesProps!.tagList.join(' '),
    });
  }

  onSubmit(): void {
    const articleInput: ArticleInputInterface = {
      ...this.form.value,
      tagList: this.form.value.tagList.split(' '),
    };
    this.articleSubmitEvent.emit(articleInput);
  }
}
