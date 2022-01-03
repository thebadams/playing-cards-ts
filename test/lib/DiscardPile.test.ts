import Card, { ICardConfig, ICardInfo } from '../../src/lib/Card';
import DiscardPile from '../../src/lib/DiscardPile';
import { Faces } from '../../src/lib/faces';
import { Suits } from '../../src/lib/suits';
describe('Discard Pile Class', () => {
	test('Discard Pile Should Exist', () => {
		expect(DiscardPile).toBeDefined();
	})
	describe('Add Card Method', () => {
		const discardPile = new DiscardPile([])
		const cardConfig : ICardConfig = {
			suit: Suits.CLUBS,
			face: Faces.FIVE
		}
		const card : Card = Card.Config(cardConfig);
		const discardPileSize : number = discardPile.length;
		card.reveal()
		const cardInfo : Partial<ICardInfo> = card.cardInfo
		discardPile.addCard(card);
		const topCard = discardPile.topCard
		const topCardInfo : Partial<ICardInfo> = topCard.cardInfo
		const discardPileSizeWithCard : number = discardPile.length
		test('addCard Should Add A Card to the Discard', () => {
			expect(discardPileSize + 1).toEqual(discardPileSizeWithCard)
		})
		test('The Added Card Should Be the Correct Information', () => {
			expect(topCardInfo).toEqual(cardInfo);
		})
	})
})