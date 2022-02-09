import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    students: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/students");
    console.log(res);
    if (res.data.status === 200) {
      this.setState({
        students: res.data.students,
        loading: false,
      });
    }
  }
  render() {
  var student_HTMLTABLE =[]

    if (this.state.loading) {
      student_HTMLTABLE = <tr><td colSpan="7"> <h2> loading data..</h2> </td></tr>
      
    } else {
        student_HTMLTABLE = this.state.students.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.passew}</td>
            <td>{item.mail}</td>
            <td>{item.date}</td>
            <td>
              <Link
                to={`edituser/${item.id}`}
                className="btn btn-success btn-sm"
              >
                Edit
              </Link>
            </td>
            <td>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  {" "}
                  user
                  <Link
                    to={"adduser"}
                    className="btn btn-outline-primary btn-sm float-end"
                  >
                    {" "}
                    add new user{" "}
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>USER NAME</th>
                      <th>PASSEWORD</th>
                      <th>Email</th>
                      <th>DATR</th>
                      <th>EDITE</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody>{student_HTMLTABLE}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
