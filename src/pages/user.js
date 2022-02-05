import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';

 
 class User extends Component{

     render()
     {
         return(
              <div className='container'>
                  <div className='row'>
                      < div className='col-md-12'>
                     <div className='card'>
                         <div className='card-header'>
                             <h4> user
                                <Link to={'adduser'} className='btn btn-outline-primary btn-sm float-end'> add new user </Link>
                             </h4>

                         </div>
                         <div className='card-body'>

                         </div>

                     </div>
                     
                     </div>

                  </div>
              </div>

              
         );
     }

 }
 export default User