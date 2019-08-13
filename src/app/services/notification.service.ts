import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message, title) {
    this.toastr.success(message, title);
  }

  showInfo(message, title) {
    this.toastr.info(message, title);
  }

  showError(message, title) {
    this.toastr.error(message, title);
  }

  show(message, title) {
    this.toastr.show(message, title);
  }

  showWarning(message, title) {
    this.toastr.warning(message, title);
  }
}
