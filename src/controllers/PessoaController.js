const crypto = require("crypto");
const connection = require('../database/connection');

module.exports={
    async index(request,response){
        const pessoas = await connection('pessoas').select('id','apelido','senha');
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
            apelido,
        });
    },
    async updatePessoa(request,response){
        
        const {id} = request.params;
        const{nome,apelido,senha} = request.body;
        
        
        await connection('pessoas').where('id',id).update({
            nome:nome,
            apelido:apelido,
            senha:senha
        });
        return response.json({
            nome,
            apelido,
        })
    }
};