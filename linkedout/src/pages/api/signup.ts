// pages/api/signup.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { Candidato } from '../../models/empregado';
import { Empregador } from '../../models/empregador';
import { TipoUsuario } from '../../models/usuario'; // Certifique-se de que esse caminho está correto
import md5 from 'md5';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nome, email, senha, tipo, cpfcnpj, curriculo } = req.body; // Inclua o curriculo

    try {
      // Validação básica
      if (!nome || !email || !senha || !tipo || (tipo === TipoUsuario.EMPREGADO && !curriculo)) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
      }

      // Criptografando a senha
      const hashedSenha = md5(senha);

      let usuario;

      if (tipo === TipoUsuario.EMPREGADOR) {
        usuario = await Empregador.create({ nome, email, senha: hashedSenha, cpfcnpj });
      } else if (tipo === TipoUsuario.EMPREGADO) {
        usuario = await Candidato.create({ nome, email, senha: hashedSenha, penalizacao: 0, curriculo }); // Passando o curriculo
      } else {
        return res.status(400).json({ message: "Tipo de usuário inválido." });
      }

      return res.status(201).json(usuario);
    } catch (error) {
      console.error("Erro ao criar o usuário:", error); // Log do erro detalhado
      return res.status(500).json({ message: "Erro ao criar o usuário.", error: error.message }); // Incluindo a mensagem de erro
    }
  } else {
    // Método não permitido
    return res.status(405).json({ message: "Método não permitido." });
  }
}
