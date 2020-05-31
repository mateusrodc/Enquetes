const crypto = require("crypto")
const connection = require('../database/connection');

module.exports={
    async index(request,response){
        const pessoas = await connection('pessoas').select('id','apelido');
        return response.json(pessoas);
    },
    async create(request,response){
        const {nome,apelido,senha} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('pessoas').insert({
            id,
            nome,
            apelido,
            senha,
        });
        return response.json({
            apelido
        });
    },
    async update(request,response){
        
    }
};