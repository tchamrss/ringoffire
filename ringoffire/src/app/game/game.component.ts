import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Observable } from 'rxjs';
/* import { Firestore, collectionData, collection, setDoc, doc, getDoc } from '@angular/fire/firestore'; */
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  
  game: Game;
  games$: Observable<any[]>;
  gameId:string;


  constructor(private route: ActivatedRoute,public fire: AngularFirestore,public dialog: MatDialog) {
    /* const coll = collection(firestore, 'games');
    this.games$ = collectionData(coll);
    this.games$.subscribe((game) =>{
      console.log('game update', game); 
    });*/
  }

  ngOnInit(): void{
    this.newGame();
    this.route.params.subscribe((params) =>{
      /* console.log(params['id']); */
      this.gameId = params['id'];


      this
      .fire
      .collection('games')
      .doc(this.gameId)
      .valueChanges()
      .subscribe((game:any) =>{
      console.log('Game update', game);
      this.game.currentPlayer = game.currentPlayer;
      this.game.playedCard = game.playedCard;
      this.game.players = game.players;
      this.game.stack = game.stack; 
      this.game.pickCardAnimation = game.pickCardAnimation; 
      this.game.currentCard = game.currentCard; 
      });


      /* const coll = collection(this.firestore, 'games');
      const coll2 = collection(this.firestore, 'games')['id'];
      /* getDoc(doc(coll,params['id'])) ; 
      console.log(coll2);
      this.games$ = collectionData(coll);
      this.games$.subscribe((game:any) =>{
      console.log('game update 39', game); 
      
    }); */
    });
    /* const coll = collection(this.firestore, 'games');
    this.games$ = collectionData(coll);
    this.games$.subscribe((game) =>{
      console.log('game update', game); 
    });  */
    
  }

  newGame(){
    this.game = new Game();
    
  }

  takeCard(){
    if(this.game.players.length == 0){
      this.openDialog();
    }
    if(!this.game.pickCardAnimation &&this.game.players.length){
        this.game.currentCard = this.game.stack.pop();
        
      /* console.log(this.currentCard); */
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.saveGame();
      
      setTimeout(() => {
        this.game.playedCard.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1500);

    } 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name:string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.saveGame();
      }      
    });
  }
  saveGame(){
    this
      .fire
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson())

  }

}

