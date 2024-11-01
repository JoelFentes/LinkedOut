import type { NextApiRequest, NextApiResponse } from 'next';
import { Usuario, TipoUsuario } from '../../models/usuario';

type ResponseData = {
  message?: string;
  user?: {
    id: number;
    nome: string;
    email: string;
    tipo: TipoUsuario;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { email, senha, tipo } = req.body;

    try {
      if (!email || !senha || !tipo) {
        return res.status(400).json({ message: 'Dados de login incompletos' });
      }

      // Valida o tipo de usuário
      if (tipo !== TipoUsuario.EMPREGADOR && tipo !== TipoUsuario.EMPREGADO) {
        return res.status(400).json({ message: 'Tipo de usuário inválido' });
      }

      // Tenta realizar o login
      const user = await Usuario.login(email, senha, tipo);

      // Retorna o usuário autenticado
      res.status(200).json({
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          tipo: user.tipo,
        },
      });
    } catch (error) {
      res.status(401).json({ message: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
