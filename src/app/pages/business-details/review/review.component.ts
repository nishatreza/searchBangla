import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


reviewData = {

  reviewerProfile: {
    reviewerName: 'Natalie M.',
    reviewerPhoto: '../../../assets/images/pro-pic.jpg',
    reviewerPhotoLink:'/',
    reviewerLocation: 'San Francisco, CA',
    friendsNo: '595',
    reviewsNo:'22',
    photosNo:'36',
    share:'Share review',
    embed:'Embed review',
    compliment:'Compliment',
    message:'Send message',
    followOption:'Follow Natalie M.',
    shareLink:'/',
    embedLink:'/',
    complimentLink:'/',
    messageLink:'/',
    followOptionLink:'/'


  },
  reviewerComment: {
    time: '17/02/18',
    checkinNo: '2 check-ins',
    visitedTime: 'Visited Sun, Mar 4 2017 @ 1:00PM',
    commentOne: 'We ordered... Appetizers: Curly Fries, California Roll, Fire Wings Main Meals: Spicy Pork, Spicy Soft Tofu Soup (added ramen!) ...and spent: ~$37 per person vice: Awesome, friendly staff - super patient with recommendations Vibe: Dim lighting drinking is acceptable, unique floor decor Good for: Late night drunchies Overall verdict: Would probably come back for late night munchies but order less next time.',
    commentTwo: ' Skipping the spicy pork (quite different than what we\'ve had at other restaurants). Missed having Banchan.',
    reviewedPhoto: [{
      link: '/',
      photo:'https://s3-media2.fl.yelpcdn.com/bphoto/EH7s7YJ8DsOuvAk_VbeW5A/168s.jpg'
    },
    {
      link: '/',
      photo:'https://s3-media2.fl.yelpcdn.com/bphoto/EH7s7YJ8DsOuvAk_VbeW5A/168s.jpg'
    }
    ],
    seeotherPhotoCaption:'See all photos from Cat N. for Joo Mak',
    seeotherPhotoLink:'/',
    voteNo: 'James R. and 33 others',
    vote: 'voted for this review',
    voteReaction: [{
      voteReactionImage:'../../../assets/images/idea.svg',
      voteReactionType: 'Usefull',
      voteReactionNo: '30'

    },
    {
      voteReactionImage:'../../../assets/images/smile.svg',
      voteReactionType: 'Funny',
      voteReactionNo: '14'
      
    },
    {
      voteReactionImage:'../../../assets/images/cool.svg',
      voteReactionType: 'Cool',
      voteReactionNo: '5'
      
    }
    ]





  }


}

  constructor() { }

  ngOnInit() {
  }

}
