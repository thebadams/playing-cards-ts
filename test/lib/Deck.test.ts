import Deck from '../../src/lib/Deck';
import Card, { ICardConfig } from '../../src/lib/Card';
import { Faces } from '../../src/lib/faces';
import { Suits } from '../../src/lib/suits';
describe('Deck Class', () => {
	test('Deck Should Exist', () => {
		expect(Deck).toBeDefined()
	})
	describe('Deck.Config', () => {
		const newDeck = Deck.Config()
		test('Deck.Config Should Return a new Instance of The Deck Class', () => {
			expect(newDeck).toBeInstanceOf(Deck);
		})
		test('newDeck To Have Property cards, containing an array of Cards', () => {
			const newCard = Card.Config({
				face: Faces.KING,
				suit: Suits.CLUBS
			})
			expect(newDeck).toHaveProperty('cards', expect.arrayContaining([newCard]))
		})
	})
	describe('topCard Getter', () => {
		const newDeck = Deck.Config()
		const topCard = newDeck.topCard
		test('Top Card Should Be An Instance of Card Class', () => {
			expect(topCard).toBeInstanceOf(Card)
		})
	})
	describe('length Getter', () => {
		const newDeck = Deck.Config()
		const length = newDeck.length
		test('newDeck.length Should return the number 52', () => {
			expect(length).toBe(52)
		})
	})
	describe('removeTopCard Method', () => {
		const newDeck = Deck.Config();
		const firstLength : number = newDeck.length;
		const firstCard : Card = newDeck.topCard
		newDeck.removeTopCard();
		const secondCard : Card = newDeck.topCard
		const secondLength : number = newDeck.length
		test('removeTopCard should remove exactly 1 Card', () => {
			expect(secondLength + 1).toEqual(firstLength);
		})
		test('First Card Should Be Different Once Card Has Been Removed', () => {
			expect(firstCard).not.toBe(secondCard);
		})
	})
	describe('addCard Method', () => {
		const newDeck = Deck.Config();
		const cardConfig : ICardConfig = {
			suit: Suits.HEARTS,
			face: Faces.ACE
		}
		const firstLength : number = newDeck.length
		const newCard = Card.Config(cardConfig)
		newDeck.addCard(newCard);
		const secondLength = newDeck.length
		test('addCard Method Should Have Added Exactly 1 Card', () => {
			expect(firstLength + 1).toEqual(secondLength)
		})
	})
	describe('shuffle Method', () => {
		const newDeck = Deck.Config();
		const beforeShuffleCard = newDeck.topCard
		console.log(newDeck.length);
		const beforeShuffleLength = newDeck.length
		newDeck.shuffle();
		console.log(newDeck === newDeck);
		const afterShuffleCard = newDeck.topCard
		const afterShuffleLength = newDeck.length
		test('Top Card Should Be Different After Shuffling', () => {
			expect(beforeShuffleCard).not.toBe(afterShuffleCard);
		})
		test('Deck Length Should Not Remove Or Add Any Cards From the Deck', () => {
			expect(beforeShuffleLength).toBe(afterShuffleLength);
		})
	})
})