import { useNavigate, useParams } from "react-router-dom"
import React,{useState, useEffect} from "react";
import '../styles/user.css';
import Logo from '../assets/logo.png';
import Name from '../assets/unimap_blanco.svg';
import Lupa from '../assets/lupa.png';
import { get } from "../components/Axioss";


export function User(){
    const params= useParams(); //huck
    const navigate= useNavigate(); //huck (antes se llamaba usehistory,donde en esta podes pasarle parametro para no volver atras y no aparesca en el historial o tambien podes pasarle -1, 1 o 2 para moverte hacia adelante o atras en el historial),mover de forma programatica sin LINK
    const[userr, setUsers] = useState({});
    const[userdataG, setDataG] = useState({});    //
    const[userdataC, setDataC] = useState({});    //Estos tres ultimos useState se lo agregue para poder tomar El clima, La operacion, Y el general.
    const[userdataT, setDataT] = useState({});    //
    
    
    const user= /*getUser(*/params.repoid/* )*/ 
    
    const handleBack = () =>{
        navigate("/Machines");
    };

    
    
    
        useEffect(() => {
            get(`${user}`)
            .then(res => {
                setUsers(res.data);
                 setDataC(res.data.data.Clima);     //si lo hago asi anda y puedo llegar a los valores de Clima, Pero solo puedo usar este hook, no puedo usar mas porque  no puedo incluir mas.
                 setDataG(res.data.data.General);   // este ya no me lo toma, por la explicacion de arriba
                 
                 console.log(setDataG);
                 
            });
        },[user]);//[user] para que no me hagaun bucle infinito en la llamada a la api. y solo me la llame nuevamente cuando cambie de ID.
        
    
 
     
     console.log(userr); 
     
    if (!user){
        return <h2>error</h2>
    }
   
    Object.entries(userr).forEach(par =>{    //verificacion Prueba.. no difinitiva
        const clave= par[0];
        const valor= par[1];
        const valor2= "-";
        const valor3= "si";
        if(valor === null || undefined) userr[clave]= valor2; //cambiar typeof
    })

    //Cambiar formate de fecha.
    var date = new Date(userr.last_update);

    const formatDate = (current_datetime)=>{
        let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
        return formatted_date;
    }
    
     // const {Clima}=userr.data ;                      Probando destructuracion  PORQUE CON USERR.DATA.CLIMA se me rompia, .por eso recurri a mas useState.  
      //const {
        //Clima: { Temperatura: bar, Humedad: x },
     // } = userr.data; 


 return(
        
        <div>

        <div className="header">
            <div className="logos">
                 <img className="img1" src={Logo} />
                 <img className="img2" src={Name} />
            </div>
            <div className="container-buscador">
                 <input className="input" onClick={handleBack} placeholder="Maquinas"  />
                 <img className="img3" src={Lupa} />
            </div>
             
              <div className="bola">NN</div>
        </div>

        

        <div className="container-data">
        <div className="container-info">
            <div className="container-title">
                <h1>{userr.description} </h1>
                <p>{user}</p>
            </div>
            <div className="container-info-2">
                <div className="container-50">
                    <div className="container-4">
                        <p className="title-4container">
                            Empresa
                        </p>
                        <p className="text-41container">
                            Prueba S.R.L
                        </p>
                    </div>
                    <div className="container-4">
                        <p className="title-4container">
                            Clase
                        </p>
                        <p className="text-4container">
                        {userr.class}
                        </p>
                    </div>
                    <div className="container-4">
                        <p className="title-4container">
                            Estado
                        </p>
                        <div className="container-bola-text">
                              <div className={String(userr.moving)+"e"}><div className="margin-bola"></div></div>
                                
                        </div>
                       
                    </div>
                    <div className="container-4">
                        <p className="title-4container">
                            Ultima Actualizacion
                        </p>
                        <p className="text-4container">
                       
                            {formatDate(date)}
                        </p>
                    </div>
                </div>
                <div className="container-50">
                      <div className="container-info-3">
                            <div className="container-title-3"> General</div>
                            <div className="conatiner-2-divs-50">
                                <div className="container-50-3-left" >
                                    <p>Cosechand</p>
                                    <p>Bateria Interna</p>
                                    <p>Bateria Vehiculo</p>
                                    <p>Uso Combustible</p>
                                </div>
                                <div className="container-50-3-right">
                                    <p>Hola</p>
                                  {/*<p>{userr.data.General.Secciones}</p>  Ninguno de estos anduvo, son algunos de las sintaxis que probe. Solo me trae datos hasta console.log(userr.data)  */} 
                                  {/*<p>{userr.data[1].Secciones}</p>*/}
                                  {/*<p>{userr.data["General"]}</p>*/}
                                    <p>hola</p>
                                    <p>hola</p>
                                    <p>hola</p>
                                </div>
                            </div>
                      </div>
                      <div className="container-info-3">
                            <div className="container-title-3"> Clima</div>
                            <div className="conatiner-2-divs-50">
                                <div className="container-50-3-left" >
                                    <p>Temperatura</p>
                                    <p>Humedad</p>
                                    <p>Direccion del viento</p>
                                    <p>Velocidad del viento</p>
                                </div>
                                <div className="container-50-3-right">
                                    <p>{userdataC.Temperatura}</p>
                                    <p>{userdataC.Humedad}</p>
                                    <p>{userdataC['Direccion Viento']}</p>
                                    <p>{userdataC['Velocidad Viento']}</p>
                                </div>
                            </div>
                      </div>
                      <div className="container-info-3">
                            <div className="container-title-3"> Operacion</div>
                            <div className="conatiner-2-divs-50">
                                <div className="container-50-3-left" >
                                    <p>Velocidad</p>
                                    <p>Presion</p>
                                    <p>Producto / Hectarea</p>
                                    <p>Ancho</p>
                                </div>
                                <div className="container-50-3-right">
                                    <p>hola</p>
                                    <p>hola</p>
                                    <p>hola</p>
                                    <p>hola</p>
                                </div>
                            </div>
                      </div>
                </div>
              
            </div>
            
            
        </div>
            
    </div>
    </div>
    );
}

