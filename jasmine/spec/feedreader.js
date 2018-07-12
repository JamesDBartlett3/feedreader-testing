// Encapsulate all JS on the page in an Immediately Invoked Function Expression,
// or "IIFE" for short. This ensures that it will wait for the DOM to load
// before it tries to execute, which is important in this context because
// several of our tests depend on the presence of certain DOM elements,
// and we don't want them to fail just because the page hadn't finished
// loading yet.
$(function() {
    describe('RSS Feeds', () => {

      /* Make sure that the allFeeds variable has been defined
        * and that it is not empty.
        */
      it('are defined.', () => {
          expect(allFeeds).toBeDefined(); // expect allFeeds to be defined,
          expect(allFeeds.length).not.toBe(0); // and its length not to be 0.
      });

      /* Loop through each feed
         * in the allFeeds object and ensure each has a URL defined
         * and that the URL is not empty.
         */
       it('have defined URLs, and they are not empty.', () => {
         allFeeds.forEach(i => { // for each feed in allFeeds,
           expect(i).toBeDefined(); // expect the feed to be defined,
           expect(i.length).not.toBe(0); // and its length not to be 0.
         });
       });

       /*  Loop through each feed
         * in the allFeeds object and ensure each has a name defined
         * and that the name is not empty.
         */
       it('have defined names, and they are not empty.', () => {
         allFeeds.forEach(i => { // for each feed in allFeeds,
           let name = i.name; // get 'name' property from 'i' and store in 'name' var
           expect(name).toBeDefined(); // run same checks as before
           expect(name.length).not.toBe(0);
         });
       });
    });


    describe('The menu', () => {

      /* Ensure the menu element is
       * hidden by default.
       */
      it('element is hidden by default.', () => {
        expect($('body').attr('class')).toBe('menu-hidden'); // expect body to have CSS class 'menu-hidden' by default
      });

      /* Ensure the menu changes
        * visibility when the menu icon is clicked.
        */
      it('should become visible when clicked, and then invisible when clicked again.', () => {
        let clickIcon = () => { // define a function that clicks the menu icon whenever it is called.
          $('.icon-list').click();
        };
        expect($('body').hasClass('menu-hidden')).toBe(true); // check that body still has 'menu-hidden' class
        clickIcon(); // click the icon,
        expect($('body').hasClass('menu-hidden')).toBe(false); // now make sure the menu is visisble,
        clickIcon(); // and click the icon to make it invisible again.
      });
    });

    describe('Initial Entries:', () => {

      /* Ensure when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
      beforeEach(done => { // before each test in this suite,
        loadFeed(0, () => { // set up async callback.
          done();
        });
      });

      it('After loadFeed is called and finishes, the .feed container should have at least one .entry element.', done => {
        // make sure .feed has a .entry element, and its length is not zero.
        expect($('.feed').find('.entry').length !== 0).toBe(true);
        done();
      });
    });

    describe('New Feed Selection:', () => {

      /* Ensure when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      // declare feed0 and feed1 at this level so they are accessible throughout the rest of the function.
      let feed0, feed1;
      beforeEach(done => { // before each test in this suite,
        loadFeed(0, () => { // set up async callback,
          feed0 = $('.feed');
          loadFeed(1, () => { // and load feed1 within the feed0 function to make sure it returns with data
            feed1 = $('.feed');
            done();
          });
          done();
        });
      });

      it('When a new feed is loaded, the content should actually change.', done => {
        expect(feed0 === feed1).toBe(false); // check to make sure feed0 and feed1 are different.
        done();
      });
    });
}());
