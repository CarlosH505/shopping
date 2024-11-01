import { useEffect, useState } from "react";
import Header from "../components/Header";
import '../styles/products.css'

function Products() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        const arquivos = async () => {
            const resposta = await fetch(" https://fakestoreapi.com/products")
            const json = await resposta.json()
            setproducts(json)
        }
        arquivos()
    }, [])

    return ( 
        <>
            <Header/>

            <h1>PRODUCTS</h1>
           <nav>
           <input type="search" id="pesquisa"/>
           </nav>
            

            {/* <aside className="products">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
            </aside> */}

            <main>

             

                {products.map((product) => (
                    <>
                        <span>
                            {product.title}
                        </span>
                        <img className="img-products" src={product.image} alt="" />
                    </>
                )
                )}
            </main>
        </>
    )
}
export default Products;