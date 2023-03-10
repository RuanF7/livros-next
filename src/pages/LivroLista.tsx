import React from 'react'
import styles from '../styles/Home.module.css'
import livros from './api/livros';

export default function LivroLista ({ livro }) {
  return (
    <div>
      <h1>Olá Mundo</h1>     
        <h3>{livro.titulo}</h3>           
    </div>  
  );
}

export async function baseURL(context) {
  const query = context.query;

  const { codigo } = query;
  
  const livros = await fetch('http://localhost:3000/api/livros/')
  
  const livro = livros.data;

  return {
    props: { livro },
  };

}
