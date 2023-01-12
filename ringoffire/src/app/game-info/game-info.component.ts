import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnChanges {

  title = '';
  description = '';
  @Input() card;

/*   cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'All girls and Mens drink.' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ]; */

  cardAction = [
    { title: 'Erzähl mal', description: 'Was ist dein Lieblingsessen?' },
    { title: 'Weißt du es?', description: 'Was hat die Person nach dir immer im Kühlschrank?' },
    { title: 'Erzähl mal', description: 'Was hast du dir von deinem ersten selbst verdienten Geld gekauft?' },
    { title: 'Weißt du es?', description: 'Wer von euch allen hat einen Spitznamen?' },
    { title: 'Erzähl mal', description: 'Welches Land hat die Person links von dir zuletzt besucht? ' },
    { title: 'Weißt du es?', description: 'Hat die Person links von dir außer ihrem Rufnamen noch weitere Vornamen? Wie lauten sie?.' },
    { title: 'Erzähl mal', description: 'Welche lustige Geschichte über einen deiner Mitspieler wirst du nie vergessen?' },
    { title: 'Weißt du es?', description: 'Wer deiner Mitspieler ist mal per Anhalter gefahren? Wo führte die Reise hin?' },
    { title: 'Erzähl mal', description: 'Wenn ihr zusammen in eine Karaokebar gehen würdet - welches Lied würde sich die Person rechts von dir aussuchen?' },
    { title: 'Weißt du es?', description: 'Wer deiner Mitspieler ist mal per Anhalter gefahren? Wo führte die Reise hin?' },
    { title: 'Erzähl mal', description: 'Für was darf man dich nachts aus dem Schlaf holen?' },
    { title: 'Weißt du es?', description: 'Was wollte die Person  vor dir früher werden?' },
    { title: 'Erzähl mal', description: 'Welchen Traum möchtest du noch wahr machen?' },
    { title: 'Weißt du es?', description: 'Wer von euch hat die seltsamsten Frühstücks-angewohnheiten?' },
    { title: 'Erzähl mal', description: 'Was würdest du mit einer Million machen?' },
    { title: 'Weißt du es?', description: 'Welche TV-Persönlichkeit mag die Person links von dir ganz und gar nicht?' },
    { title: 'Erzähl mal', description: 'Was ist das allerbeste Restaurant, in dem du je gegessen hast?' },
    { title: 'Erzähl mal', description: 'Wen bist du dankbar und für was?' },
    { title: 'Weißt du es?', description: 'Womit tust du dem Mitspieler, der dir gegenübersitzt, den größten Gefallen?' },
    { title: 'Erzähl mal', description: 'Wer würdest du gerne mal für einen Tag sein?' },
    { title: 'Weißt du es?', description: 'Wer von euch kann am besten kochen? Was ist seine/ ihre Spezialität?' },
    { title: 'Erzähl mal', description: 'Welchen Beruf (wenn nicht deinen eigenen) würdest du gern ausüben?' },
    { title: 'Erzähl mal', description: 'Was ist das schönste Kompliment, das ein Freund dir machen kann?' },
    { title: 'Weißt du es?', description: 'In welchem Schulfach war die Person rechts von dir früher besonders gut?' },
    { title: 'Erzähl mal', description: 'Du verreist auf eine einsame Insel. Welche fünf Dinge nimmst du mit?' },
    { title: 'Weißt du es?', description: 'Wähle jemanden aus dieser Runde. Was ist ein typischer Spruch von ihm / ihr?' },
    { title: 'Erzähl mal', description: 'Worin ist die Person links von dir besonders gut?' },
    { title: 'Weißt du es?', description: 'Wer von euch würde gerne mal ins Ausland ziehen? Wohin?' },
    { title: 'Erzähl mal', description: 'Vervollständige den Satz: Ihr werdet nicht glauben, dass ich einmal …' },
    { title: 'Erzähl mal', description: 'Wie sieht ein idealer Tag für dich aus?' },
    { title: 'Erzähl mal', description: 'Wähle einen Mitspieler und erzähle ihm, was das ; Schönste ist, das du jemals mit ihm erlebt hast.' },
    { title: 'Erzähl mal', description: 'Was ist deine schönste Jugenderinnerung?' },
  ];

ngOnChanges():void{
  if(this.card){
    /* let cardNumber = +this.card.split('_')[1]; */
    let cardNumber = Math.floor(Math.random() * 31);
    this.title = this.cardAction[cardNumber].title;
    this.description = this.cardAction[cardNumber].description;
    /* this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description; */
  }
  
}

}
