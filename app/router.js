import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('business',{path:'/business/:business_id'});
  this.route('listinginfo',{path:'/listing/:listing_id'} );

});

export default Router;
