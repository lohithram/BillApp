jest.dontMock('../jsx/BillList.jsx');
describe('BillList', function(){

var React = require('react/addons');
	var TestUtils = React.addons.TestUtils;
	var BillList = require('../jsx/BillList.jsx');

	var billListComponent;
	
	beforeEach(function(){

		billListComponent = TestUtils.renderIntoDocument(
				<BillList/>);

	});
});