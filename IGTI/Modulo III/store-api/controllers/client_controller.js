import ClientService from '../services/client.service.js';

async function createClient(req, res, next){
    try{    
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || !client.Address){
            throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.")
        }
        
        res.send(await ClientService.createClient(client));
        logger.info(`POST /client - ${JSON.stringify(client)}`);
    }catch(err){
        next(err);
    }
    
}

async function getClients(req, res, next){
    try{
        res.send(await ClientService.getClients());
        logger.info(`GET /client`);
    }catch(err){
        next(err);
    }
}

export default {
    createClient,
    getClients
}