import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  nom   : string;
  prenom: string;
  age   : number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
     this.nom    = navParams.get('nom');
     this.prenom = navParams.get('prenom');
     this.age    = navParams.get('age');
  }

  areDatasDisplayable() : boolean {
    if (this.nom !== undefined && this.prenom !== undefined && this.age !== undefined) return true; 
  }
}
