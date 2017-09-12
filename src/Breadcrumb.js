import React, { Component } from 'react';

function BreadcrumbItems(props) {
  const breadcrumb = (
    <ol className="breadcrumb">
      {props.breadcrumbItems.map((item) =>
				<li key={item.id} className={item.className}>
					{item.a?<a href="">{item.a}</a>:item.li}
        </li>
      )}
    </ol>
  );
	return (
		breadcrumb
	);		
}

class Breadcrumb extends Component {
	constructor(props) {
    super(props);
    this.state = {
			breadcrumbItems: [
				{id: 1, className: 'breadcrumb-item', a:'Inicio' },
				{id: 2, className: 'breadcrumb-item active', li: 'Bitacora Monitoreo'}
			]			
		};
  }
  render() {
    return (
			<BreadcrumbItems breadcrumbItems = {this.state.breadcrumbItems} />
    );
  }
}

export default Breadcrumb;
