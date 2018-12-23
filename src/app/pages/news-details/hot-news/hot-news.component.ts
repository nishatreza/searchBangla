import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent implements OnInit {
  @Input() newsData;
  @Input() relatedNewsData;

  constructor() { }

  ngOnInit() {
  }

}
