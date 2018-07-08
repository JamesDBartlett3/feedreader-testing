/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined.', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('have defined URLs, and they are not empty.', () => {
           allFeeds.forEach(i => {
             expect(i).toBeDefined();
             expect(i.length).not.toBe(0);
           });
         });

         it('have defined names, and they are not empty.', () => {
           allFeeds.forEach(i => {
             let name = i.name;
             expect(name).toBeDefined();
             expect(name.length).not.toBe(0);
           });
        });
    });


/* TODO: Write a new test suite named "The menu" */

    describe('The menu', () => {

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */

        it('element is hidden by default.', () => {
          expect($('body').attr('class')).toBe('menu-hidden');
        });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('should become visible when clicked, and then invisible when clicked again.', () => {
          let clickIcon = () => {
            $('.icon-list').click();
          };
          expect($('body').hasClass('menu-hidden')).toBe(true);
          clickIcon();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          clickIcon();
        });
      });

/* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', () => {

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

      it('After loadFeed is called and finishes, the .feed container should have at least one .entry element.', () => {
       
      });
     });

/* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
