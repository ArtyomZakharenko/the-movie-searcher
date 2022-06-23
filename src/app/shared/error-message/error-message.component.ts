import {Component, Input} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() error: HttpErrorResponse;
}


