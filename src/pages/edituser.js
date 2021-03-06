import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Message,  Notification ,toaster } from 'rsuite';


class Edituser extends Component{

  

    state = {
        username: "",
        passew: "",
        mail: "",
        date: "",
      };
      handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    async componentDidMount(){
        const student_id = this.props.match.params.id;
              //  console.log(student_id);
                const res = await axios.get(`http://127.0.0.1:8000/api/edit-user/${student_id}`)
                if (res.data.status === 200) 
                {
                 this.setState({
                    username: res.data.student.username,
                    passew: res.data.student.passew,
                    mail: res.data.student.mail,
                    date:res.data.student.date,
                  });
                }
            };

      updateuser = async (e) => {
        e.preventDefault();
        const student_id = this.props.match.params.id;
     

      const res = await axios.put(
        `http://127.0.0.1:8000/api/update-user/${student_id}`,
         this.state
       );
       if (res.data.status === 200) {
          console.log(res.data.message);
    
         this.setState({
            
          });
        }
     };
    
      render() {
        const message = (
          <Notification type='warning' header='user upated' closable>
          
        </Notification>)
        return (
          
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4>
                      {" "}
                 edit a user
                      <Link
                        to={"/"}
                        className="btn btn-outline-primary btn-sm float-end"
                      >
                        {" "}
                        back{" "}
                      </Link>
                    </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.updateuser}>
                      <div className="form-group mb-3">
                        <label> user name </label>
                        <input
                          type="text"
                          name="username"
                          onChange={this.handleInput}
                          value={this.state.username}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>passe word</label>
                        <input
                          type="text"
                          name="passew"
                          onChange={this.handleInput}
                          value={this.state.passew}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label> mail </label>
                        <input
                          type="text"
                          name="mail"
                          onChange={this.handleInput}
                          value={this.state.mail}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label> date </label>
                        <input
                          type="date"
                          name="date"
                          onChange={this.handleInput}
                          value={this.state.date}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <button type="submit" onClick={() => toaster.push(<Notification> {message}  </Notification>    , {placement:'topEnd'})} className="btn btn-primary">
                          save
                        </button>
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









export default Edituser 