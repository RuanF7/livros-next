import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "../../../../classes/controle/ControleEditora";


export const controleEditora = new ControleEditora() 
 

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(controleEditora.getEditoras())

};