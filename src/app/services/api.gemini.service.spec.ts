import { TestBed } from '@angular/core/testing';

import { APIGeminiService } from './api.gemini.service';

describe('APIGeminiService', () => {
  let service: APIGeminiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGeminiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
