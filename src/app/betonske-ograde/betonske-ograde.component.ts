import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betonske-ograde',
  templateUrl: './betonske-ograde.component.html',
  styleUrls: ['./betonske-ograde.component.css']
})
export class BetonskeOgradeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  leftArray =
    [
      "Visoka otpornost i dugotrajnost",
      "Nije potrebno odrzavanje",
      "Otpornost na sve vremenske uslove",
      "Sigurnost",
      "Privatnost",
      " Povoljna cena"
    ]

  rightArray =
    [
      "Brzina montaze",
      "Zahvaljujuci brzoj gradnji izrada privremenih ograda postaje nepotrebna",
      "Zauzimaju minimalan prostor",
      "U rasponu od 0.4 - 2.5m",
      "Montaza je moguca kako na ravnim povrsini tako i na kosini"
    ]

}
