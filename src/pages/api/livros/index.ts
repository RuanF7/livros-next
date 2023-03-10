import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../../classes/controle/ControleLivros"; 


export const controleLivro = new ControleLivro() 
 

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(controleLivro.obterLivros())

};