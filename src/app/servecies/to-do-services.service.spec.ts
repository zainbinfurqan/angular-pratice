import { TestBed } from '@angular/core/testing';

import { ToDoServicesService } from './to-do-services.service';

describe('ToDoServicesService', () => {
  let service: ToDoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
