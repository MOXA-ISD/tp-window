import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './tp-window.component';
import { WindowStateComponent } from './tp-window.state.component';
import { MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    PortalModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    MatToolbarModule],
  declarations: [WindowComponent, WindowStateComponent],
  exports: [WindowComponent, WindowStateComponent]
})
export class WindowModule { }
