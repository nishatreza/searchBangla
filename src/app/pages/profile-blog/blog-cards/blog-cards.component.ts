import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css']
})
export class BlogCardsComponent implements OnInit {

  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";

  blog = [{
    blogImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqwFOFWRi6J7d2uWSi6v2Vva_AIDq5VbmWb3CIwMURXa529b4WQ",
    blogerName: "John Doe",
    blogTime: "August 7, 2020",
    blogreply: "168",
    blogHeading: "DEVELOPMENT SHORTCUT",
    blogDetails: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque qui iste quam cum laborum ipsam vel unde praesentium. Deserunt ut laboriosam sequi? Nam quibusdam qui deleniti facere? Quisquam, quo."
  },{
    blogImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqwFOFWRi6J7d2uWSi6v2Vva_AIDq5VbmWb3CIwMURXa529b4WQ",
    blogerName: "John Doe",
    blogTime: "August 7, 2020",
    blogreply: "168",
    blogHeading: "DEVELOPMENT SHORTCUT",
    blogDetails: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque qui iste quam cum laborum ipsam vel unde praesentium. Deserunt ut laboriosam sequi? Nam quibusdam qui deleniti facere? Quisquam, quo."
  },{
    blogImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqwFOFWRi6J7d2uWSi6v2Vva_AIDq5VbmWb3CIwMURXa529b4WQ",
    blogerName: "John Doe",
    blogTime: "August 7, 2020",
    blogreply: "168",
    blogHeading: "DEVELOPMENT SHORTCUT",
    blogDetails: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque qui iste quam cum laborum ipsam vel unde praesentium. Deserunt ut laboriosam sequi? Nam quibusdam qui deleniti facere? Quisquam, quo."
  }]

  constructor() { }

  ngOnInit() {
  }

}
