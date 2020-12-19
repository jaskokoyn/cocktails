import { TestBed } from '@angular/core/testing';

import { CocktailService } from './cocktail.service';

describe('GithubJobsService', () => {
  let service: CocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
