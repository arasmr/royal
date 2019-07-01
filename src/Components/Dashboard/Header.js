import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="container-fluid" color="light" >
                <div className="row">
                    <div className="col-12 p-4">
                        <img src="https://www.royalspijkenisse.nl/wp-content/uploads/2017/10/logo-royal-web-v3.png" width="20%" alt="royal-logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;