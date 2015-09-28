var React = require('react');


var SkyStoreItem = React.createClass({

	propTypes:{

		billedItem: React.PropTypes.object.isRequired
	},
	render: function(){

		//console.log("SkyStoreItem billed item");
		//console.log(this.props.billedItem);
		
		return <tr>
				<td>{this.props.billedItem.title}</td>
				<td>£{this.props.billedItem.cost}</td> 
			</tr>;
	}
});

module.exports = SkyStoreItem;