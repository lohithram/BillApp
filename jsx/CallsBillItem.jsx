var React = require('react');


var CallsBillItem = React.createClass({

	propTypes:{

		billedItem: React.PropTypes.object.isRequired
	},
	render: function(){

		//console.log("CallsBillItem billed item");
		//console.log(this.props.billedItem);
		
		return <tr>
				<td>{this.props.billedItem.called}</td>
				<td>{this.props.billedItem.duration}</td>
				<td>£{this.props.billedItem.cost}</td> 
			</tr>;

	}
});

module.exports = CallsBillItem;