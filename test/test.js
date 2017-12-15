'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('return 200', function(){
	before(function(){
		return runServer();
	});

	after(function(){
		return closeServer();
	});

    it('will return 200', function() {
  	return chai.request('http://localhost:5000')
  	.get('/')
  	.then(function(res) {
      res.should.have.status(200);
      res.should.be.html;
    });
});
    });