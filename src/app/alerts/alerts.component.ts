import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnChanges {
  @Input() alert;
  @Output() alerted = new EventEmitter<boolean>();
  private addAlert = false;

  constructor() { }

  ngOnChanges() { 
    if (this.alert) this.alertSuccess();
  }

  alertSuccess() {
    this.addAlert = true;
    setTimeout(() => {
      this.addAlert = false;
    }, 2000);
    this.alerted.emit(!this.alert);
  }

}
