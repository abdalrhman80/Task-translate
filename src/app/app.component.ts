import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Task';
  visible: boolean = false;
  modalDirection: string = 'rtl';

  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
    localStorage.getItem('lang') == 'en' ? this.modalDirection = 'ltr' : this.modalDirection = 'rtl'
  }
  
  visibleDialogChange(event: any) {
    this.visible = event
    console.log(event);
    
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    if (lang == 'en') {
      localStorage.setItem('lang', lang);
      this.modalDirection = 'ltr';
    }
    else {
      localStorage.setItem('lang', lang);
      this.modalDirection = 'rtl';
    }
  }
}
