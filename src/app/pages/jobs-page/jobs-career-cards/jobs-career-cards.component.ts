import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-career-cards',
  templateUrl: './jobs-career-cards.component.html',
  styleUrls: ['./jobs-career-cards.component.css']
})
export class JobsCareerCardsComponent implements OnInit {
  CareerCardsData  =[{
    cardsTitle: 'Company Profiles & Reviews ',
    cardsParagraph: 'Get the inside scoop on employers before you apply. Check out Monsters company profiles as well as employee reviews—powered by —to get a sense of culture, pay and benefits.',
    careerButtons:'See Profiles',
    bgImg: "https://orig00.deviantart.net/497a/f/2018/113/1/8/banner_performance_management_by_datatrekanalytics-dc9m1au.jpg"
  },
  {  
    cardsTitle: 'Career Advice',
    cardsParagraph: 'Monster has the expert advice you need for your job search and career—interview tips, networking icebreakers, salary negotiation strategies, our latest Monster 100 list of companies hiring now and more.',
    careerButtons:'Get Advice',
    bgImg: "https://orig00.deviantart.net/497a/f/2018/113/1/8/banner_performance_management_by_datatrekanalytics-dc9m1au.jpg"

  },
  {
    cardsTitle: 'Education Programs',
    cardsParagraph: 'Need extra skills to make yourself more marketable? We can help you get the training you need to succeed. Check out our directory of online and local education and professional development programs.',
    careerButtons:'Learn More',
    bgImg: "https://orig00.deviantart.net/497a/f/2018/113/1/8/banner_performance_management_by_datatrekanalytics-dc9m1au.jpg"

  },
  {
    cardsTitle: 'Resume Help',
    cardsParagraph: 'Upload your resume, and you will have the opportunity for a free expert critique that will help make sure your value shines through. And for a fee, our pros will give that resume a full-on makeover.',
    careerButtons:'Get Resume Help',
    bgImg: "https://orig00.deviantart.net/497a/f/2018/113/1/8/banner_performance_management_by_datatrekanalytics-dc9m1au.jpg"

  }]
  
  constructor() { }

  ngOnInit() {
  }

}
