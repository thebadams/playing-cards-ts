import Card, { Faces, ICardConfig, Suits, Values } from '../../src/lib/Card';

describe('Card Class', () => {
	test('Card Class Should Exist', () => {
		expect(Card).toBeDefined();
	});
	describe('Card.Config method', () => {
		const cardConfig: ICardConfig = {
			suit: Suits.SPADES,
			face: Faces.TWO
		}
		const newCard = Card.Config(cardConfig)
		test('Card.Config Should return a new instance of a card', () => {
			expect(newCard).toBeInstanceOf(Card)
		})
		test('newCard Should have a property, suit, equal to Suits.SPADES', () => {
			expect(newCard).toHaveProperty('suit', Suits.SPADES);
		})
		test('newCard Should have a property, face, equal to Faces.TWO', () => {
			expect(newCard).toHaveProperty('face', Faces.TWO);
		})
		test('newCard Should have a property, value, equal to Values.TWO', () => {
			expect(newCard).toHaveProperty('value', Values.TWO);
		})
	})
});