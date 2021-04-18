import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SumPage } from './sum.page';

describe('SumPage', () => {
  let component: SumPage;
  let fixture: ComponentFixture<SumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
