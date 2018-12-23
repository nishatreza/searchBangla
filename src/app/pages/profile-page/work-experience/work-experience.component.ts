import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  @Input() userData;
  experienceId: string;
// experience= this.userData.experience;

  // WorkExperience = [{
  //   duration: '2003 - 2006',
  //   company: 'pineapple',
  //   jobTitle: 'FULL STACK DEVELOPER',
  //   experience: 'Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.',
  // },{
  //   duration: '2003 - 2006',
  //   company: 'pineapple',
  //   jobTitle: 'FULL STACK DEVELOPER',
  //   experience: 'developers and marketers.Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.',
  // },{
  //   duration: '2003 - 2006',
  //   company: 'pineapple',
  //   jobTitle: 'FULL STACK DEVELOPER',
  //   experience: 'Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager.',
  // },{
  //   duration: '2003 - 2006',
  //   company: 'pineapple',
  //   jobTitle: 'FULL STACK DEVELOPER',
  //   experience: 'IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.',
  // },{
  //   duration: '2003 - 2006',
  //   company: 'pineapple',
  //   jobTitle: 'FULL STACK DEVELOPER',
  //   experience: 'Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the IT Manager. Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers.',
  // },{
  //   duration: '2003 - 2006',
  //   company: 'pineapple',
  //   jobTitle: 'FULL STACK DEVELOPER',
  //   experience: 'Had a specific brief to ensure the websites build for customer’s precisely matched their requirements.developers and marketers. ensure the websites build for customer’s precisely. ensure the websites build for customer’s precisely. ensure the websites build for customer’s precisely.',
  // }]

  constructor() { }

  ngOnInit() {
  }

}
