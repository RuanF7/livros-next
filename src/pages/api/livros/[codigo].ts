/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { controleLivros } from "./index";


export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;
  res.status(200).json(controleLivros.obterLivros(Number(codigo)));
};