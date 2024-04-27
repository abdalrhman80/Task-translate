import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() visibleChange = new EventEmitter<boolean>();
  visibleDialogChange() {
    this.visibleChange.emit(false);
  }
  constructor(public translate: TranslateService) { }
}
