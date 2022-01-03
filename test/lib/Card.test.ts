import Card from '../../src/lib/Card';

describe('Card Class', () => {
	test('Card Class Should Exist', () => {
		expect(Card).toBeDefined();
	});
	describe('Card.Config method', () => {
		const newCard = Card.Config()
		test('Card.Config Should return a new instance of a card', () => {
			expect(newCard).toBeInstanceOf(Card)
		})
	})
});