/*
 * Mellov API
 * Mellov API
 *
 * OpenAPI spec version: 1.2.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MellovApi);
  }
}(this, function(expect, MellovApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MellovApi.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('addNote', function() {
        it('should call addNote successfully', function(done) {
          // TODO: uncomment, update parameter values for addNote call and complete the assertions
          /*
          var opts = {};
          opts.noteItem = new MellovApi.NoteItem();
          opts.noteItem.id = "4daef72846cae99923dfd6ez";
          opts.noteItem.creationDate = "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)";
          opts.noteItem.text = "Some note";

          instance.addNote(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addSong', function() {
        it('should call addSong successfully', function(done) {
          // TODO: uncomment, update parameter values for addSong call and complete the assertions
          /*
          var opts = {};
          opts.songItem = new MellovApi.SongItem();
          opts.songItem.id = "5daef72831cae99923dad6ez";
          opts.songItem.title = "G-Eazy - Far alone";
          opts.songItem.url = "https://youtube.com/watch?v=sxV1_Lr1yf0";
          opts.songItem.dateAdded = "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)";
          opts.songItem.tags = ["dance","party"];

          instance.addSong(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addTag', function() {
        it('should call addTag successfully', function(done) {
          // TODO: uncomment, update parameter values for addTag call and complete the assertions
          /*
          var opts = {};
          opts.tagItem = new MellovApi.TagItem();
          opts.tagItem.id = "5daef72831cae99923dad6ez";
          opts.tagItem.name = "Dance";

          instance.addTag(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getYtItems', function() {
        it('should call getYtItems successfully', function(done) {
          // TODO: uncomment, update parameter values for getYtItems call and complete the assertions
          /*
          var title = "title_example";
          var opts = {};
          opts.limit = 5;

          instance.getYtItems(title, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MellovApi.YtVideoItem);
              expect(data.title).to.be.a('string');
              // expect(data.title).to.be("LP - Muddy Waters");
              expect(data.videoId).to.be.a('string');
              // expect(data.videoId).to.be("Ss8t7a8n0U4");
              expect(data.thumbnailUrl).to.be.a('string');
              // expect(data.thumbnailUrl).to.be("https://i.ytimg.com/vi/Ss8t7a8n0U4/default.jpg");
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('removeNote', function() {
        it('should call removeNote successfully', function(done) {
          // TODO: uncomment, update parameter values for removeNote call
          /*
          var id = "id_example";

          instance.removeNote(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('removeSong', function() {
        it('should call removeSong successfully', function(done) {
          // TODO: uncomment, update parameter values for removeSong call
          /*
          var id = "id_example";

          instance.removeSong(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('removeTag', function() {
        it('should call removeTag successfully', function(done) {
          // TODO: uncomment, update parameter values for removeTag call
          /*
          var id = "id_example";

          instance.removeTag(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchNote', function() {
        it('should call searchNote successfully', function(done) {
          // TODO: uncomment, update parameter values for searchNote call and complete the assertions
          /*
          var opts = {};
          opts.id = "id_example";
          opts.skip = 56;
          opts.limit = 56;

          instance.searchNote(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MellovApi.NoteItem);
              expect(data.id).to.be.a('string');
              // expect(data.id).to.be("4daef72846cae99923dfd6ez");
              expect(data.creationDate).to.be.a('string');
              // expect(data.creationDate).to.be("Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)");
              expect(data.text).to.be.a('string');
              // expect(data.text).to.be("Some note");
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchSong', function() {
        it('should call searchSong successfully', function(done) {
          // TODO: uncomment, update parameter values for searchSong call and complete the assertions
          /*
          var opts = {};
          opts.id = "id_example";
          opts.skip = 56;
          opts.limit = 56;
          opts.title = "title_example";
          opts.tags = ["tags_example"];
          opts.sort = "sort_example";

          instance.searchSong(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MellovApi.SongItem);
              expect(data.id).to.be.a('string');
              // expect(data.id).to.be("5daef72831cae99923dad6ez");
              expect(data.title).to.be.a('string');
              // expect(data.title).to.be("G-Eazy - Far alone");
              expect(data.url).to.be.a('string');
              // expect(data.url).to.be("https://youtube.com/watch?v=sxV1_Lr1yf0");
              expect(data.dateAdded).to.be.a('string');
              // expect(data.dateAdded).to.be("Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)");
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  // expect(data).to.be("");
                }
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchTag', function() {
        it('should call searchTag successfully', function(done) {
          // TODO: uncomment, update parameter values for searchTag call and complete the assertions
          /*
          var opts = {};
          opts.id = "id_example";
          opts.skip = 56;
          opts.limit = 56;

          instance.searchTag(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MellovApi.TagItem);
              expect(data.id).to.be.a('string');
              // expect(data.id).to.be("5daef72831cae99923dad6ez");
              expect(data.name).to.be.a('string');
              // expect(data.name).to.be("Dance");
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateNote', function() {
        it('should call updateNote successfully', function(done) {
          // TODO: uncomment, update parameter values for updateNote call
          /*
          var opts = {};
          opts.noteItem = new MellovApi.NoteItem();
          opts.noteItem.id = "4daef72846cae99923dfd6ez";
          opts.noteItem.creationDate = "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)";
          opts.noteItem.text = "Some note";

          instance.updateNote(opts).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSong', function() {
        it('should call updateSong successfully', function(done) {
          // TODO: uncomment, update parameter values for updateSong call and complete the assertions
          /*
          var opts = {};
          opts.songItem = new MellovApi.SongItem();
          opts.songItem.id = "5daef72831cae99923dad6ez";
          opts.songItem.title = "G-Eazy - Far alone";
          opts.songItem.url = "https://youtube.com/watch?v=sxV1_Lr1yf0";
          opts.songItem.dateAdded = "Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)";
          opts.songItem.tags = ["dance","party"];

          instance.updateSong(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MellovApi.SongItem);
            expect(data.id).to.be.a('string');
            // expect(data.id).to.be("5daef72831cae99923dad6ez");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("G-Eazy - Far alone");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("https://youtube.com/watch?v=sxV1_Lr1yf0");
            expect(data.dateAdded).to.be.a('string');
            // expect(data.dateAdded).to.be("Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTag', function() {
        it('should call updateTag successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTag call
          /*
          var opts = {};
          opts.tagItem = new MellovApi.TagItem();
          opts.tagItem.id = "5daef72831cae99923dad6ez";
          opts.tagItem.name = "Dance";

          instance.updateTag(opts).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
