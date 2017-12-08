import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-domino',
  templateUrl: './domino.component.html',
  styleUrls: ['./domino.component.css']
})
export class DominoComponent implements OnInit {
  rotation = "rotate(0deg)";
  rotate = 0;
  speed = '1s';
  size = "100px";
  picked = null;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }


  rotateRight(){
    this.rotate += 90;
    this.rotation = "rotate(" + this.rotate + "deg)";
  }
  
  rotateLeft() {
    this.rotate -= 90;
    this.rotation = "rotate(" + this.rotate + "deg)";
  }

  setSpeed(e){
    this.speed = e.value + "s";
  }

  setSize(e){
    console.log(e.value);
    this.size = e.value + "px";
  }

  reset(){
    document.getElementById('domino-top').className = "domino-zero domino-top";
    document.getElementById('domino-bottom').className = "domino-zero domino-bottom";
  }

  pickFace(e){
    this.picked = document.getElementById(e);
    this.picked.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)"
  }

  setFace(value){
    if(!this.picked) return;

    switch(value){
      case 1:
        this.picked.className = "domino-face domino-one";
        this.picked.style.boxShadow = "";
        this.picked = null;
        break;
      case 2:
        this.picked.className = "domino-face domino-two";
        this.picked.style.boxShadow = "";
        this.picked = null;
        break;
      case 3:
        this.picked.className = "domino-face domino-three";
        this.picked.style.boxShadow = "";
        this.picked = null;
        break;
      case 4:
        this.picked.className = "domino-face domino-four";
        this.picked.style.boxShadow = "";
        this.picked = null;
        break;
      case 5:
        this.picked.className = "domino-face domino-five";
        this.picked.style.boxShadow = "";
        this.picked = null;
        break;
      case 6:
        this.picked.className = "domino-face domino-six";
        this.picked.style.boxShadow = "";
        this.picked = null;
        break;
    }

  }

}
