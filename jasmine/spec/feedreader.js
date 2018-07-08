$(function() {
    describe('RSS Feeds', () => {

      /* Make sure that the allFeeds variable has been defined
        * and that it is not empty.
        */
      it('are defined.', () => {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      /* Loop through each feed
         * in the allFeeds object and ensure each has a URL defined
         * and that the URL is not empty.
         */
       it('have defined URLs, and they are not empty.', () => {
         allFeeds.forEach(i => {
           expect(i).toBeDefined();
           expect(i.length).not.toBe(0);
         });
       });

       /*  Loop through each feed
         * in the allFeeds object and ensure each has a name defined
         * and that the name is not empty.
         */
       it('have defined names, and they are not empty.', () => {
         allFeeds.forEach(i => {
           let name = i.name;
           expect(name).toBeDefined();
           expect(name.length).not.toBe(0);
         });
       });
    });


    describe('The menu', () => {

      /* Ensure the menu element is
       * hidden by default.
       */
      it('element is hidden by default.', () => {
        expect($('body').attr('class')).toBe('menu-hidden');
      });

      /* Ensure the menu changes
        * visibility when the menu icon is clicked.
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

    describe('Initial Entries:', () => {

      /* Ensure when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
      beforeEach(done => {
        loadFeed(0, () => {
          done();
        });
      });

      it('After loadFeed is called and finishes, the .feed container should have at least one .entry element.', done => {
        expect($('.feed').find('.entry').length !== 0).toBe(true);
        done();
      });
    });

    describe('New Feed Selection:', () => {

      /* Ensure when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      let feed0, feed1;
      beforeEach(done => {
        loadFeed(0, () => {
          feed0 = $('.feed');
          loadFeed(1, () => {
            feed1 = $('.feed');
            done();
          });
          done();
        });
      });

      it('When a new feed is loaded, the content should actually change.', done => {
        expect(feed0 === feed1).toBe(false);
        done();
      });
    });
}());
