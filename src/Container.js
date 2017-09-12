import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

function Select(props) {
	const select = (	
		<select className="form-control">
			{props.selectOptions.map((option,index) =>
				<option key={index}>{option}</option>
			)}
		</select>		
  );
	return (
		select
	);		
}

function Thead(props) {
	const thead = (
		<thead>
			<tr>
				<th>#</th>
				{Object.keys(props.monitor[0]).map((value,index) =>
					<th key={index}>{value.toUpperCase()}</th>
				)}
			</tr>
		</thead>
	);
	return (
		thead
	);		
}

function Table(props) {
	const table = (	
		<table className="table table-bordered table-striped table-condensed">
			<Thead monitor={props.monitor} />
			<tbody>
				{props.monitor.map((value,index) =>
					<tr key={index} className={value.ult_sms === '0' ? "danger" : ""}>
						<td>{index+1}</td>
						<td>{value.servidor}</td>
						<td>{value.puerto}</td>
						<td>{value.cliente}</td>
						<td>{value.servicio}</td>
						<td>{value.ult_sms}</td>
						<td>{value.horario}</td>
						<td>{value.tipo_trafico}</td>
						<td>{value.trafico_actual}</td>
					</tr>
				)}
			</tbody>
		</table>		
  );
	return (
		table
	);		
}

class Container extends Component {
	constructor(props) {
    super(props);
    this.state = {
			clientes: 		[ 'Seleccione', 'BBVA', 'BDV', 'BANESCO', 'CARONI', 'PROVINCIAL'],
			servicios: 		[ 'Seleccione', 'ATM', 'ATM-POS'],
			servidores: 	[ 'Seleccione', 'SMPP03', 'SMPP06'],
			vistas: 			[ 'Seleccione', 'Detallada', 'Grafica'],
			monitor: [
				{servidor: 'SMPP06', puerto: '8000', cliente: 'BVC', servicio: 'POS,ATM', ult_sms: '430', horario: 'Lun-Vie 8:30a.m a 5:00p.m', tipo_trafico: 'Alto', trafico_actual: 'Con Trafico' },
				{servidor: 'SMPP06', puerto: '10001', cliente: '100x100', servicio: 'ATM, POS Dannaconect', ult_sms: '0', horario: 'N/A', tipo_trafico: 'N/A', trafico_actual: 'Sin Trafico' },
				{servidor: 'SMPP06', puerto: '11000', cliente: 'Bco. Mercantil', servicio: 'Alertas', ult_sms: '408', horario: '24 Horas', tipo_trafico: 'Alto', trafico_actual: 'Con Trafico' },
				{servidor: 'SMPP06', puerto: '12001', cliente: 'Bco. Exterior', servicio: 'ATM', ult_sms: '281', horario: '24 Horas', tipo_trafico: 'Alto', trafico_actual: 'Con Trafico' },
				{servidor: 'SMPP06', puerto: '12004', cliente: 'Bco. Exterior', servicio: 'Ambiente de calidad', ult_sms: '0', horario: 'N/A', tipo_trafico: 'N/A', trafico_actual: 'Sin Tráfico' },
			]
		};
  }
  render() {
    return (
				<div className="container-fluid container-custom">
					<Breadcrumb />
					<div className="row">
						<div className="col-md-12">
							<form className="form-inline">
								<div className="form-group">
									<label htmlFor="clientes">Clientes:</label>
									<Select selectOptions={this.state.clientes} />
								</div>
								<div className="form-group">
									<label htmlFor="servicio">Servicio: </label>
									<Select selectOptions={this.state.servicios} />
								</div>
								<div className="form-group">
									<label htmlFor="servidor">Servidor: </label>
									<Select selectOptions={this.state.servidores} />
								</div>			
								<div className="form-group">
									<label htmlFor="vista">Tipo de vista: </label>
									<Select selectOptions={this.state.vistas} />
								</div>
								&nbsp;&nbsp;&nbsp;
								<button type="submit" className="btn btn-primary">Buscar</button>
							</form>
						</div>
					</div>
					<div className="table-responsive">
						<Table monitor={this.state.monitor} />
					</div>
				</div>	
    );
  }
}
export default Container;
