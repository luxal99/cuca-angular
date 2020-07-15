import { Component, OnInit } from '@angular/core';



class Concrete {
  title;
  dimension;
  image;

  constructor(title, dimension, image) {
    this.title = title;
    this.dimension = dimension;
    this.image = image;
  }
}
@Component({
  selector: 'app-betonske-ograde',
  templateUrl: './betonske-ograde.component.html',
  styleUrls: ['./betonske-ograde.component.css']
})
export class BetonskeOgradeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createArr();
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

  concreteArr: Array<Concrete> = [];


  createArr() {
    this.concreteArr.push(new Concrete('Koplja otvorena', '170cm', 'assets/img/koplja-min.jpg'))
    this.concreteArr.push(new Concrete('Koplja', '208cm', 'assets/img/koplja_otvorena.jpg'))
    this.concreteArr.push(new Concrete('Balusterka', '208cm', 'assets/img/balusterka.jpg'))
    this.concreteArr.push(new Concrete('Cokolada', '208cm', 'assets/img/tablica-new.jpg'))
    this.concreteArr.push(new Concrete('Dijamant', '170cm', 'assets/img/rsz_dijamnat.jpg'))
    this.concreteArr.push(new Concrete('Kocka', '208cm', 'assets/img/kocka.jpg'))
    this.concreteArr.push(new Concrete('Kosina', '208cm', 'assets/img/rsz_kosina.jpg'))
    this.concreteArr.push(new Concrete('Romboidi', '208cm', 'assets/img/romboidi-new.jpg'))
    this.concreteArr.push(new Concrete('Pletena', '170cm', 'assets/img/rsz_1pletena.jpg'))
    this.concreteArr.push(new Concrete('Pletena', '170cm', 'assets/img/rsz_img_20190928_143733-min (1).jpg'))
    this.concreteArr.push(new Concrete('Kamen lomljeni', '170cm', 'assets/img/lomljeni_kamen_header.jpg'))
    this.concreteArr.push(new Concrete('Kamen krupni', '170cm', 'assets/img/kamen_krupni.jpg'))
    this.concreteArr.push(new Concrete('Sitan kamen', '170cm', 'assets/img/sitan_kamen.jpg'))
    this.concreteArr.push(new Concrete('Koplja', '170cm', 'assets/img/koplja_siva.jpg'))
    this.concreteArr.push(new Concrete('Balvani', '174cm', 'assets/img/balvani-croped.jpg'))
    this.concreteArr.push(new Concrete('Balvani', '174cm', 'assets/img/koplja-min.jpg'))
     }



}
