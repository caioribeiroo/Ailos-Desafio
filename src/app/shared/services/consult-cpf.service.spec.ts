import { TestBed } from '@angular/core/testing';

import { ConsultCpfService } from './consult-cpf.service';

describe('ConsultCpfService', () => {
  let service: ConsultCpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultCpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
