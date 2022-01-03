import Card, { ICardConfig } from '../../src/lib/Card';
import { Faces } from '../../src/lib/faces';
import PlayerDeck from '../../src/lib/PlayerDeck';
import { Suits } from '../../src/lib/suits';
describe('Player Deck Class', () => {
	test('Player Deck Class Should Exist', () => {
		console.log(PlayerDeck)
		expect(PlayerDeck).toBeDefined();
	})
	describe('revealTopCard Method', () => {
		const cardConfig: ICardConfig = {
			suit: Suits.SPADES,
			face: Faces.ACE
		}
		const card : Card = Card.Config(cardConfig)
		const cardInfo = card.cardInfo
		const playerDeck = new PlayerDeck([card])
		const firstLength = playerDeck.length
		const topCardInfo = playerDeck.revealTopCard()
		const secondLength = playerDeck.length
		test('revealTopCard Should Return The Top Card Information', () => {
			expect(topCardInfo).toEqual(cardInfo)
		})
		test('revealTopCard should have removed the card from the player deck', ()=> {
			expect(firstLength).toBe(secondLength + 1);
		})
	})
})