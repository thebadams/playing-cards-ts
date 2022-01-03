type Suit = 'Hearts' | 'Spades' | 'Diamonds' | 'Clubs'
export enum Suits {
	HEARTS = 'Hearts',
	SPADES = 'Spades',
	DIAMONDS = 'Diamonds',
	CLUBS = 'Clubs'
}

type Face = 'Ace' | 'King' | 'Queen' | 'Jack' | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2;

export enum Faces {
	ACE = 'Ace',
	KING = 'King',
	QUEEN = 'Queen',
	JACK = 'Jack',
	TEN = 10,
	NINE = 9,
	EIGHT = 8,
	SEVEN = 7,
	SIX = 6,
	FIVE = 5,
	FOUR = 4,
	THREE = 3,
	TWO = 2
}

type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
export enum Values {
	ACE = 1,
	TWO,
	THREE,
	FOUR,
	FIVE,
	SIX,
	SEVEN,
	EIGHT,
	NINE,
	TEN,
	JACK,
	QUEEN,
	KING
}
export interface ICardConfig {
	suit: Suit;
	face: Face;
}

interface ICardInfo extends ICardConfig {
	value: Value;
	hidden: boolean
}
export default class Card {
	private _suit: Suit
	private _face: Face
	private _value: Value
	private isRevealed: boolean
	constructor(suit: Suit, face: Face, value: Value) {
		this._suit = suit,
		this._face = face,
		this._value = value
		this.isRevealed = false
	}

	private static FACES = Faces
	private static VALUES = Values
	private static generateCardValue(face: Face): Value {
		let value: Value
		switch (face) {
			case this.FACES.ACE:
				value = this.VALUES.ACE;
				break;
			case this.FACES.TWO:
				value = this.VALUES.TWO;
				break
			case this.FACES.THREE:
				value = this.VALUES.THREE;
				break
			case this.FACES.FOUR:
				value = this.VALUES.FOUR;
				break
			case this.FACES.FIVE:
				value = this.VALUES.FIVE;
				break
			case this.FACES.SIX:
				value = this.VALUES.SIX;
				break
			case this.FACES.SEVEN:
				value = this.VALUES.SEVEN;
				break
			case this.FACES.EIGHT:
				value = this.VALUES.EIGHT;
				break
			case this.FACES.NINE:
				value = this.VALUES.NINE;
				break
			case this.FACES.TEN:
				value = this.VALUES.TEN;
				break
			case this.FACES.JACK:
				value = this.VALUES.JACK;
				break
			case this.FACES.QUEEN:
				value = this.VALUES.QUEEN;
				break
			case this.FACES.KING:
				value = this.VALUES.KING;
				break
			default:
				value = this.VALUES.TWO
				break;
		}
		return value
	}
	
	public static Config(cardConfig: ICardConfig): Card {
		const value = this.generateCardValue(cardConfig.face)
		return new Card(cardConfig.suit, cardConfig.face, value);
	}

	private get value() : Value {
		return this._value
	}

	private get suit() : Suit {
		return this._suit
	}

	private set revealed(value: boolean) {
		this.isRevealed = value;
	}

	private get revealed() : boolean {
		return this.isRevealed
	}
	public reveal() : void {
		this.revealed = true
	}

	public hide() : void {
		this.revealed = false
	}
	private get face() : Face {
		return this._face
	}

	public get cardInfo() : Partial<ICardInfo> {
		if(this.revealed) {
			const suit = this.suit;
			const face = this.face;
			const value = this.value;
			const cardInfo: Partial<ICardInfo> = {
				suit: suit,
				face: face,
				value: value
			}
			return cardInfo
		} else {
			const cardInfo : Partial<ICardInfo> = {
				hidden: true
			}
			return cardInfo
		}
	
		
	}
}