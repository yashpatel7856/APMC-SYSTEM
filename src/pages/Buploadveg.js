import React, { useState } from 'react'
import Bnavbar from '../componantes/Bnavbar'
import axios from 'axios';
import Cookies from 'js-cookie'
import Fnavbar from '../componantes/Fnavbar'
import { useNavigate } from 'react-router-dom';

function Buploadveg() {
    const[vegname,setname]=useState("");
    const[sr,setid]=useState("");
    const[price,setprice]=useState("");
    const[packed,setpacked]=useState("");
    const[stock,setstock]=useState("");
    const[desc,setdesc]=useState("");
    const[seller,setSeller]=useState("");
    const navigate = useNavigate();

    const remove = async () => {
        setname("");
        setid("");
        setprice("");
        setpacked("");
        setstock("");
        setdesc("");
        setSeller("");
    }

    const submitThis = async(e)=>{
        e.preventDefault();
        setSeller()
        try{
            await axios.post('http://localhost:3001/addveg',{vegname,price,packed,stock,desc,seller})
            .then((res)=>{
                if(res.data.success){
                    console.log(res.data)
                    remove();
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
    const rl = Cookies.get('role');
  return (
    <div>
       
     {rl === 'broker' && <Bnavbar/>}
     {rl==='farmer' && <Fnavbar/>}
      <div className="pl-5 pt-2"> 
        <h1>Upload veg.</h1>
      </div>
      <form className="form-horizontal ml-3" onSubmit={submitThis}>
                 <fieldset>
                 {/* <div className="form-group">
                        <label className="col-sm-2" for="textinput">ID </label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="sr" className="form-control"  required value={sr}onChange={(e)=>setid(e.target.value)}/>
                        </div> */}
                    {/* </div> */}
                    <div className="form-group">
                        <label className="col-sm-2" for="textinput">Vegetable Name </label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="Veg. Name" className="form-control"  required value={vegname}onChange={(e)=>setname(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Price(per kg)</label>
                        <div className="col-sm-1 ml-1">
                        <input type="number" placeholder="In Rs." className="form-control"   required value={price}onChange={(e)=>setprice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">packedOn</label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="PackedOn" className="form-control"   required value={packed}onChange={(e)=>setpacked(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Stock(weight in kg)</label>
                        <div className="col-sm-1 ml-1">
                        <input type="number" placeholder="Stock" className="form-control"  required value={stock}onChange={(e)=>setstock(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">village/contact no.</label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="Description" className="form-control"  required value={desc}onChange={(e)=>setdesc(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Seller</label>
                        <div className="col-sm-2 ml-1">
                        <input type="text" placeholder="Sellername" className="form-control"  required value={seller}onChange={(e)=>setSeller(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" >Upload</button>
                        </div>
                        
                        </div>
                    </div>
                 </fieldset>
             </form>

         
    </div>
  )
}

export default Buploadveg