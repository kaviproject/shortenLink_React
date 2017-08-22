import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class LinkCreate extends Component{
	
	constructor(props) {
		super(props);
		this.state = { error : '' };
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.refs.link.value);
		
		// Insert on failure reset the status
		Meteor.call('links.insert', this.refs.link.value, (error) => {
			console.log(error);
			if (error) {
				this.setState({error:'Please enter the valid url'});
			} else {
				this.setState({error:''});
				this.refs.link.value='';
			}
		});
	}

render () {
	return(
         	<form onSubmit={this.handleSubmit.bind(this)}>
         		<div className="form-group">
         			<label>Link to shorten</label>
         			<input ref="link" className="form-control" />
         		</div>
        		<div className="text-danger">{this.state.error}</div>
        		<button className="btn btn-primary">submit </button>
         	</form>
         );
	}
}

export default LinkCreate;