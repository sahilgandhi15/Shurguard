import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInfoWidgetComponent } from './image-info-widget.component';

describe('ImageInfoWidgetComponent', () => {
  let component: ImageInfoWidgetComponent;
  let fixture: ComponentFixture<ImageInfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInfoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
