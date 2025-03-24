import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string | null>(null);
  notification$: Observable<string | null> =
    this.notificationSubject.asObservable();

  showNotification(message: string) {
    this.notificationSubject.next(message);
    setTimeout(() => this.clearNotification(), 3000);
  }

  clearNotification() {
    this.notificationSubject.next(null);
  }
}
