import {Mongo} from 'meteor/mongo';
import  validUrl from 'valid-url';
import {check,Match} from 'meteor/check';

Meteor.methods(
{
	'links.insert':function(url) {
		console.log("trying to save data" + url);

		// Validate the URL and throw an error if it is invalid
		check(url,Match.Where(url => validUrl.isUri(url)));
		const token = Math.random().toString(36).slice(-5);
		
		Links.insert({url,token,clicks:0});
	}
});

export const Links = new Mongo.Collection('links');