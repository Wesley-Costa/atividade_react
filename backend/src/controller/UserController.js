const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res){
        const id = crypto.randomBytes(4).toString('hex')
        const {nome, email, idade, empresa, imagem} = req.body
        await connection('usuarios').insert({
            id,
            nome,
            email,
            idade,
            empresa,
            imagem
        });
        console.log(id)
        res.json();
    },
    
    async list(req, res){
        const users = await connection('usuarios').select('*');
        res.json(users);
    },

    async show(req,res){
        const {id} = req.params;
        const user = await connection('usuarios')
                    .where('id', id)
                    .select('*');
        return res.json(user);
    },

    async delete(req,res){
        const {id} = req.params;
        await connection('usuarios').where('id', id).delete();
        return res.status(204).send();
    },


    async update(req, res){
        const {id} = req.params;
        const {nome, email, idade, empresa, imagem} = req.body
        await connection('usuarios')
            .where('id',id)
            .update({
                id,
                nome, 
                email, 
                idade, 
                empresa,
                imagem
        });
        return res.status(204).send();
    }
}