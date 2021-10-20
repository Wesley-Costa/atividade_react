const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res){
        const id = crypto.randomBytes(4).toString('hex')
        const {nome, email, idade, empresa} = req.body
        await connection('users').insert({
            id,
            nome,
            email,
            idade,
            empresa
        });
        console.log(id)
        res.json();
    },
    
    async list(req, res){
        const users = await connection('users').select('*');
        res.json(users);
    },

    async show(req,res){
        const {id} = req.params;
        const user = await connection('users')
                    .where('id', id)
                    .select('*');
        return res.json(user);
    },

    async delete(req,res){
        const {id} = req.params;
        await connection('users').where('id', id).delete();
        return res.status(204).send();
    }


}