import React, { Component } from 'react';
import './Navbar.css';

var style = {
	height: "1px"
};

function handleClick(e) {
	e.preventDefault();
	console.log('The link was clicked.');
}
	
class Navbar extends Component {

  render() {
    return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<i className="icon-menu"></i> Menu
						</button>
						<a className="navbar-brand" href=""><i>Totalsms</i></a>
					</div>
					<div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false" style={style}>
						<ul className="nav navbar-nav">
							<li className="dropdown">
								<a href="" className="dropdown-toggle" data-toggle="dropdown" title="Inicio">Inicio <b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" onClick={handleClick}><i className="icon-list"></i>Bitacora Monitoreo</a>
									</li>
								</ul>
							</li>		
							<li className="dropdown">
								<a href="" className="dropdown-toggle" data-toggle="dropdown" title="Administracion">Administracion <b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" onClick={handleClick}><i className="icon-list"></i>Clientes</a>
									</li>
									<li>
										<a href="#" onClick={handleClick}><i className="icon-list"></i>Servidores</a>
									</li>				
								</ul>
							</li>
							<li className="dropdown">
								<a href="" className="dropdown-toggle" data-toggle="dropdown" title="Estadisticas">Estadisticas <b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" onClick={handleClick}><i className="icon-list"></i>Total SMS por servidor</a>
										<a href="#" onClick={handleClick}><i className="icon-list"></i>Total SMS por cliente</a>
									</li>
								</ul>
							</li>			
							<li className="dropdown">
								<a href="" className="dropdown-toggle" data-toggle="dropdown" title="Seguridad">Seguridad <b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" onClick={handleClick}><i className="icon-list"></i>Usuarios</a>
									</li>
								</ul>
							</li>
						</ul>
						<div className="nav navbar-nav navbar-right logout">
							<p className= "user"><b>Javier Martin (Administrador)</b></p>&nbsp;<a href="../../login.html" title="Contacta el equipo TotalTexto">(Salir)</a>
						</div>
					</div>
				</div>
			</nav>		
    );
  }
}

export default Navbar;
