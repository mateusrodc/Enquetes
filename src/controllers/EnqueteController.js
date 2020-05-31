const connection = require('../database/connection');

module.exports={
    async index(request,response){
        const enquete = await connection('enquetes');
        return response.json(enquete);
    },
    async create(request,response){
        const {titulo,descricao,voto} = request.body;
        const pessoa_id = request.headers.authorization;

        const[id] = await connection('enquetes').insert({
            titulo,
            descricao,
            voto,
            pessoa_id,
        });
        return response.json({id});

    }
}