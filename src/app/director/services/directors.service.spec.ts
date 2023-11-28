/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectorsService } from './directors.service';

describe('Service: Directors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectorsService]
    });
  });

  it('should ...', inject([DirectorsService], (service: DirectorsService) => {
    expect(service).toBeTruthy();
  }));
});
