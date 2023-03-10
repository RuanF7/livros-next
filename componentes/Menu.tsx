import Link from "next/link"

export default function Menu() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-collapse">
        <Link className="navbar-brand" href='/index'>Home</Link>
        <Link className="navbar-brand" href='/LivroLista'>Catálogo</Link>
        <Link className="navbar-brand" href='/LivroDados'>Novo</Link>
      </div>

    </nav>
  )
}