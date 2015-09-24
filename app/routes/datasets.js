import Ember from 'ember';

export default Ember.Route.extend({

  init: function(args){
    //get the store
    this._super(args);
  },

  favsChanged: Ember.observer('favs', function(){
    console.log('/routes/datasets saw favs change...');
    //see if we can force the issue
    this.ctl.set('favs', this.get('favs'));
  }),

  setupController: function(controller, model){
    this._super(controller, model);
    this.ctl = controller;
    //load the favs
    var storedFavs = this.getStore('favs');
    if(storedFavs){
      this.set('favs', storedFavs);
    }else{
      this.set('favs', []);
    }
    controller.set('favs', this.get('favs'));
  },

  favs:[],

  actions: {
    toggleDataset: function(args){
      console.log('datasets route caught toggleDataset');
      this.toggle(args);
    }
  },

  getStore: function(key){
    var dataAsString = localStorage.getItem(key);
    if(dataAsString){
      return JSON.parse(dataAsString);
    }else{
      return null;
    }
  },

  toggle: function(datasetId){
    var self = this;
    
    if(this.get('favs').indexOf(datasetId) > -1){
      this._remove(datasetId, function(updatedFavs){
        self.set('favs', updatedFavs);
      });

    }else{
      this._store(datasetId, function(updatedFavs){
        self.set('favs', updatedFavs);
      });
    }
  },

  _store: function(datasetId, cb){
    console.log('_store called for ' + datasetId);
    var ds = this.getStore('favs');
    if(ds){
      ds.push(datasetId);
    }else{
      ds = [];
      ds.push(datasetId);
    }
    localStorage.setItem('favs', JSON.stringify(ds));
    if(cb){
      cb(ds);
    }
  },

  _remove: function(datasetId, cb){
    console.log('_remove called for ' + datasetId);
    var ds = this.getStore('favs');
    if(ds){
      var idx = ds.indexOf(datasetId);
      ds.splice(idx,1);
      localStorage.setItem('favs', JSON.stringify(ds));
    }

    if(cb){
      cb(ds);
    }
  }


});
