import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import LinkCreate from './Components/linkCreate';
import {Links} from '../imports/Collections/links';
import LinkList from './Components/listLinks';

const App =() =>
{
	return (
		<div>
          <Header />
          <LinkCreate />
          <LinkList />
		</div>
	)
}
Meteor.startup(()=>
{
ReactDOM.render(<App />,document.getElementById('container'));
});