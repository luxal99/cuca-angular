import { Component, OnInit, Inject } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-ograde-gallery-dialog',
  templateUrl: './ograde-gallery-dialog.component.html',
  styleUrls: ['./ograde-gallery-dialog.component.css']
})
export class OgradeGalleryDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog) { }

  ngOnInit() {
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 100,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }
}
