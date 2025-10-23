const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');
const usersModel = require('../../model/usersModel');


describe('Transfer Controller', () => {
describe('POST /transfers', () => {
  it('Quando informo remetente e destinatário inexistente, deve retorna 404', async () => {
    const resposta = await request(app)
      .post('/transfers')
      .send({
        fromId: "julio",
        toId: "Maria",
        amount: 100
        });
    expect(resposta.status).to.equal(404);
    expect(resposta.body).to.have.property('error', 'origin user not found');
  });

   it('Quando informo valor=0  retorna 400', async () => {
    const resposta = await request(app)
      .post('/transfers')
      .send({
        fromId: "julio",
        toId: "Maria",
        amount: 0
      });

    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property('error', 'fromId, toId and amount (>0) are required');
    
  });

  it('Quando não informo destinatário e rementente retorna 400', async () => {
    const resposta = await request(app)
      .post('/transfers')
      .send({
        fromId: "",
        toId: "",
        amount: 100
      });

    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property('error', 'fromId, toId and amount (>0) are required');
    
  });

});
});