import { NextApiRequest, NextApiResponse } from "next";
import { controleLivros } from "./index";


// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;
  res.status(200).json(controleLivros.obterLivros());
};