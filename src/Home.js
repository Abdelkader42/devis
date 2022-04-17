import React from "react";
import { useNavigate } from "react-router";
class HomeClass extends React.Component {
    constructor(props) {
        super(props);
    }
    navigateTo(url) {
        this.props.navigation(url);
    }
    render () {
        return <>
        <div className="row justify-content-center w-25 mx-auto">
            <img src="./logo.png"></img>
        </div>
        <div className="row justify-content-center w-75 mx-auto">
        <button className="btn btn-primary col-3 align-self-center" onClick={()=>this.navigateTo('/devis-form')}>Faire un Devis </button>
        </div>
        </>
    }
}

function Home(props) {
    const navigation = useNavigate();
  
    return <HomeClass {...props} navigation={navigation} />;
  }

export default Home;