'use strict';

const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.createBoard = this.createBoard.bind(this);
		this.onDismissDialog = this.onDismissDialog.bind(this);
		this.handler = this.handler.bind(this);
		this.onStartNewMatch = this.onStartNewMatch.bind(this);
		this.onHelpBtnClick = this.onHelpBtnClick.bind(this);
		this.restartGame = this.restartGame.bind(this);
		this.validateCardMatch = this.validateCardMatch.bind(this);

        this.state = {
			cards: 					[],
			matches:				0,
			revealedCardOne:		null,
			revealedCardTwo:		null,
			canSelect:				true,
			timePassed:				0,
			isGameWon:				false,
			isDialogShown:			true,
			dialogSetting: {
				headline: i18next.t('dialogs.start.headline'),
				bodyText: i18next.t('dialogs.start.bodyText'),
				btnText: i18next.t('dialogs.start.btnText'),
				theme: 'blue',
				closeAction: 'CLOSE'
			}
        };
    }

    render() {
		const
			canSelect = this.state.canSelect,
			isGameWon = this.state.isGameWon,
			dialog = this.state.isDialogShown ? <Dialog setting={this.state.dialogSetting} onDismissDialog={this.onDismissDialog} /> : '',
			timePassed = this.state.timePassed;

        return (
			<div id='app-container'>
				{dialog}
				<div id='menu'>
					<div className='button-container'>
						<Timer isGameWon={isGameWon} timePassed={timePassed} />
						<img src='res/images/site/help.png' alt='help' onClick={this.onHelpBtnClick} />
					</div>
					<div id='logo'></div>
				</div>
				<div id='game-container'>
					<div className='board'>
						{this.state.cards.map((card) => {
		                    return (
								<Card key={card.id} cardId={card.id} value={card.value} image={card.img} sound={card.sound} canSelect={canSelect} handler={this.handler} onStartNewMatch={this.onStartNewMatch}/>
		                    )
						})}
					</div>
				</div>
			</div>
        );
    }

	componentDidMount() {
		this.interval = setInterval(() => this.updateTimer(), 1000);
		this.createBoard();
	}

	updateTimer() {
		const
			currentTime = this.state.timePassed,
			isGameWon = this.state.isGameWon;

		if (!isGameWon) {
			this.setState({
				timePassed: currentTime + 1
			});
		}
	}

	restartGame() {
		var me = this;

		me.state = {
			matches:				0,
			revealedCardOne:		null,
			revealedCardTwo:		null,
			canSelect:				true,
			timePassed:				0,
			isGameWon:				false,
			cards: []
        };

		setTimeout(function() {
			me.createBoard();
		}, 500);
	}

	handler(card) {
		const
			me = this,
			revealedCardOne = this.state.revealedCardOne,
			revealedCardTwo = this.state.revealedCardTwo;

		if (!revealedCardOne) {
			me.setState({
				revealedCardOne: card
			});
		}
		else if (!revealedCardTwo) {
			me.setState({
				revealedCardTwo: card,
				canSelect: false
			});

			setTimeout(function() {
				me.validateCardMatch();
			}, 250);
		}
	}

	onStartNewMatch(card) {
		const
			me = this,
			revealedCardOne = me.state.revealedCardOne,
			revealedCardTwo = me.state.revealedCardTwo;

			me.setState({
				revealedCardOne: null,
				revealedCardTwo: null,
				canSelect: true
			});

			setTimeout(function() {
				me.flipCards(revealedCardOne, revealedCardTwo);
				me.handler(card);
				card.select();
			}, 10);
	}

	flipCards(cardOne, cardTwo) {
		cardOne.unselect();
		cardTwo.unselect();
		new Audio('res/sounds/flip_card.mp3').play();
	}

	validateCardMatch() {
		const
			me = this,
			matches			= this.state.matches,
			revealedCardOne = this.state.revealedCardOne,
			revealedCardTwo = this.state.revealedCardTwo;

		if (revealedCardOne && revealedCardTwo) {
			if (
				revealedCardOne.props.value === revealedCardTwo.props.value &&
				revealedCardOne.props.cardId !== revealedCardTwo.props.cardId
			) {
				me.matchCards(revealedCardOne, revealedCardTwo, matches);
			}
		}
	}

	matchCards(cardOne, cardTwo, matches) {
		var me = this;

		me.setState({
			revealedCardOne: null,
			revealedCardTwo: null,
			canSelect: true,
			matches: matches - 2
		});
		cardOne.unselect();
		cardOne.setMatched();

		cardTwo.unselect();
		cardTwo.setMatched();

		if ( (matches - 2) === 0) {
			me.setState({
				isGameWon: true,
				isDialogShown: true,
				dialogSetting: {
					headline: i18next.t('dialogs.win.headline'),
					bodyText: i18next.t('dialogs.win.bodyText', {time: convertSecondsToDisplay(me.state.timePassed)}),
					bodyExtra: me.state.timePassed,
					btnText: i18next.t('dialogs.win.btnText'),
					theme: '',
					closeAction: 'RESTART'
				}
			});
		}
	}

	createBoard() {
		var boardSize = cardsToCreate.length,
		result = new Array();

		for (var i = 0; i < boardSize; i++) {
			var index = Math.floor(Math.random() * cardsToCreate.length),
				tile = cardsToCreate[index];

			result.push(tile);

			cardsToCreate.splice(index, 1);
		}

		this.setState({
			cards: result,
			matches: boardSize
		});
	}

	onDismissDialog() {
		if (this.state.dialogSetting.closeAction === 'RESTART') {
			this.restartGame();
		}

		this.setState({
			isDialogShown: false
		});
	}

	onHelpBtnClick() {
		this.setState({
			isDialogShown: true,
			dialogSetting: {
				headline: i18next.t('dialogs.help.headline'),
				bodyText: i18next.t('dialogs.help.bodyText'),
				btnText: i18next.t('dialogs.help.btnText'),
				theme: '',
				closeAction: 'CLOSE'
			}
		});
	}
}

const domContainer = document.querySelector('#content-container');
ReactDOM.render(e(App), domContainer);
