import React, { useEffect, useState } from "react";
import { Livro } from "../../classes/modelo/Livro";
import LinhaLivro from "../../componentes/LinhaLivro";
import Menu from "../../componentes/Menu";


import styles from "../styles/Home.module.css";

const baseURL = "http://localhost:3000/api/livros";

export default function LivroLista() {
  async function obter() {
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const retorno: Livro[] = await dados.json();
    setMeusLivros(retorno);
  }

  const [meusLivros, setMeusLivros] = useState<Livro[]>([
    {
      titulo: "Inserir dados",
      codEditora: 1,
      codigo: 1,
      resumo: "Inserir dados",
      autores: ["Inserir dados"],
    },
  ]);

  useEffect(() => {
    obter();
  }, []);

  return (
    <React.Fragment>
      <Menu />

      <main className="container">
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {meusLivros.map((livro) => {
              return (
                <LinhaLivro
                  key={livro.codigo}
                  livro={livro}
                  excluir={function () {}}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}