import Link from "next/link"


export default function Menu() { 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark br-dark">
      <Link href='/index'>Home</Link>
      <Link href='/LivroLista'>Catálogo</Link>
      <Link href='/LivroDados'>Novo</Link>

    </nav>
  )
}