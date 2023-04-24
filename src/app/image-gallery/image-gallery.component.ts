import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ImageGalleryComponent implements OnInit { 
  constructor(){
  }
  
  items:number[] = [0,1,2,3,4,5,6,7,8,9];
  selectedImage = 0;

  flagPrevious:boolean = true;
  flagNext:boolean = false;

  galleryData = {
    title: 'Online Image Gallery',
    name: 'Hasti Akbarideilami',
    studentNumber: '101424542',
    imagesInfo: [
      {
        index:0,
        isActive:true,
        caption:"The Little Pond, Appledore (1890) by Frederick Childe Hassam",
        address:"./assets/image/0.jpg"     
      },
  
      {
        index:1,
        isActive:false,
        caption:"Edge of the Woods Near L'Hermitage, Pontoise (1879) by Camille Pissarro",
        address:"./assets/image/1.jpg"
      },
      
      {
        index:2,
        isActive:false,
        caption:"Cliff Walk at Pourville (1882) by Claude Monet",
        address:"./assets/image/2.jpg"      
      },
  
      {
        index:3,
        isActive:false,
        caption:"La Grenouillère (1869) by Claude Monet",
        address:"./assets/image/3.jpg"
      },
  
      {
        index:4,
        isActive:false,
        caption:"Snow at Louveciennes (ca. 1870) by Camille Pissarro",
        address:"./assets/image/4.jpg"     
      },
  
      {
        index:5,
        isActive:false,
        caption:"Apple trees in Eragny, sunny morning (1903) by Camille Pissarro",
        address:"./assets/image/5.jpg"
      },
      
      {
        index:6,
        isActive:false,
        caption:"Jalais Hill, Pontoise (1867) by Camille Pissarro",
        address:"./assets/image/6.jpg"    
      },
  
      {
        index:7,
        isActive:false,
        caption:"Countryside near Grez-sur-Loing (1889) by Camille Pissarro",
        address:"./assets/image/7.jpg"
      },

      {
        index:8,
        isActive:false,
        caption:"Haystacks, Morning, and Éragny (1899) by Camille Pissarro",
        address:"./assets/image/8.jpg"
      },
  
      {
        index:9,
        isActive:false,
        caption:"The Artist's Garden at Éragny (1898) by Camille Pissarro",
        address:"./assets/image/9.jpg"
      },

    ]
  };

  loadMainImage(item:number, userInput:number){

    if (userInput == 1){  // the first condition indicates that the user has pressed the previous button.
      if (this.selectedImage > 0){
        this.selectedImage = this.selectedImage - 1;
      }
    }
    else if (userInput == 2){ // the second condition indicates that the user has pressed the next button.
      if (this.selectedImage < 9){
        this.selectedImage = this.selectedImage + 1;
      }
    }
    else{ //the last condition indicates that the user has clicked on the row below to change the image.
      this.selectedImage = item;
    }

    if (this.selectedImage == 0){
      this.flagPrevious = true;
      this.flagNext = false;
    }
    else if (this.selectedImage == 9){
      this.flagPrevious = false;
      this.flagNext = true;
    }
    else{
      this.flagPrevious = false;
      this.flagNext = false;
    }

    this.galleryData.imagesInfo.forEach(element => element.isActive = false);
    this.galleryData.imagesInfo[this.selectedImage].isActive = true; 
  }

  ngOnInit(): void {
  }  
}