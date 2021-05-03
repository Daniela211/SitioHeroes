import { Injectable } from '@angular/core';
import { Villano } from './villano';
import { VILLANOS } from './mock-villa';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';


@Injectable({
  providedIn: 'root',
})

export class VillaService {

    getVillanos(): Observable<Villano[]> {
    const heroes = of(VILLANOS);
    this.messagesService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private messagesService: MessageService) { }

}