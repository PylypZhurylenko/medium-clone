import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  //aliasies, for distinguishig where is Input and where a field
  //in docs is a bad approach, but in big projects is ok
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | null;

  errorMessages: string[];

  ngOnInit(): void {
    if (this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps).map(
        (name: string) => {
          const messages = this.backendErrorsProps![name].join(' ');

          return `${name} ${messages}`;
        }
      );
    }
  }
}
