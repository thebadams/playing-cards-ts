import Deck from './Deck';
import Card from './Card';
export default class DiscardPile extends Deck {
	constructor(cards: Card[]) {
		super(cards);
	}
	public addCard(card: Card): void {
			card.reveal();
			this.cards.push(card);
	}
}