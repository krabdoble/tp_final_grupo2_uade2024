import { Link } from "react-router-dom";
import "../estilos-pagina/nav.css";

function Navbar(){
     return (
        <div >
        <nav className="d-flex justify-content-center align-item-center">
            <Link className="Link" to='/listaproducto'>PRODUCTO</Link>
            <Link className="Link" to='/formproveedor'>PROVEEDOR</Link>
            <Link className="Link" to='/formcliente'>CLIENTE</Link>
            <Link className="Link" to='/catalogoproducto'>CATÁLOGO</Link>
            <Link className="Link" to='/pedido'>PEDIDO</Link>
            <Link className="Link" to='/reportes'>REPORTES</Link>
            
        </nav>
     </div>
     )
}

export default Navbar;