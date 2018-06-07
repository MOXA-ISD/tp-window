import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowModule } from './tp-window.module';
import { WindowComponent } from './tp-window.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WindowComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WindowModule],
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have two states', () => {
    let windowComponent = fixture.debugElement.query(By.css('tp-window')).componentInstance as WindowComponent;
    expect(windowComponent.states.length).toBe(2);
  });

  it('Should show the content of first state', () => {
    let mainElement = fixture.debugElement.query(By.css('.content')).nativeElement;
    expect(mainElement.textContent).toBe('State One Content');
  });
});

@Component({
  selector: 'test-root',
  template: `
  <tp-window name="Test Window" maxStateNumber="5">
    <tp-window-state name="Info" icon="info">
      <p>State One Content</p>
    </tp-window-state>
    <tp-window-state name="Settings" icon="settings">
      <p>State Two Content</p>
    </tp-window-state>
  </tp-window>
  `
})
class TestComponent {}
