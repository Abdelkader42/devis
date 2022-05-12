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
        <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
        <div className="row justify-content-center w-25 mx-auto">
            <img src="./fts-logo.png"></img>
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