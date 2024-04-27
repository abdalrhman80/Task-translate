import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  @Input() visible: boolean = false;
  @Input() modalDirection: string = 'rtl';
  @Output() visibleChange = new EventEmitter<boolean>();
  hideDialog(event: any) {
    this.visible = event;
    this.visibleChange.emit(event);
  }
}
