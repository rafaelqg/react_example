import React from 'react';
class NewUserAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password:'',
            show: props.show, // props are read only, then it we set that in state to be handled
            parentCallback:props.callback
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    /*
    //deprecated, using componentDidUpdate instead
    componentWillReceiveProps(nextProps) {
        console.log("Update props:", nextProps);
        this.setState({ show: nextProps.show });  
      }
      */

    //called when a parent change child state based its props.
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.show !== this.props.show){
            this.setState({ show: this.props.show }); 
        }
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});//this.setState(partialState); it automatic merge partical state changes
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value}); 
      }


    createAccount(){
        this.state.parentCallback(this.state);
        this.setState({show:false});
        
    }

    cancel(){
        this.setState({show:false});
    }

    render() {
        if(this.state.show){
            return(
                <div>
                    <fieldset>
                            <legend> New User Account </legend>
                            <label >Login</label>: <br/>
                            <input type="text" id="login" value={this.state.login} onChange={this.handleChangeLogin} placeholder="login" />
                            <br />
                            <label>Password</label>: <br/>
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="password" />
                            <br/>
                            <button onClick={this.createAccount} >Create an Account</button>
                            <button onClick={this.cancel} >Cancel</button>
                    </fieldset>
                </div>
            );
        }else{
            return(<span></span>);
        }
    }   
}
export default NewUserAccount;