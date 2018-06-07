import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata
} from '@angular/animations';

export const fadeOutAnimation:AnimationTriggerMetadata = trigger('fadeOut', [
  state('in', style({opacity: 1})),
  transition('* => void', [
    animate(500, style({opacity: 0}))
  ])
])
