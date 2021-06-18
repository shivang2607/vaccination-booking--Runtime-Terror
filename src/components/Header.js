import React from 'react'
import { Link} from 'react-router-dom';
// import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


export const Header = () => {
    return (
        <div>
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to='/v2/registration/certificate/public/download'>COWIN</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            
                           
                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                        </form>
                    </div>
                </nav>
            </>
        </div>
    )
}
