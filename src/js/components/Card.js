class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
			isMatched: false
        };

		this.onCardClick = this.onCardClick.bind(this);
		this.setMatched = this.setMatched.bind(this);
		this.select = this.select.bind(this);
		this.unselect = this.unselect.bind(this);
    }

	render() {
		const
			isMatched = this.state.isMatched,
			selected = this.state.selected,
			cardId = this.props.cardId,
			value = this.props.value;

		let cardCls = 'card',
			image = 'res/images/cards/card_back.png';

		if (selected) {
			image = 'res/images/cards/' + this.props.image;
		}

		if (isMatched) {
			cardCls = 'card matched';
			image = 'res/images/cards/' + this.props.image;
		}

		//image = 'res/images/cards/' + this.props.image;

        return (
            <div className={cardCls}>
				<img src={image} onClick={this.onCardClick} />
			</div>
        );
    }

	onCardClick() {
		const
			canSelect = this.props.canSelect,
			isMatched = this.state.isMatched,
			selected = this.state.selected,
			sound = new Audio('res/sounds/' + this.props.sound);

		if (canSelect) {
			if (!selected && !isMatched) {
				this.setState({
					selected: true
				});

				sound.play();

				this.props.handler(this);
			}
		}
		else {
			this.props.onStartNewMatch(this);
			if (!selected && !isMatched) {
				this.setState({
					selected: true
				});

				sound.play();
			}
		}
	}

	select() {
		this.setState({
			selected: true
		});
	}

	unselect() {
		this.setState({
			selected: false
		});
	}

	setMatched() {
		this.setState({
			isMatched: true
		});
	}
}
