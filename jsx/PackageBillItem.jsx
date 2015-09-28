var React = require('react');


var PackageBillItem = React.createClass({

	propTypes:{

		billedItem: React.PropTypes.object.isRequired
	},
	render: function(){

		//console.log("PackageBillItem billed item");
		//console.log(this.props.billedItem);
		
		return <tr>
				<td>{this.props.billedItem.type}</td>
				<td>{this.props.billedItem.name}</td>
				<td>£{this.props.billedItem.cost}</td> 
			</tr>;
	}
});

module.exports = PackageBillItem;