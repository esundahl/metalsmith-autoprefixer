
var assertDir = require('assert-dir-equal')
var autoprefixer = require('../')
var Metalsmith = require('metalsmith')

describe('metalsmith-autoprefixer', function() {
  it('should add some prefixes', function(done){
    Metalsmith('test/fixtures/basic')
      .use(autoprefixer())
      .build(function(err) {
        if (err) return done(err)
        assertDir('test/fixtures/basic/expected', 'test/fixtures/basic/build')
        return done(null)
      })
  })
})
