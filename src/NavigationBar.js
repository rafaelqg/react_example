import React from 'react';
import NewUserAccount from './User/NewUserAccount';
class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password:'',
            currentUser: null,
            showCreateNewAccount:false,
            users:[]
        };
        //bind all form fields with change handler
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        //bind all methods with this reference
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.addAccountCallback=this.addAccountCallback.bind(this);

        //React AJAX
        /*
        let promise=window.fetch("http://127.0.0.1:5500/messages.json",{ method: 'GET'});
        promise.then(response => {
            response.json().then(data=>{
                console.log("Data",data);
            });       
        });
        */
        
    }


    handleChangeLogin(event) {
        this.setState({login: event.target.value});//this.setState(partialState); it automatic merge partical state changes
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value}); 
      }


    addAccountCallback(params){
        console.log("Children", params);
        let users=this.state.users;
        if(params.login!=""){
            users.push({"login":params.login, "password":params.password, showCreateNewAccount:false});
            this.setState({"users":users});
        }
    }

    login(){       
        let i=0;
        let found=false;
        while (i<this.state.users.length && !found){
            if(this.state.login===this.state.users[i].login && this.state.password===this.state.users[i].password){
                found=true;
                window.alert("Credentials accepted. Redirecting...");    
                this.setState({currentUser: this.state.users[i].login});//setState automatically refresh component on screen        
            }
            i++;
        }
        if(!found) window.alert("Invalid credentials.");
    }

    logout(){
        this.setState({currentUser: null,showCreateNewAccount: false});
    }
    createAccount(){
        this.setState({showCreateNewAccount: true});
    }

    render() {
       if(this.state.currentUser==null){
        const usersList= this.state.users.map((user) => <li key={user.login}>{user.login}</li>);
        return(
            <div>
                <h2>{this.props.appdescription}</h2>
                Login: <input type="text" value={this.state.login} onChange={this.handleChangeLogin} placeholder="login" />
                Password:<input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="password" />
                <input type="button" value="Enter" onClick={this.login} />
                |
                <button onClick={this.createAccount} >Create an Account</button>
                <br />
                <hr />
                <NewUserAccount show={this.state.showCreateNewAccount} callback={this.addAccountCallback}></NewUserAccount>
                <h2>Users registered:</h2>
                <ul>
                    {usersList}
                </ul>
            </div>
        );
       }else{
            return(
                <div>
                    Hello: {this.state.currentUser}
                    | <input type="button" value="Logout" onClick={this.logout} />
                    <br/>
                    <hr />
                </div>
            );
        }
    }   
}
export default NavigationBar;