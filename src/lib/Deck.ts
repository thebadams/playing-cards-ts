import Card, { ICardConfig } from './Card'
import { Suits } from './suits'
import { Face, Faces } from './faces'
const SUITS : [Suits, Suits, Suits, Suits] = [Suits.CLUBS, Suits.DIAMONDS, Suits.HEARTS, Suits.SPADES]
const FACES : [Faces, Faces, Faces, Faces, Faces, Faces, Faces, Faces, Faces, Face, Faces, Faces, Faces] = [Faces.ACE, Faces.TWO, Faces.THREE, Faces.FOUR, Faces.FIVE, Faces.SIX, Faces.SEVEN, Faces.EIGHT, Faces.NINE, Faces.TEN, Faces.JACK, Faces.QUEEN, Faces.KING]
export default class Deck {
	protected cards: Card[]
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
	public get topCard() : Card {
			const card = this.cards[0]
			return card
	}
	public get length() : number {
		return this.cards.length
	}
	public removeTopCard() : void {
		this.cards.shift()
	}
	public addCard(card: Card) : void {
		this.cards.push(card);
	}
	public shuffle() : Card[] {
		for (let i = this.cards.length -1; i> 0; i--) {
			let j = Math.floor(Math.random() * (i +1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
		return this.cards
	}
}