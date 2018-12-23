import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  @Input() businessImages;

  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";
  galleryModal: boolean = false;
  currentImg;
  currentImgIndex;

  constructor() { }

  ngOnInit() {
  }

  imgGallery(businessImage, index) {
    this.galleryModal = true;
    this.currentImg = businessImage;
    this.currentImgIndex = index;
  }

  prev(index) {
    if (index > 0) {
      this.currentImgIndex = index - 1;
    }
  }

  next(index, length) {
    if (index < length - 1) {
      this.currentImgIndex = index + 1;
    }
  }

  close() {
    this.galleryModal = false;
  }

}
