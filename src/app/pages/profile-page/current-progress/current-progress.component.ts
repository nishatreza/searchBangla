import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-current-progress',
  templateUrl: './current-progress.component.html',
  styleUrls: ['./current-progress.component.css']
})
export class CurrentProgressComponent implements OnInit {
  @Input() userData;
  projectId: string;

  // progression = [{
  //   projectLink: '/',
  //   projectTitle: 'Project Title',
  //   projectTopic: 'Create the new product design',
  //   projectStatus: 'In Progress',
  //   projectStageTopic: '3D modeling',
  //   progressDate: '12 Jan 2018',
  //   progressTime: '4:45 ',
  //   progressPercent: '78',

  // },{
  //   projectLink: '/',
  //   projectTitle: 'Project Title',
  //   projectTopic: 'Create the new product design',
  //   projectStatus: 'In Progress',
  //   projectStageTopic: '3D modeling',
  //   progressDate: '12 Jan 2018',
  //   progressTime: '4:45 ',
  //   progressPercent: '45',

  // },{
  //   projectLink: '/',
  //   projectTitle: 'Project Title',
  //   projectTopic: 'Create the new product design',
  //   projectStatus: 'In Progress',
  //   projectStageTopic: '3D modeling',
  //   progressDate: '12 Jan 2018',
  //   progressTime: '4:45 ',
  //   progressPercent: '69',

  // }]

  constructor() { }

  ngOnInit() {
  }

}
