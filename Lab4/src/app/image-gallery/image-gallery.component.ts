import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent implements OnInit {
  imageUrls: string[] =[
    'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large'
  ];
  constructor() {
  }
  ngOnInit(): void {
  }
}
