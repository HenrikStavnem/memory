class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		const timePassed = convertSecondsToDisplay(this.props.timePassed);

		return (
			<div className='timer-container'>
				<div className='timer-body'>{timePassed}</div>
			</div>
		);
	}
}
