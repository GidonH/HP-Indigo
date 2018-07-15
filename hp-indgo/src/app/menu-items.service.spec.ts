import { TestBed, inject } from '@angular/core/testing';

import { MenuItemsService } from './menu-items.service.ts';

describe('MenuItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuItemsService]
    });
  });

  it('should be created', inject([MenuItemsService], (service: MenuItemsService) => {
    expect(service).toBeTruthy();
  }));
});
