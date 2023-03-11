import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../../classes/controle/ControleLivros"; 
import { Livro } from "../../../../classes/modelo/Livro";


export const controleLivros = new ControleLivro() 
 

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  
  const requestMethod = req.method;

  const { livro, codigo } = JSON.parse(req.body);

  switch (requestMethod) {
    case "POST":
      const novoLivro = new Livro(
        livro.codigo,
        livro.codEditora,
        livro.titulo,
        livro.resumo,
        livro.autores
      );
      controleLivros.incluir(novoLivro);
      res.status(200).json(controleLivros.obterLivros());
      break;

    case "DELETE":
      controleLivros.excluir(Number(codigo));
      res.status(200).json(controleLivros.obterLivros());
      break;

    default:
      res.status(200).json(controleLivros.obterLivros());
      break;
  }
};