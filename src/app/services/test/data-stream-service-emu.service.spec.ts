import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataStreamServiceEmuService } from '../data-stream-service-emu.service';

describe('DataStreamServiceEmuService', () => {
  let service: DataStreamServiceEmuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStreamServiceEmuService, HttpClient, HttpHandler]
    });
    service = getService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate page', () => {
    const data = {total: 10, limit: 10} as any;
    service.calculatePage(data);
    expect(service.totalPages).toBe(1);
  });
});

export function getService() {
  const service: DataStreamServiceEmuService = TestBed.inject(
    DataStreamServiceEmuService
  );
  return service;
}