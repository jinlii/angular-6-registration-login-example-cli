import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// import everything in ../_services/index.ts
import { AlertService } from '../_services';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
