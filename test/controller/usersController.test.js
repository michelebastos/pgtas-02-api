
// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const chai = require('chai');


const app = require('../../app');

describe('Users Controller', () => {
    describe('POST /Users', () => {
        it('Quando informo dados válidos para usuário favorecido, deve retorna 201', async () => {
            const resposta = await request(app)
            .post('/users/register')
            .send({
                name: "Noah",
                email: "noah@gmail.com",
                password: "123",
                favored: true,
                balance: 1000
            });
        expect(resposta.status).to.equal(201);

        it('Quando informo dados já exisistentes, deve retorna 201', async () => {
            const resposta = await request(app)
            .post('/users/register')
            .send({
                name: "Ana",
                email: "anassss",
                password: "",
                favored: true,
                balance: 0
            });
        expect(resposta.status).to.equal(409);
        expect(resposta.body).to.have.property('error', 'user already exists');
    });

    describe('GET /Users', () => {
        it('Deve retornar todos os usuários com status 200', async () => {
            const resposta = await request(app)
            .get('/users/')
            expect(resposta.status).to.equal(200);

});
});
});
});
});