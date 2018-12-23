import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  @Input() userData;
  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";

  // interest = {
  //   interestParagraph: 'I have a keen interest in photography. I was vice-president of the photography club during my time at university, and during this period I organised a number of very successful exhibitions and events both on and off campus. I also play the piano to grade 8 standard.',
  //   interestList: ['cycling', 'movies', 'shopping', 'cricket', 'swimming', 'traveling']
  // }

  constructor() { }

  ngOnInit() {
  }

}
