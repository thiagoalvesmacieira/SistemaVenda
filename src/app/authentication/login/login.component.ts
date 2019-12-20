import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { DataLogin } from 'src/app/model/authentication.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formEnviado:boolean = false;
  showProgessbar:boolean = false;
  //####################################################
  //0 nenhum erro
  //1 erro de conexao
  //401 não autorizado
  //1000 Desconhecido
  errorStatus:number = 0;
  //####################################################
  //####################################################
  loginForm: FormGroup;

  dataLogin:DataLogin = {
    email:"thiago@gmail.com",
    password:"123"
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authenticationService:AuthenticationService,
    public apiService:ApiService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    /* this.loginForm.get('email').hasError; */
  }
  onSubmit(){
    //########################################################
    //########################################################
    if(!this.loginForm.invalid){
      //########################################################
      this.errorStatus = 0;
      this.showProgessbar = true;
      this.formEnviado = true;
      //########################################################
      this.dataLogin.email = this.loginForm.get('email').value;
      this.dataLogin.password = this.loginForm.get('password').value;
      //########################################################
      this.apiService.login(this.dataLogin).subscribe(d=>{
        this.router.navigate(['/']);
      }, error=>{
        try {
          //Login não autorizado
          if(error.status == 401){
            this.errorStatus = 401;
          }else{
            this.errorStatus = 1;
          }
        } catch (error) {
          this.errorStatus = 1000;
        }
        this.showProgessbar = false;
      });
      //########################################################
    }
    //########################################################
    //########################################################
  }
}
