import React, { Component } from 'react';
import UserServices from '../services/UserServices';
class UserListComponents extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
        this.addUser = this.addUser.bind(this);
        this.editUser=this.editUser.bind(this);
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    editUser(id){
        this.props.history.push('/update-user/${id}')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Phone List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User NID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>User Alias</th>
                                <th>Primary Group</th>
                                <th>Secondary Group</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key ={user.id}>
                                        <td>{user.nid}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.userAlias}</td>
                                        <td>{user.primaryGroup}</td>
                                        <td>{user.secoundaryGroup}</td>
                                        <td>
                                            <button onClick={ () =>this.editUser(user.id)} className="btn btn-info">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserListComponents;