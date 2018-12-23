import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../core/auth.service'

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent implements OnInit {

  constructor(
    public authService:AuthService

  ) { }

  ngOnInit() {
  }
  signout(){
    this.authService.signOut();
  }

}
