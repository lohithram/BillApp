jest.dontMock('../jsx/BillList.jsx');
describe('BillList', function(){

var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;
	var BillList = require('../jsx/BillList.jsx');


	var billListComponent;
	
	beforeEach(function(){

		var callItemRenderer = require('../jsx/CallsBillItem.jsx');

		billListComponent = TestUtils.renderIntoDocument(
				<BillList sectionTitle={'testTitle'}
							headerTitles={['header1', 'header2']}
							billedItems={[]}
							itemRenderer={callItemRenderer}/>);

	});


	it('Check all the properties are declared upfront on the component', function() {

		expect(BillList.propTypes.sectionTitle).not.toBeUndefined();
		expect(BillList.propTypes.billedItems).not.toBeUndefined();
		expect(BillList.propTypes.headerTitles).not.toBeUndefined();
		expect(BillList.propTypes.itemRenderer).not.toBeUndefined();			
	});

});