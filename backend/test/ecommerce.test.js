const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

describe('E-Commerce Backend Tests', function() {
  it('should fetch product details from API', async function() {
    const response = await axios.get('https://api.example.com/products/12345');
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('name');
    expect(response.data).to.have.property('price');
  });

  it('should handle invalid product ID', async function() {
    try {
      await axios.get('https://api.example.com/products/invalid-id');
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
