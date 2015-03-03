
var assertDir = require('assert-dir-equal')
var autoprefixer = require('../')
var Metalsmith = require('metalsmith')

describe('metalsmith-autoprefixer', function() {
  it('should add some prefixes', function(done){
    Metalsmith('test/fixtures/basic')
      .use(autoprefixer({ browsers: 'Chrome 30' }))
      .build(function(err) {
        if (err) return done(err)
        assertDir('test/fixtures/basic/expected', 'test/fixtures/basic/build')
        return done(null)
      })
  })
  it('should take options and propagate to autoprefixer', function(done){
    Metalsmith('test/fixtures/options')
      .use(autoprefixer({ browsers: 'Chrome 30', cascade: false }))
      .build(function(err) {
        if (err) return done(err)
        assertDir('test/fixtures/options/expected', 'test/fixtures/options/build')
        return done(null)
      })
  })
})
