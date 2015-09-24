import Ember from 'ember';

export default Ember.Service.extend({

  getStore: function(key){
    var dataAsString = localStorage.getItem(key);
    if(dataAsString){
      return JSON.parse(dataAsString);
    }else{
      return null;
    }
  }
  
});
