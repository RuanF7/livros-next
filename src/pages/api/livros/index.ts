import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../../classes/controle/ControleLivros"; 
import { Livro } from "../../../../classes/modelo/Livro";


export const controleLivro = new ControleLivro() 
 

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  
  const requestMethod = req.method;

  const { controleLivro, codigo_livro } = JSON.parse(req.body);

  switch (requestMethod) {
    case "POST":
      const novoLivro = new Livro(
        controleLivro.codigo,
        controleLivro.editora,
        controleLivro.titulo,
        controleLivro.resumo,
        controleLivro.autores
      );
      controleLivro.incluir(novoLivro);
      res.status(200).json(controleLivro.obterLivros());
      break;

    case "DELETE":
      controleLivro.excluir(Number(codigo_livro));
      res.status(200).json(controleLivro.obterLivros());
      break;

    default:
      res.status(200).json(controleLivro.obterLivros());
      break;
  }
};