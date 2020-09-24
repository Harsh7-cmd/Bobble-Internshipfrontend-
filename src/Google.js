import React, { Component } from 'react'

import GoogleLogin from 'react-google-login';



export class Google extends Component {

  constructor(props) {

    super(props);

    this.state = {

    };

  }

  signup(res) {

  /*  const googleresponse = {

      Name: res.profileObj.name,

      email: res.profileObj.email,

      token: res.googleId,


      ProviderId: 'Google'

    };*/


   

};

  render() {

    const responseGoogle = (response) => {

      console.log(response);

      var res = response.profileObj;

      console.log(res);

      debugger;

      this.signup(response);

    }

    return (

      <div className="App">

        <div className="row">

          <div className="col-sm-12 btn btn-info">


            </div>

        </div>

        <div className="row">

          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">

            <div className="col-sm-4"></div>

            <div className="col-sm-4">

              <GoogleLogin 

                clientId="822423369778-sh6ac70id2surlo1kgl37ca84rqgie0q.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

            </div>

            <div className="col-sm-4"></div>

          </div>

        </div>

      </div>

    )

  }

}

export default Google