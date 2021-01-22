import React, { Component } from 'react';
import UserServices from '../services/UserServices';

class AddUser extends Component {
    constructor(props){
        super(props)

        this.state = {
            unid:'',
            firstName:'',
            lastName:'',
            email:'',
            userAlias:'',
            primaryGroup:'',
            secondaryGroup:''
        }
        this.changeUserNidHandler=this.changeUserNidHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeUserAliasHandler=this.changeUserAliasHandler.bind(this);
        this.changePrimaryGroupHandler=this.changePrimaryGroupHandler.bind(this);
        this.changeSecondaryGroupHandler=this.changeSecondaryGroupHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);

    }   

    saveUser=(e)=>{
        e.preventDefault();
        let user={userNid:this.state.userNid ,firstName:this.state.firstName,lastName:this.state.lastName,
            userAlias:this.state.userAlias,email:this.state.email,primaryGroup:this.state.primaryGroup, 
            secondaryGroup:this.state.secondaryGroup
        };
        console.log('User=>'+JSON.stringify(user));
        UserServices.createUser(user).then(res=>{
            this.props.history.push('/users')
        })
    }

    changeUserNidHandler=(event)=>{
        this.setState({userNid:event.target.value});
    }
    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});
    }
    changeUserAliasHandler=(event)=>{
        this.setState({userAlias:event.target.value});
    }
    changePrimaryGroupHandler=(event)=>{
        this.setState({primaryGroup:event.target.value});
    }
    changeSecondaryGroupHandler=(event)=>{
        this.setState({secondaryGroup:event.target.value});
    }
    cancel(){
        this.props.history.push('/users');
    }
    render() {
        return (
            <div>
                 <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>User NID:</label>
                                        <input placeholder="User NID" name="userNid" className="form-control"
                                          value={this.state.userNid} onChange={this.changeUserNidHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                          value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                          value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                          value={this.state.email} onChange={this.changeEmailHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>User Alias:</label>
                                        <input placeholder="User Alias" name="userAlias" className="form-control"
                                          value={this.state.userAlias} onChange={this.changeUserAliasHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Primary Group:</label>
                                        <input placeholder="Primary Group" name="primaryGroup" className="form-control"
                                          value={this.state.primaryGroup} onChange={this.changePrimaryGroupHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Secondary Group:</label>
                                        <input placeholder="Secondary Group" name="secondaryGroup" className="form-control"
                                          value={this.state.secondaryGroup} onChange={this.changeSecondaryGroupHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>    
                <br></br>         
            </div>

        );
    }
}

export default AddUser;