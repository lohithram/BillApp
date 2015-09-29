jest.dontMock('../jsx/PackageBillItem.jsx');
describe('PackageBillItem', function(){

	var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;
	var PackageBillItem = require('../jsx/PackageBillItem.jsx');

	var billItemComp;
	
	beforeEach(function(){

		billItemComp = TestUtils.renderIntoDocument(
				<PackageBillItem billedItem={{type: "packageType", name: "packageName", cost: 2.0}}/>);

	});

	it('Check that the property "billedItem" is declared upfront on the component', function() {

		expect(PackageBillItem.propTypes.billedItem).not.toBeUndefined();			
	});

	it('Make sure the data is properly passed to the component', function() {

		console.log(billItemComp.props.billedItem.toString());
		expect(billItemComp.props.billedItem.type).toEqual('packageType');
		expect(billItemComp.props.billedItem.name).toEqual('packageName');
		expect(billItemComp.props.billedItem.cost).toEqual(2.0);
	});

	it('Make sure this component renders a table row', function() {

		var tableRow = TestUtils.findRenderedDOMComponentWithTag( billItemComp, 'tr');
		// this test is a bit inclusive in checking if the component has rendered the information of the bill as a table row
		expect(tableRow).not.toBeUndefined();			
		
	});
});