import Titulo from "./Titulo";
import Sobre from "./Sobre";

function Header(){

    return(
        <div>
        <header>
     <Titulo titulo={"Evento Senai"} />
     <Sobre />
    </header>
    </div>
    )

}

export default Header;