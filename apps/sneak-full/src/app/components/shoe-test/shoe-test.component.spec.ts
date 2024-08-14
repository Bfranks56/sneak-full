import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoeTestComponent } from './shoe-test.component';

describe('ShoeTestComponent', () => {
  let component: ShoeTestComponent;
  let fixture: ComponentFixture<ShoeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
