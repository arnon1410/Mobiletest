import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdddeletePage } from './adddelete.page';

describe('AdddeletePage', () => {
  let component: AdddeletePage;
  let fixture: ComponentFixture<AdddeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdddeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
