import { Component, OnInit, OnDestroy} from '@angular/core';
import{AuthService} from '../../core/auth.service'
import {Router, ActivatedRoute} from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  // onDestroy
  ngOnDestroy(): void {
   
    
  }
  returnUrl: string;
  loggedInUser:any;

  errorMessage: string = null;
  editMode: boolean;
  public modal = false; 




  constructor(
    // private _flashMessagesService: FlashMessagesService,
    public authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
  ) { 

  }

  ngOnInit() {
    this.authService.user.subscribe(user => {this.loggedInUser = user})

  }




signout(){
  this.authService.signOut();

}


}
