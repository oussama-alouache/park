import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Message, toaster } from 'rsuite';

// or
import Message from 'rsuite/Message';
import toaster from 'rsuite/toaster';
 class Adduser extends Component{
 state ={
     username :'',
     passw :'',
     mail:'',
     date:'',

 }
 handleInput=(e) =>{
     this.setState({
        [e.target.name]: e.target.value,
    



     });
 }
     saveuser = async(e) =>{
   e.preventDefault();

   const res = await axios.post("http://127.0.0.1:8000/api/add-user",this.state);
     if(res.data.status === 200)
     { 
         console.log (res.data.message);
    
         this.setState({
            username :'',
            passw :'',
            mail:'',
            date:'',
         });

        }
 }

     render()
     {
         return(
              <div className='container'>
                  <div className='row'>
                      < div className='col-md-12'>
                     <div className='card'>
                         <div className='card-header'>
                             <h4>  add a user
                                <Link to={'/'} className='btn btn-outline-primary btn-sm float-end'> back </Link>
                             </h4>

                         </div>
                         <div className='card-body'>
                             <form onSubmit={this.saveuser }>
                                    <div className='form-group mb-3'>
                                        <label> user name </label>
                                        <input type="text"  name='username'onChange={this.handleInput} value={this.state.username} className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>passe word</label>
                                        <input type="text"  name='passew' onChange={this.handleInput} value={this.state.passw} className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> mail </label>
                                        <input type="text"   name='mail'onChange={this.handleInput} value={this.state.mail}  className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> date </label>
                                        <input type="date"  name='date'onChange={this.handleInput} value={this.state.date} className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                    
                                    <button type="submit"  className="btn btn-primary">save</button>
                                    </div>
                             </form>

                         </div>

                     </div>
                     
                     </div>

                  </div>
              </div>

              
         );
     }

 }
 export default Adduser;