import Fnavbar from "../componantes/Fnavbar"
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/style.css'
import axios from "axios"
import { useState } from 'react';
import farmContext from '../context/ycontext';
import { useContext } from 'react';
import Cookies from 'js-cookie';

function Fuploadveg() {

    const navigate = useNavigate();
    const submitThis = async(e)=>{
        e.preventDefault();

        try{
            await axios.post('http://localhost:3001/addveg')
            .then((res)=>{
                if(res.data.success){
                  
                }
            })
            .catch((err)=>{
                console.log(err);
            }) 
        }
        catch(error){
            console.log(error);
        }

    }

  return (
    <div>
      <>
      <Fnavbar/>
      <div className="pl-5 pt-2"> 
        <h1>Upload veg.</h1>
      </div>
      <form className="form-horizontal ml-3" onSubmit={submitThis}>
                 <fieldset>
                    <div className="form-group">
                        <label className="col-sm-2" for="textinput">Vegetable Name </label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="Veg. Name" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Quantity</label>
                        <div className="col-sm-1 ml-1">
                        <input type="number" placeholder="in Kg" className="form-control"   required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Seller</label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="village" className="form-control"   required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">expected price</label>
                        <div className="col-sm-1 ml-1">
                        <input type="text" placeholder="price" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Packaged On</label>
                        <div className="col-sm-1 ml-1">
                        <input type="date" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Best Before</label>
                        <div className="col-sm-1 ml-1">
                        <input type="date" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group" style="width:100%">
                        <label className="col-sm-2 control-label" for="textinput">Description</label>
                        <div className="col-sm-1 ml-1">
                        <input type="text" placeholder="description" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group" style="width:100%">
                        <div className="col-sm-offset-2 col-sm-8">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" >Uplaod</button>
                        </div>
                        
                        </div>
                    </div>
                 </fieldset>
             </form>

          <div className=" bg-secondary text-white">
             <hr/>
             <h3 className="ml-4">Recently Uploaded Veg</h3>
             <hr/>
          </div>
          <div className="table container">
          <table class="table">
             <thead>
                <tr>
                 <th scope="col">Date</th>
                 <th scope="col">Time</th>
                 <th scope="col">Veg name</th>
                 <th scope="col">Veg weight</th>
                 <th scope="col">Approx price</th>
                 <th scope="col">Offers</th>
                 <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               
                <td scope="row" id="date">10/07/22</td>
                <td id="time">11.45 AM</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="offer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
                </svg></td>
                <td id='delete'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg></td>
            </tr>
            <tr>
            <td scope="row" id="date">10/07/22</td>
                <td id="time">11.45 AM</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="offer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
                </svg></td>
                <td id='delete'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg></td>
            </tr>
            <tr>
            <td scope="row" id="date">10/07/22</td>
                <td id="time">11.45 AM</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="offer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/>
                </svg></td>
                <td id='delete'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg></td>
            </tr>
           </tbody>
          </table>
         </div>
      </>
    </div>
  )
}

export default Fuploadveg
