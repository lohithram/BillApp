var React = require('react');


var BillList = React.createClass({

	propTypes:{

		sectionTitle: React.PropTypes.string.isRequired,
		billedItems: React.PropTypes.array.isRequired,
		headerTitles: React.PropTypes.array.isRequired,
		itemRenderer: React.PropTypes.func.isRequired
	},
	render: function(){

		console.log("BillList billed items");
		console.log(this.props.billedItems);
		
		var listItems = [];
		var billedItems = this.props.billedItems;
		for( var i=0; i<billedItems.length; ++i){

			var billedItem = billedItems[i];
			//console.log(billedItem);
			
			//listItems.push(<PackageBillItem billedItem={billedItem}/>);
			listItems.push(React.createElement(this.props.itemRenderer, {billedItem: billedItem}));
		}

		
		var headerTitles = [];
		if(this.props.headerTitles){
			for(i=0; i<this.props.headerTitles.length; ++i){

				headerTitles.push( <th>{this.props.headerTitles[i]}</th> );
			}
		}
		
		return <div className='panel panel-default'>
  					<div className='panel-heading'>
  						<h4>{this.props.sectionTitle}</h4>
  					</div>
  					<div className='panel-body'>
	  					<table className='table table-striped'>
			                <thead>
			                    <tr> {headerTitles} </tr>
			                </thead>
		                	<tbody>{listItems}</tbody>
		            	</table>
	  				</div>
				</div>;

	}
});

module.exports = BillList;
