import React from 'react';
import NewUserAccount from './User/NewUserAccount';
class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password:'',
            userId: null,
            showCreateNewAccount:false
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
        let promise=window.fetch("http://127.0.0.1:5500/messages.json",{ method: 'GET'});
        promise.then(response => {
            response.json().then(data=>{
                console.log("Data",data);
            });       
        });

        
    }


    handleChangeLogin(event) {
        this.setState({login: event.target.value});//this.setState(partialState); it automatic merge partical state changes
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value}); 
      }


    addAccountCallback(params){
        console.log("Children", params);
    }

    login(){
        let mockUserName="admin";
        let mockPassword="123";

        if(this.state.login===mockUserName && this.state.password===mockPassword){
            window.alert("Credentials accepted. Redirecting...");
            this.setState({userId: 1});//setState automatically refresh component on screen
        }else{
            window.alert("Invalid credentials.");
        }
    }

    logout(){
        this.setState({userId: null});
    }
    createAccount(){
        this.setState({showCreateNewAccount: true});
    }

    render() {
       let userId=this.state.userId;
       if(userId==null){
        return(
            <div>
                Login: <input type="text" value={this.state.login} onChange={this.handleChangeLogin} placeholder="login" />
                Password:<input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="password" />
                <input type="button" value="Enter" onClick={this.login} />
                |
                <button onClick={this.createAccount} >Create an Account</button>
                <br />
                <hr />
                <NewUserAccount show={this.state.showCreateNewAccount} callback={this.addAccountCallback}></NewUserAccount>
            </div>
        );
       }else{
            return(
                <div>
                    Hello: {this.props.username}
                    | <input type="button" value="Logout" onClick={this.logout} />
                    <br/>
                    <hr />
                </div>
            );
        }
    }   
}
export default NavigationBar;