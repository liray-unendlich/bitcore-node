'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export phorecore-lib', function() {
    var phorecore = require('../');
    should.exist(phorecore.lib);
    should.exist(phorecore.lib.Transaction);
    should.exist(phorecore.lib.Block);
  });
});
