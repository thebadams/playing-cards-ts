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
			expect(newCard).toHaveProperty('_suit', Suits.SPADES);
		})
		test('newCard Should have a property, face, equal to Faces.TWO', () => {
			expect(newCard).toHaveProperty('_face', Faces.TWO);
		})
		test('newCard Should have a property, value, equal to Values.TWO', () => {
			expect(newCard).toHaveProperty('_value', Values.TWO);
		})
		describe('cardInfo Getter', () => {
			describe('With Reveal Method', () => {
				newCard.reveal()
				const cardInfo = newCard.cardInfo
				test('newCard.cardInfo should return an object with a face property with the value matching Faces.TWO', () => {
					expect(cardInfo).toHaveProperty('face', Faces.TWO);
				})
				test('newCard.cardInfo should return an object with a suit property with the value matching Suits.SPADES', () => {
					expect(cardInfo).toHaveProperty('suit', Suits.SPADES);
				})
				test('newCard.cardInfo should return an object with a value property with the value matching Values.TWO', () => {
					expect(cardInfo).toHaveProperty('value', Values.TWO);
				})
			})
			describe('With Hide Method', () => {
				newCard.hide()
				const cardInfo = newCard.cardInfo;
				test('cardInfo Should Return An Object With Only A Hidden Property, Set To True, and No Other Properties', () => {
					expect(cardInfo).toHaveProperty('hidden', true);
					expect(cardInfo).not.toHaveProperty('suit');
					expect(cardInfo).not.toHaveProperty('face');
					expect(cardInfo).not.toHaveProperty('value');
				})
			})	
		})
	})
});