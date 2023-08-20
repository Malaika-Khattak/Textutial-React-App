import React from 'react'
import PropTypes from 'prop-types'





export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${(props.mode==="light")?"light":(props.mode==="red")?"dark":"dark"} bg-${props.mode==="light"?"light":"dark"} `}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <p className='mx-5'></p>
                        <p className='mx-5'></p>
                        <p className='mx-5'></p>
                        <p className='mx-5'></p>
                        <p className='mx-4'></p>
                        {/*{<li className="nav-item">
                            <Link className="nav-a" to={'/about'}>{props.abouttext}</Link>
                        </li>}*/}
                    </ul>
                    {/*}
                   <form className="d-flex" role="search">
                        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>*/}
                    
                    <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.purtoggle} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Purple Mode</label>
                    </div>
                    <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.grtoggle} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
                    </div>
                    <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.redtoggle} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}
Navbar.proptype = {
    title: PropTypes.string,
    abouttext: PropTypes.string
}
Navbar.defaultProps = {
    title: "set title here",
    abouttext: "About us here"
}