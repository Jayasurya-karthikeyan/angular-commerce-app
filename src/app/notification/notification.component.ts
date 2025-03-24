import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  message: string = '';
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    this.subscription = this.notificationService.notification$.subscribe(
      (msg) => {
        this.message = msg ?? '';
        setTimeout(() => (this.message = ''), 3000);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
