import React from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data = null,
		};
	}

	componentDidMount() {
		fetch('https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true')
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}

	render () {
		return (
	    <div className="App">
	      {this.state.data}
	    </div>
	  );
	}
  
}

export default App;