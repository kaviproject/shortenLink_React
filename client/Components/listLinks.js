import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/Collections/links';

class LinkList extends Component{
	renderRows()
	{
		return this.props.links.map(link=>{
      const {url,clicks,token}=link;
	  const shortLink=`http://localhost:3000/${token}`;

	  return(
	  	<tr key={token}>
        <td>{url}</td>
        <td><a href={shortLink}>{shortLink}</a></td>
        <td>{clicks}</td>
	  	</tr>

	  	)
	  });
	}
	render(){
		return(
             <table>
             <thead>
             <tr>
             <td>URL</td>
             <td>ADDRESS</td>
             </tr>
             </thead>
             <tbody>
             {this.renderRows()}
             </tbody>
             </table>
			)
	}

}

export default createContainer(()=>{
	Meteor.subscribe('links');
	return {links:Links.find({}).fetch()}
},LinkList)