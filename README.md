# ThingsPro Window ![Code Coverage](https://codecov.io/gh/YuShuanHsieh/sanji-window/branch/master/graph/badge.svg) ![Build](https://api.travis-ci.org/YuShuanHsieh/sanji-window.svg?branch=master)

[Demo page](https://htmlpreview.github.io/?https://github.com/YuShuanHsieh/sanji-window/blob/master/dist/demo-app/index.html)

# Features
## Usages
```html
<tp-window [name]="name" maxStateNumber="3" [loading]="loadingObservable" [optionPortal]="portal" (stateChange)="onStateChange($event)">
  <tp-window-state [name]="state.name" [icon]="state.icon" [type]="Button">
    <!-- Your DOM template -->   
  <tp-window-state>
  <tp-window-state [name]="state.name" [icon]="state.icon" [type]="Button">
    <!-- Your DOM template -->   
  <tp-window-state>
</tp-window>
```
## API Document
### tp-window (WindowComponent)
| Property | Type | Description |
|---|---|---|
| name | @input `string` | The name will be showed on the title of component.
| maxStateNumber | @input `number` | Limit the total number of icons on the tool bar. The rest of icons will be sorted to menu list as the number of icons exceeds it. This setting could be used to RWD.
| loading | @input `Observable<any>` | It Will show a loading bar before observable completed.
| optionPortal | @input `Portal<any>` | Add customized actions or information by using `CdkPortal` 
| stateChange | @output `EventEmitter<WindowStateComponent>` | emit clicked state component.

### tp-window-state (WindowStateComponent)
| Property | Type | Description |
|---|---|---|
| name | @input `string` | The name will be showed on the menu item or tooltip.
| icon | @input `string` | The name of `Angular Material Icon` ，please see [Icons](https://material.io/tools/icons/?icon=contacts&style=outline)
| type | @input `string` |  `Button`(A state contains a icon without a content page.) `Content`(A state contains a content page without a icon.)`State`(A state contains a icon with a content page.)

