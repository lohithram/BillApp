# React and Flux application to display Bill from JSON data.

Run `npm install` in the directory to install React from npm. Then run:

    watchify -t babelify ./jsx/*.jsx ./js/*.js -o ./dist/bundle.js -v

to produce `bundle.js`.

# Note
1 A good example of Re-usable React Component is BillList.jsx. Note that it accepts itemRenderer and uses it to render individual items.
2 BillDataStore loads the bill data by require'ing' BillService and when data loaded emits change event
3 Didn't get to write unit test(in Jasmine) for the Data Store and Actions. Happy to produce if requested.
4 You can see the rendered output by running Your Bill.html. I have used Bootstrap css lightly to structure the information.
5 Again happy to format and improve the look of the page further.

