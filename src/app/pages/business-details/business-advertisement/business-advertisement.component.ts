import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-advertisement',
  templateUrl: './business-advertisement.component.html',
  styleUrls: ['./business-advertisement.component.css']
})
export class BusinessAdvertisementComponent implements OnInit {
@Input() businessData;
@Input() ratingsDB;

  businessAdvertisementData = [{
    advertisementImage: 'https://s3-media2.fl.yelpcdn.com/photo/mPRtfPyzsMs6eMXNv-pwRw/60s.jpg',
    advertisementLink:'/',
    advertisementTitle:'Opa',
    advertisementSecondTitle: '186 reviews',
    adBusinessDistance: ['0.9 miles', 'Search Bangla'],
    advertisementReviewer: 'Adam E.',
    advertisementParagraph: '"I have to say I was a little skeptical of this place. On the outside it looks like just another liquor store...and given it is directly across the street from the Projects on Post, well you see what I…"',
    advertisementReadMore:'read more',
    advertisementSecondParagraph:'in Beer, Wine & Spirits, Mediterranean, Wraps '
  },
  {
    advertisementImage: 'https://s3-media2.fl.yelpcdn.com/photo/mPRtfPyzsMs6eMXNv-pwRw/60s.jpg',
    advertisementLink:'/',
    advertisementTitle:'Opa',
    advertisementSecondTitle: '186 reviews',
    adBusinessDistance: ['0.9 miles', 'Search Bangla'],
    advertisementReviewer: 'Adam E.',
    advertisementParagraph: '"I have to say I was a little skeptical of this place. On the outside it looks like just another liquor store...and given it is directly across the street from the Projects on Post, well you see what I…"',
    advertisementReadMore:'read more',
    advertisementSecondParagraph:'in Beer, Wine & Spirits, Mediterranean, Wraps '
  }]

  businessAtGlanceData = {
    timeToday: '10:00 am - 7:00 pm',
    menuLink: '/',
    priceRange: 'Under $10'
  }

  businessHoursData = {
    sundayTime: ['Sun', '11:00 am - 7:00 pm', ''],
    mondayTime: ['Mon', '11:00 am - 7:00 pm', ''],
    tuesdayTime: ['Tue', '11:00 am - 7:00 pm', ''],
    wednesdayTime: ['Wed', '11:00 am - 8:00 pm', 'Open now'],
    thursdayTime: ['Thu', '10:00 am - 8:00 pm', ''],
    fridayTime: ['Fri', '10:00 am - 8:00 pm', ''],
    saturdayTime: ['Sat', '10:00 am - 8:00 pm', ''],
    editInfo: '/'
  }

  moreInfoData = {
    reservations: ['Takes Reservations', 'yes'],
    delivery: ['Delivery', 'yes'],
    takeOut: ['Take-out', 'no'],
    creditCards: ['Accepts Credit Cards', 'yes'],
    bikeParking: ['Bike Parking', 'no'],
    wheelchairAccess: ['Wheelchair Accessible', 'no'],
    goodForKids: ['Good for Kids', 'yes'],
    goodForGroups: ['Good for Groups', 'yes'],
    attire: ['Attire', 'no'],
    alcohol: ['Alcohol', 'no'],
    outdoorSeating: ['Outdoor Seating', 'no'],
    wiFi: ['Wi-Fi', 'yes'],
  }

  constructor() { }

  ngOnInit() {
  }

}
