import React from "react";
import Menu from "../Componentes/menu"
import Footer from "../Componentes/footer"
import "../styles/login.css"

function login (){
    return(
        <div>
           
            <br/>

            <div class="card">
                <div class="card-header">
                    Inicio de Sesión 
                </div>
             <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <form class="inicio">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                
                </blockquote>
             </div>
            </div>
            
            <br/>
            <br/>
           <Footer/> 
        </div> 
    );
}

export default login;