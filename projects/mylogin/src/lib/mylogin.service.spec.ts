import { TestBed } from '@angular/core/testing';

import { MyloginService } from './mylogin.service';

describe('MyloginService', () => {
  let service: MyloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
