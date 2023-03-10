import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/controle/ControleEditora';
import { controleEditora } from './index';

const editoras = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {


  const { codEditora } = req.query;
  try {
    res.status(200).json(editoras.getNomeEditora(Number(codEditora)));

  } catch (error) {

    return {
      editoras
    }
  }
};

