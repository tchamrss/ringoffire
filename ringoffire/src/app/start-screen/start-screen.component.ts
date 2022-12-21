import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  constructor(private router:Router, public fire:AngularFirestore){}

  newGame(){
    //start game
    let game = new Game();
    this.fire.collection('games').add(game.toJson())
    .then((gameInfo:any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
        
  }

}
