import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStatisticsComponent } from '../post-statistics.component';

xdescribe('PostStatisticsComponent', () => {
  let component: PostStatisticsComponent;
  let fixture: ComponentFixture<PostStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
