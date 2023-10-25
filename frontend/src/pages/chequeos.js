import React from "react";
import Menu from "../Componentes/menu";
import Footer from "../Componentes/footer";
import Images from "../Componentes/imagesinput";
import '../styles/chequeos.css';

function Chequeos (){
    return(
        <div className="global ">
            <Menu/>
            <div className="body p-4">
            

            <h3 class="titulo">Guía para legalización</h3>
            <br/>
            <div class="centrales ms-2">
                <p class="d-block col-md-6">
                <a class="btn btn-primary" style={{backgroundColor: "blueviolet"}} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                ¿Qué es la legalización?
                </a>

                <div class="collapse" id="collapseExample">
                <div class="card card-body">
                        <div class="list-group" style={{width:"420px"}} >
                        <h7 class="list-group-item list-group-item-action active" aria-current="true">
                          La legalización:
                        </h7>
                        <p class="Informacion list-group-item-action" style={{color:"black"}}>La legalización consiste en certificar la autenticidad de la firma de los funcionarios públicos o agentes diplomáticos en ejercicio de sus funciones y la calidad en que hayan actuado, la cual deberá estar registrada en la base de datos del Ministerio de Relaciones Exteriores, para que el documento sea válido y surta efectos legales en otro país que no se encuentre en el Convenio de la supresión de la exigencia de la legalización.</p>
                       
                    </div>
                </div>
                </div>

            
                <br/>
                <br/>
                <h3>Regularizacion migratoria</h3>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse" style={{backgroundColor:"blueviolet"}}>
                ¿Cómo legalizarse en el país?
                </button>
                </p>
                

                <div class="collapse" id="collapse2">
                <div class="card card-body">
                        <div class="list-group" style={{width:"600px"}}>
                        <p style={{backgroundColor: "blueviolet", color: "white"}}>
                            Pasos para legalizarse en Colombia:
                        </p>
                        <p class="list-group-item list-group-item-action">Los trámites para que una persona pueda acceder a una condición migratoria regular en Colombia se hacen en el Ministerio de Relaciones Exteriores o en Migración Colombia. Recuerde que las gestiones con Migración Colombia pueden ser realizadas de manera virtual, son gratuitos y no necesita intermediarios. </p>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" style={{backgroundColor: "blueviolet"}}>
                Permiso de ingreso y permanencia - PIP
                </button>
                <div class="collapse" id="collapse3">
                <div class="card card-body">
                    <p>
                    Es la autorización expedida por Migración Colombia, al extranjero de cualquier nacionalidad que no requiera Visa. La autoridad migratoria estampa un sello en el pasaporte, donde consta el ingreso (fecha del ingreso, días de permanencia autorizados y tipo de ingreso), que será de noventa (90) días consecutivos, prorrogables, por noventa (90) días más, hasta completar un máximo de 180 días por año calendario.

                    Para obtener este permiso es necesario cumplir con los siguientes requisitos:

                    Pasaporte vigente y legible
                    Recursos para su estadía en el territorio nacional
                    Tiquete de regreso
                    Se debe solicitar de forma presencial en el Puesto de Control Migratorio de Migración Colombia. Tenga en cuenta que permite ejercer únicamente la actividad otorgada mediante el PIP.



                    </p>
                </div>
                </div>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" style={{backgroundColor: "blueviolet"}}>
                Tarjeta de movilidad fronteriza-TMF
                </button>
                <div class="collapse" id="collapse4">
                <div class="card card-body">
                    <p>
                    Documento que permite Ingresar y transitar libremente por zonas fronterizas, estudiar primaria o secundaria; realizar turismo en zonas de frontera, visitar familiares y comprar de medicamentos. No permite ingresar al interior del país, vivir en Colombia o afiliarse al sistema de salud.



                    </p>
                </div>
                </div>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6" style={{backgroundColor: "blueviolet"}}>
                Permiso de Ingreso y Permanencia de Tránsito Temporal (PIP-TT)
                </button>
                <div class="collapse" id="collapse6">
                <div class="card card-body">
                    <p>
                    Está dirigido a ciudadanos extranjeros de cualquier nacionalidad que pretendan transitar dentro del territorio colombiano con el fin de hacer conexiones o escalas para abordar algún medio de transporte marítimo, terrestre, aéreo o fluvial, para retornar a su país de origen o hacia un tercer país, sin el ánimo de establecerse o domiciliarse en Colombia, por el término de 15 días calendario, no prorrogables.

                    Los extranjeros que ingresen dentro del territorio colombiano presentando documento de identificación diferente al pasaporte y pretendan hacer uso del PIP-TT deberán identificarse con la Tarjeta Migratoria Electrónica durante el término de tránsito y presentarla a su salida del país ante el Puesto de Control Migratorio.

                    Mi Permiso de Ingreso y Permanencia está a punto de vencer. ¿Qué puedo hacer? 
                    Respuesta: Puede solicitar un Permiso Temporal de Permanencia (PTP) o una visa.

                    ¿Qué es un Permiso Temporal de Permanencia (PTP)? 
                    Respuesta: Es un permiso que expide Migración Colombia para los extranjeros que quieran extender su permanencia en Colombia, siempre y cuando no haya excedido el tiempo de su Permiso de Ingreso y Permanencia (PIP). Tiene una vigencia de noventa (90) días. Se puede solicitar en el portal web de Migración Colombia.

                    Este permiso tiene un costo y exige que la persona tenga una reserva de transporte aéreo o terrestre a su país de origen.

                    ¿Qué pasa si se vence el Permiso Temporal de Permanencia (PTP)? 
                    Respuesta: Usted automáticamente queda en permanencia irregular y podrá ser sancionado por las autoridades.


                    </p>
                </div>
                </div>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7" style={{backgroundColor: "blueviolet"}} >
                Permiso por Protección Temporal
                </button>
                <div class="collapse" id="collapse7">
                <div class="card card-body">
                    <p>
                    Anteriormente, el Estado colombiano contaba con diversos acuerdos de estancia con enfoque diferencial para la población venezolana que se encontraban en el territorio, dentro de los que se encontraban el Permiso Especial de Permanencia (PEP), el PEP-RAMV y el Permiso Especial de Permanencia para el Fomento de la Formalización (PEPFF). No obstante, el gobierno nacional a través del Decreto 216 de 2021 del 1 de marzo de 2021 crea el Estatuto Temporal de Protección para Migrantes Venezolanos Bajo Régimen de Protección Temporal como un mecanismo jurídico de protección temporal dirigido a la población migrante venezolana. En este sentido, como parte del Estatuto Temporal de Protección, el Estado Colombiano ha determinado la creación de un Registro Único de Migrantes Venezolanos (RUMV), a través del cual se podrá optar al Permiso por Protección Temporal.

                    ¿Quiénes pueden acceder al PPT?
                    ·       Venezolanos en situación migratoria regular, con algunos de estos documentos vigentes: PIP, PTP, PEP, PEP-FF.

                    ·       Venezolanos con salvoconducto SC-2, que estén en trámite del reconocimiento de la condición de refugiado.

                    ·       Venezolanos en condición migratoria irregular, que hayan ingresado al país antes del 31 de enero de 2021.

                    ·       Venezolanos que ingresen a Colombia por un puesto de control migratorio entre el 31 de enero de 2021 y el 28 de mayo de 2023.

                    ¿Por qué es importante que me registre para obtener un PPT?
                    Con el Permiso por Protección Temporal, podrás regularizar tu situación migratoria en Colombia,  lo cual te permitirá acceder a salud, educación trabajo formal, servicios financieros y demás ofertas de las instituciones nacionales. Así mismo, tendrás la posibilidad de convalidar títulos, entrar y salir del territorio colombiano, y sumar tiempo para obtener visa de residente, entre otros.


                    </p>
                </div>
                </div>

                

            



                        
                        
                    </div>
                </div>
                </div>+
            </div>  
            
            <div class="list-group ">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" style={{backgroundColor: "blueviolet"}}>
                Documentos
                </button>
                <div class="collapse" id="collapse4">
                <div class="card card-body">
                    <p>
                    aca colocar documentos


                    </p>
                    
                    <Images/>
                    <a href="documentos" class="list-group-item list-group-item-action">Seguimiento de documentos:</a>
                </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Chequeos;