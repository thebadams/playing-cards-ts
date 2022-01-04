import DiscardPile from "./DiscardPile";
import PlayerDeck from "./PlayerDeck";

export interface IPlayerConfig {
	deck: PlayerDeck;
	discardPile: DiscardPile;
}
export default class Player {
	private deck: PlayerDeck;
	private discardPile: DiscardPile;

	constructor(deck: PlayerDeck, discardPile: DiscardPile) {
		this.deck = deck,
		this.discardPile = discardPile
	}
	public static Config(playerConfig: IPlayerConfig) {
		return new Player(playerConfig.deck, playerConfig.discardPile);
	}
}