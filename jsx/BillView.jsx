'use strict';

var React = require('react'),
	StatementDetails = require('./StatementDetails.jsx'),
	BillList = require('./BillList.jsx'),
	PackageBillItem = require('./PackageBillItem.jsx'),
	CallsBillItem = require('./CallsBillItem.jsx'),
	SkyStoreItem = require('./SkyStoreItem.jsx'),
	BillDataStore = require('../js/BillDataStore')
	;

var BillView = React.createClass({

	getInitialState: function() {

		return { billData: this.props.billData };
	},
	render: function() {

		if(!this.state.billData)
			return <p>Loading the bill...</p>
		else
		return <div>
					<h2>Your Bill</h2>			
					<section name="statementDetails">
						<StatementDetails statementDetails={this.state.billData.statement}
											total={this.state.billData.total}/>
					</section>
					<section name="packageSubscriptions">
						<BillList sectionTitle={'Package Subscriptions'}
									itemRenderer={PackageBillItem}
									headerTitles={['Subscription type', 'Name', 'Cost']}
									billedItems={this.state.billData.package.subscriptions}/>
					</section>
					<section name="callCharges">
						<BillList sectionTitle={'Call charges'}
									itemRenderer={CallsBillItem}
									headerTitles={['Called number', 'Call duration', 'Cost']}
									billedItems={this.state.billData.callCharges.calls}/>
					</section>	
					<section name="skyStore">
						<BillList sectionTitle={'Sky Rentals'}
									itemRenderer={SkyStoreItem}
									headerTitles={['Title', 'Cost']}
									billedItems={this.state.billData.skyStore.rentals}/>	
					</section>
					<section name="skyStore">
						<BillList sectionTitle={'Sky Bought'}
									itemRenderer={SkyStoreItem}
									headerTitles={['Title', 'Cost']}
									billedItems={this.state.billData.skyStore.buyAndKeep}/>	
					</section>
					
				</div>;
	},
	componentDidMount: function() {

		BillDataStore.addListener('change', this.onDataChange);
	},
	componentWillUnmount: function() {

		BillDataStore.removeListener('change', this.onDataChange);
	},
	onDataChange: function() {

		this.setState({billData: BillDataStore.getBillData()});
	}
});

// mount our main React view into the DOM
React.render( <BillView/>, 
	document.getElementById('billContainer')
	);