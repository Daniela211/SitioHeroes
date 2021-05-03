import { Villano } from '../villano';
import { MessageService } from '../messages.service';
import { Component, OnInit } from '@angular/core';
import {VillaService} from '../villano.service';


@Component({

  selector: 'app-villanos',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']

})

export class VillanoComponent implements OnInit {

selectedVillano?: Villano;

villanos: Villano[] = [];
constructor(private villaService: VillaService, 
private menssageService: MessageService) { 

}

ngOnInit(): void {
  this.getVillanos();

}

onSelect(villanos: Villano): void {
  this.selectedVillano = villanos;
  this.menssageService.add(`HeroesComponent: Selected villa id=${villanos.id}`);
  console.log(this.menssageService);

}

onPlus(villanos: Villano): void {
  villanos.Maldad = villanos.Maldad + 1;

}

getVillanos(): void {
  this.villaService.getVillanos()
      .subscribe(villanos => this.villanos = villanos);

}

}