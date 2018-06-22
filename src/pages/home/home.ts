import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    theForm : FormGroup;

  constructor(
    public navCtrl: NavController) {

      this.theForm = new FormGroup({
        nom   : new FormControl('', Validators.required),
        prenom: new FormControl('', Validators.required),
        age   : new FormControl('', Validators.required),
      })
  }

  isFormValid() : boolean {
    let controls = this.theForm.controls;
    return (controls.nom.valid && controls.prenom.valid && controls.age.valid)
  }

  goToDetailsPage() : void {
    let controls = this.theForm.controls;

    if (this.isFormValid) {
      let nom   : string = controls.nom.value;
      let prenom: string = controls.prenom.value;
      let age   : number = controls.age.value;

      this.navCtrl.push(DetailsPage, {
        nom   : nom,
        prenom: prenom,
        age   : age
      });
    }
  }
}

