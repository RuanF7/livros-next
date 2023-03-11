import React from 'react'
import styles from '../styles/Home.module.css'
import livros from './api/livros';

/* &&& */
import { Livro } from '../../classes/modelo/Livro';



export default function LivroLista (livro: Livro) {
  
  return (
    <div>
      <h1>Olá Mundo</h1>     
      <h3>{livro.codigo}</h3>
      <h3>{livro.codEditora}</h3> 
      <h3>{livro.titulo}</h3> 
      <h3>{livro.resumo}</h3> 
      <h3>{livro.autores}</h3>            
    </div>  
  );
}

async function BuscaLivros(){
  const retorno = await fetch('http://localhost:3000/api/livros/').catch()
}

async function ExcluirLivros(){
  const retorno = await fetch('http://localhost:3000/api/livros/').catch()
}
