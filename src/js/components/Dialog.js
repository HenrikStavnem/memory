class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: true
        };
		this.onDismissBtnClick = this.onDismissBtnClick.bind(this);
    }

	render() {
		const
			shown 		= this.state.shown,
			setting 	= this.props.setting,
			theme 		= setting.theme ? setting.theme : '',
			headline 	= setting.headline ? setting.headline : '',
			btnText 	= setting.btnText ? setting.btnText : 'Ok',
			bodyText 	= setting.bodyText ? setting.bodyText : '',
			bodyLines	= bodyText ? bodyText.split('\n') : new Array(),
			dialogCss	= 'dialog ' + theme;

		if (shown) {
			return (
				<div className='dialog-container'>
					<div className='modal-background'>
					</div>
					<div className={dialogCss}>
						<h1>{headline}</h1>
						<div>
					    { bodyLines.map(line => <p>{line}</p>) }
					    </div>
						<br /><div className='button' onClick={this.onDismissBtnClick}>{btnText}</div>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className='dialog-container'></div>
			);
		}
	}

	onDismissBtnClick() {
		this.props.onDismissDialog();
	}
}
