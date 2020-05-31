const connection = require('../database/connection');
module.exports={
    async create(request,response){
        const{apelido,senha} = request.body;
        const pessoa = await connection('pessoas').where('apelido',apelido).where('senha',senha).select('apelido').first();
        
        
        if(!pessoa){
            return response.status(400).json({error:'Nenhum usuário encontrado com esse apelido ou senha'})
        }
        return response.json(pessoa);
    }
};