import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';

function Layout(props) {
  return (
		<div className="Content">
			{props.navbar}
			{props.container}
			{props.footer}
		</div>
  );
}

function Content() {
  return (
    <Layout 
			navbar={
				<Navbar />
			} 
			container={
				<Container />
			}
			footer={
				<Footer />
			} />
  );
}

class App extends Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
			<Content />
    );
  }
}

export default App;
