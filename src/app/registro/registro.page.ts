import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators,  FormBuilder} from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  formularioRegistro : FormGroup;

  constructor(public fb: FormBuilder
    ,public alertController: AlertController,
    public navCtrl: NavController) { 

    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    console.log('Guardar')
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Tienes que llenar todos los campos.',
          buttons: ['OK']
        });
    
        await alert.present();
        return;
      }else{
      var usuario={
        usuario: f.usuario,
        password : f.password,
        
      }
      localStorage.setItem('usuario',JSON.stringify(usuario));
      const alert = await this.alertController.create({
        header: 'Datos Registrados',
        message: 'Los datos fueron guardados correctamente',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
    }
  }

