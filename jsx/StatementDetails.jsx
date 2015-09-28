var React = require('react');



var StatementDetails = React.createClass({

	propTypes:{

		statementDetails: React.PropTypes.object.isRequired,
		total: React.PropTypes.number.isRequired
	},
	render: function(){

		//console.log("StatementDetails properties");
		//console.log(this.props);
		return <div>
					<p> Date generated: {this.props.statementDetails.generated}</p>
					<p> Bill date: {this.props.statementDetails.due} </p>
					<p> Bill Period: {this.props.statementDetails.period.from} to {this.props.statementDetails.period.to}</p>
					<h4> Total: £{this.props.total}</h4>
				</div>;
	}
});

module.exports = StatementDetails;