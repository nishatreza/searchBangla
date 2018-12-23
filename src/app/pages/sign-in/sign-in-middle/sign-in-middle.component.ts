import { Component, OnInit, OnDestroy} from '@angular/core';
import{AuthService} from '../../../core/auth.service'
import {Router, ActivatedRoute} from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-sign-in-middle',
  templateUrl: './sign-in-middle.component.html',
  styleUrls: ['./sign-in-middle.component.css']
})
export class SignInMiddleComponent implements OnInit {

 // onDestroy
 ngOnDestroy(): void {
   
    
}
returnUrl: string;

errorMessage: string = null;



constructor(
  // private _flashMessagesService: FlashMessagesService,
  public authService:AuthService,
  private route: ActivatedRoute,
  private router:Router,
) { 

}

ngOnInit() {

  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
}

// google and facebook signin
googleSignin(){
  this.authService.googleLogin().then ( user =>{
    this.router.navigateByUrl(this.returnUrl);
  });
}

facebookSignin(){
  this.authService.facebookLogin().then ( user =>{
    this.router.navigateByUrl(this.returnUrl);
  }).catch( error => {
    this.errorMessage = error.message;
    // this._flashMessagesService.show( error.message, {cssClass: '', timeout: 5000});
  });;
}


signout(){
this.authService.signOut();

}


}
