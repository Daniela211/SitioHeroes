import { TestBed } from '@angular/core/testing';
import { MessageService } from './messages.service';

describe('VillaService', () => {
    let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

