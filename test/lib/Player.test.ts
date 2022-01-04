import Card, { ICardConfig } from '../../src/lib/Card';
import DiscardPile from '../../src/lib/DiscardPile';
import { Faces } from '../../src/lib/faces';
import Player, { IPlayerConfig } from '../../src/lib/Player';
import PlayerDeck from '../../src/lib/PlayerDeck';
import { Suits } from '../../src/lib/suits';

describe('Player Class', () => {
	test('Player Class Should Exist', () => {
		expect(Player).toBeDefined();
	})
	describe('Player Config Method', () => {
		const card1Config : ICardConfig = {
			face: Faces.JACK,
			suit: Suits.DIAMONDS
		}
		const card2Config : ICardConfig = {
			face: Faces.NINE,
			suit: Suits.CLUBS
		}
		const card1 = Card.Config(card1Config);
		const card2 = Card.Config(card2Config);
		const playerDeck = new PlayerDeck([card1])
		const discardPile = new DiscardPile([card2])
		const playerConfig : IPlayerConfig = {
			deck: playerDeck,
			discardPile
		}
		const newPlayer = Player.Config(playerConfig)
		test('Config method should return a new instance of the Player Class', () => {
			expect(newPlayer).toBeInstanceOf(Player);
		})
		test('New Player Should Have A Deck Property', () => {
			expect(newPlayer).toHaveProperty('deck', playerDeck)
		})
		test('newPlayer Should Have A Property discardPile', () => {
			expect(newPlayer).toHaveProperty('discardPile', discardPile)
		})
	})
})