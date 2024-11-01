import '../styles/Header.css'

function Header() {
    return (

<header>
    <nav className="menu">
        <button id="nav"><img src="/Group 36.svg" alt="" /></button>

        <a href="#">Inicio</a>
        <a href="#">Coleções</a>
        <a href="#">Contate-nos</a>

        <button id="carrinho">Carrinho</button>
    </nav>
</header>

    )
}

export default Header