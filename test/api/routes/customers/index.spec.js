const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

const app = require('../../../../app');
const truncate = require('../../../truncate');

chai.use(chaiHttp);

describe('api', () => {
  describe('post /api/customers', () => {
    beforeEach(async () => {
      await truncate();
    });

    it('should return a response with status 201', async () => {
      const response = await chai.request(app)
        .post('/api/customers')
        .send({
          name: 'John Doe',
          email: 'john.doe@email.com'
        });

      response.should.have.status(201);
    });
  });
});