import React,{ useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import '../styles/style.css';
import Logo from '../assets/logo.png';
import Name from '../assets/unimap_blanco.svg';
import Lupa from '../assets/lupa.png';
import '../efecto.js';
import { get } from "../components/Axioss";

export function Home(){
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? ""; //para que quede en la url y si refrescas quede
    const[maquinas, setMaquinas] = useState([]);
    
    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value})
    }
   
    useEffect(() => {
        get(`?q=${filter}`)
        .then(res => {
            
            setMaquinas(res.data);
            
        });
        
    },[filter]);
    
    

     function renderMaquinas(repo){
        return(
            
            <li className="row" key={repo.id}>
            <h2 className="repo-id">
                <div className="id-numero">({repo.id})</div>
                <Link className="name-link" to={"/machines/" + repo.id}>{repo.description} </Link> 
                <span className={String(repo.working)} ></span> {/*PONGO WORKING PORQUE MOVING NO APARECE EN LA LLAMDA A LA API*/}
            </h2>
             
        </li>
        )
    }

     
    return(
        
        <div className="container">
        <div className="header">
            <div className="logos">
                 <img className="img1" src={Logo} />
                 <img className="img2" src={Name} />
            </div>
            <div className="container-buscador">
                 <input className="input"  value={filter} placeholder="Maquinas" onChange={handleFilter} />
                 <img className="img3" src={Lupa} />
            </div>
             
              <div className="bola">NN</div>
        </div>
                
                
            
            <ul className="result-container">
            {maquinas.filter((user) => {//para agarrar cada uno de las maquinas, por cada uno de los elementos si el if retorna true el elemnto se mantiene, pero si es falso se elimina del listado del filter 
            if (!filter ) return true; //no lo da

            const name = user.description.toLocaleLowerCase();
           // const id = user.id;
            return name.includes(filter.toLocaleLowerCase())// si el filtro contiene un nombre o parte de el lo da.
            
            }).slice(0,5).map(renderMaquinas)}
            </ul> 
    </div>

        
    )
}
