import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
export type stateType = 'Button' | 'Content' | 'State';

@Component({
  selector: 'tp-window-state',
  template: `
    <ng-template #templateRef>
      <ng-content></ng-content>
    </ng-template>
  `,
  inputs: ['name', 'icon', 'type']
})

export class WindowStateComponent {

  @ViewChild('templateRef') templateRef: TemplateRef<any>;
  @Input()
  type: stateType;
  name: string;
  icon: string;
}
