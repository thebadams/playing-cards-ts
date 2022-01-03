import Deck from './Deck';
import Card, { ICardInfo } from './Card';
export default class PlayerDeck extends Deck {
	constructor(cards: Card[]) {
		super(cards)
	}
	public revealTopCard() : Partial<ICardInfo> {
		const topCard = this.topCard
		topCard.reveal
		this.removeTopCard()
		return topCard.cardInfo
	}
}