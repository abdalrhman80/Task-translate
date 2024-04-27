import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
interface TicketSummary {
  title: string;
  value: string;
}
@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.scss']
})
export class TicketSummaryComponent implements OnInit {
  ticketSummary!: TicketSummary[];

  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
    this.translate.get('ticketSummaryDetails').subscribe((res: any) => {
      this.ticketSummary = [
        { title: res.totalPrice, value: "500 $" },
        { title: res.discount, value: "100 $" },
        { title: res.addedValue, value: "14 %" },
        { title: res.tax, value: "50 $" },
      ]
    })
  }
}
