import { HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InterceptorService } from '../interceptor.service';

describe('InterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorService]
    });
    service = getService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

export function getService() {
  const service: InterceptorService = TestBed.inject(
    InterceptorService
  );
  return service;
}
