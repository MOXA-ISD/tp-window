import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkPortal } from '@angular/cdk/portal';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  @ViewChild(CdkPortal) portal: TemplateRef<any>;
  loadingObservable: Observable<any>;
  clickedState: any;
  _items: Array<any> = [
    {name: 'item 3', icon: 'vpn_lock', type: 'State', content: 'This is item 3'},
    {name: 'item 4', icon: 'sms_failed', type: 'Button'},
    {name: 'item 5', icon: 'save', type: 'Content', content: 'This is item 5'},
    {name: 'item 6', icon: 'settings', type: 'State', content: 'This is item 6'}
  ]
  _selectedItems: Array<any> = [
    {name: 'item 2', icon: 'refresh', type: 'Button'},
    {name: 'item 1', icon: 'contacts', type: 'State', content: 'This is item 1'},
  ];
  _selectedItem: any;
  _dragTargetRef: any;
  _hasSelected: boolean;
  _title: string = 'Title Component';
  _currentLang: string = 'en';

  constructor(private translate: TranslateService){
    this.changeLang('en');
  }

  testLoading() {
    this.loadingObservable = new Observable( observer => {
      setTimeout(() => {
        observer.next();
      }, 2000);
    })
  }

  changeLang(lang: string){
    this.translate.use(lang);
    this._currentLang = lang;
  }

  onStateChange($event){
    this.clickedState = $event;
    setTimeout(() => {
      this.clickedState = undefined;
    }, 2000);
  }

  onDragStart($event, item, hasSelected: boolean) {
    this._dragTargetRef = $event.target;
    this._selectedItem = item;
    this._hasSelected = hasSelected;
    $event.target.style.opacity = 0.5;
  }

  onDragEnter($event) {
    if($event.target.className === 'items-container') {
      $event.target.style.background = 'rgba(0,0,0,.1)';
    }
  }

  onDragLeave($event) {
    if($event.target.className === 'items-container') {
      $event.target.style.background = '';
    }
  }

  onDragEnd($event) {
    $event.preventDefault();
    this._dragTargetRef.style.opacity = 1;
  }

  onDragOver($event) {
    $event.preventDefault();
  }

  onDropItem($event) {
    $event.preventDefault();
    if($event.target.className === 'items-container' && !this._hasSelected) {
      this._selectedItems = [...this._selectedItems, this._selectedItem];
      this._items = this._items.filter(it => it.name !== this._selectedItem.name);
      $event.target.style.background = '';
    } else if($event.target.className !== 'items-container' && this._hasSelected) {
      if(this._selectedItems.length > 1) {
        this._items = [...this._items, this._selectedItem];
        this._selectedItems = this._selectedItems.filter(it => it.name !== this._selectedItem.name);
      }
    }
    this._dragTargetRef.style.opacity = 1;
  }
}
