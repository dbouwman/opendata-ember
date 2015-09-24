import Ember from 'ember';

export default Ember.Controller.extend({
  datasetsController: Ember.inject.controller('datasets'),
  favs: Ember.computed.reads('datasetsController.favs'),
  // favs: Ember.computed('datasetsController.favs', function(){
  //   this.set('favs', this.get('datasetsController').get('favs'));
  // }),
  // // init: function(){
  //   var storedFavs = this.getStore('favs');
  //   if(storedFavs){
  //     this.set('favs', storedFavs);
  //   }else{
  //     this.set('favs', []);
  //   }
  // },

  // favs:[],

  actions: {
    toggleDataset: function(){
      //return true so this bubbles up
      return true;
    }
  },

  // getStore: function(key){
  //   var dataAsString = localStorage.getItem(key);
  //   if(dataAsString){
  //     return JSON.parse(dataAsString);
  //   }else{
  //     return null;
  //   }
  // },


});
