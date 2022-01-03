import Card, { ICardConfig } from './Card'
import { Suits } from './suits'
import { Face, Faces } from './faces'
const SUITS : [Suits, Suits, Suits, Suits] = [Suits.CLUBS, Suits.DIAMONDS, Suits.HEARTS, Suits.SPADES]
const FACES : [Faces, Faces, Faces, Faces, Faces, Faces, Faces, Faces, Faces, Face, Faces, Faces, Faces] = [Faces.ACE, Faces.TWO, Faces.THREE, Faces.FOUR, Faces.FIVE, Faces.SIX, Faces.SEVEN, Faces.EIGHT, Faces.NINE, Faces.TEN, Faces.JACK, Faces.QUEEN, Faces.KING]
export default class Deck {
	private cards: Card[]
	constructor(cards: Card[]) {
		this.cards = cards
	}
	private static SUITS = SUITS
	private static FACES = FACES
	public static Config() {
		const cards = this.generateCards()
		return new Deck(cards)
	}
	private static generateCards(): Card[] {
		const cards: Card[] = []
		this.SUITS.forEach(suit => {
			this.FACES.forEach(face => {
				const cardConfig : ICardConfig = {
					face: face,
					suit: suit
				}
				let newCard = Card.Config(cardConfig)
				cards.push(newCard);
			})
		});
		
		return cards
	}
}