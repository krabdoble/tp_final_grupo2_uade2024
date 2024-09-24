import { Link } from "react-router-dom";
import "../estilos-pagina/nav.css";

function Navbar(){
     return (
        <div >
        <nav className="d-flex justify-content-center align-item-center">
            <Link className="Link" to='/formproducto'>Producto</Link>
            <Link className="Link" to='/listaproducto'>Los productos</Link>
            <Link className="Link" to='/formproveedor'>Proveedor</Link>
            <Link className="Link" to='/listaproveedor'>Los proveedores</Link>
            <Link className="Link" to='/formcliente'>Cliente</Link>
            <Link className="Link" to='/listacliente'>Los clientes</Link>
            <Link className="Link" to='/catalogoproducto'>Catálogo</Link>
            <Link className="Link" to='/pedido'>Pedido</Link>
            <Link className="Link" to='/reportes'>Reportes</Link>
            
        </nav>
     </div>
     )
}

export default Navbar;