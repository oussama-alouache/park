import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
 class Adduser extends Component{
 state ={
     username :'',
     passw :'',
     mail:'',
     date:'',

 }
 handleInpu=(e) =>{
     this.setState({
         [e.traget.username] : e.target.username,
         [e.traget.passw] : e.target.passw,
         [e.traget.mail] : e.target.mail,
         [e.traget.date] : e.target.date



     });
 }
 saveuser =(e) =>{
     e.preevntDefault();
     const res = await axios.post ("/api/add-user",this.state);
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
                                        <input type="text"  name='username'  onChange={this.handleInput} value={this.state.username} className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> user name </label>
                                        <input type="text"  name='passew'  onChange={this.handleInput} value={this.state.passw} className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> user name </label>
                                        <input type="text"   name='mail' onChange={this.handleInput} value={this.state.mail}  className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> user name </label>
                                        <input type="text"  name='date'onChange={this.handleInput} value={this.state.date} className='form-control'/>

                                    </div>
                                    <div className='form-group mb-3'>
                                    
                                    <button type="submit" class="btn btn-primary">save</button>
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
 export default Adduser