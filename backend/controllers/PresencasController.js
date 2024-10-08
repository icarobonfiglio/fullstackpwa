//Importando O 'models' aonde fica os esquemas para Aplicar crud ou regras de negócio
const Presenca = require('../models/Presenca');
//Exportando usando verbo get para resgatar as presenças recebidas pelo sistema
//Função async
//Função await usada para fazer o sistema esperar o sistema estabilizar e receber os dados e depois começar o processo
//depois usando a variável criada'Presenca' junto com a função.find() o sistema ira procurar 'Presenca'
//res json() usado para retornar oque eu procurei pela função .find(),obs: res.json() usado para retornar valores ou strings
//
exports.getAllPresencas = async (req, res) => {
    try {
        const presencas = await Presenca.find();
        res.json(presencas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//Exportando usando verbo create para criar as presenças feitas pelo sistema, resumindo quando o usuário faz uma nova presença
//Função async
//Criando uma variável que guarda os atributos feitos pelo esquema de presença
//criando uma variável para cadastrar uma nova presença ao lado atribuindo como será a nova presença
exports.createPresenca = async (req, res) => {
    const { nome, resumo_aula, mensagem_do_aluno, location, photo } = req.body;
    const newPresenca = new Presenca({ nome, resumo_aula, mensagem_do_aluno, location, photo });

    try {
        //Função await usada para fazer o sistema esperar o sistema estabilizar e receber os dados e depois começar o processo
        const savePresenca = await newPresenca.save();
        res.status(201).json(savedPresenca);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
//Exportando usando verbo update para colocar(upar) dentro do sistema as novas presenças cadastradas
//Função async
//Função await usada para fazer o sistema esperar o sistema estabilizar e receber os dados e depois começar o processo
//Criando como o sistema procura pela nova presença cadastrada(pelo id)
//Usando função .findByIdAndUpdate que procura pelo id da nova presença cadastrada e guarda dentro do sistema
//dentro da função .findByIdAndUpdate(req de requisição pedir ao sistema = req.params.id, req.body = dados do frontend, {new : true})
exports.updatePresenca = async (req, res) => {
    try {
        const updatedPresenca = await Presenca.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPresenca);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
//Exportando usando verbo delete para deletar presenças cadastradas
//Função async
//Função await usada para fazer o sistema esperar o sistema estabilizar e receber os dados e depois começar o processo
//Usando função .findByIdAndDelete para procurar pelo id da presença a ser deletada e deleta
//.findByIdAndDelete(req de requisição.params.id)
exports.deletePresenca = async (req, res) => {
    try {
        await Presenca.findByIdAndDelete(req.params.id);
        res.json({ message: 'Presenca deletada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
