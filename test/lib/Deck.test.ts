import Deck from '../../src/lib/Deck';
import Card from '../../src/lib/Card';
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
})