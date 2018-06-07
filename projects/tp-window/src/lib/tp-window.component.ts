import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  ViewChild } from '@angular/core';
import { CdkPortalOutlet, Portal } from '@angular/cdk/portal';
import { WindowStateComponent,stateType } from './tp-window.state.component';
import { Observable } from 'rxjs';
import { fadeOutAnimation } from './tp-window.animation';
export { stateType } from './tp-window.state.component';

@Component({
  selector: 'tp-window',
  templateUrl: './tp-window.component.html',
  styleUrls: ['./tp-window.component.scss'],
  inputs: ['name'],
  exportAs: 'tpWindow',
  animations: [fadeOutAnimation]
})
export class WindowComponent implements AfterContentInit {
  @ViewChild('loadingPortal') loadingRef: TemplateRef<any>;
  @ContentChildren(WindowStateComponent) states: QueryList<WindowStateComponent>;
  @Input()
  set loading(loading:Observable<any>) {
    if(loading) {
      this.isShowLoading = true;
      loading.subscribe(() => {
        this.isShowLoading = false;
      });
    }
  }
  @Input() maxStateNumber: number = 5;
  @Input() optionPortal: Portal<any> | undefined;
  @Output() stateChange: EventEmitter<WindowStateComponent> = new EventEmitter<WindowStateComponent>();
  name: string;
  currentState: WindowStateComponent;
  isShowLoading: boolean = false;

  setPortal(portal: Portal<any>) {
    this.optionPortal = portal;
  }

  ngAfterContentInit() {
    this.currentState = this.states.first;
  }

  navigate(state: WindowStateComponent) {
    if(state.type !== 'Button') {
      this.currentState = state;
    }
    this.stateChange.emit(state);
  }
}
