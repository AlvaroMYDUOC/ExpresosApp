import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators,  FormBuilder } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  formularioLogin: FormGroup;
  
  token = '2234'
  
  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
  
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }
  ngOnInit() {}

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'))
    if(usuario.usuario == f.usuario && usuario.password == f.password){
      console.log('Ingresado');
      this.router.navigate(['/usuario'])

    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Usuario no registrado.',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
  }

}
