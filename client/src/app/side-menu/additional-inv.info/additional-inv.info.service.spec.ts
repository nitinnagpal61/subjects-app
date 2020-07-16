import { TestBed } from '@angular/core/testing';

import { AdditionalInvInfoService } from './additional-inv.info.service';

describe('AdditionalInv.InfoService', () => {
  let service: AdditionalInvInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalInvInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
