import Ember from 'ember';
import _ from "npm:lodash";

export default Ember.Component.extend({

  //send the action up the chain w/ the datasetid
  click(){
    var ds = this.get('dataset');
    //note "action" below is a look-up to a string in the 
    //component where it's injected into the hbs...
    //i.e {{fav-dataset dataset=dataset favs=favs action="toggleDataset" }}
    //"action" itself has no meaning, could be "blarg"
    this.sendAction('action', ds.id);
    this.set('isStored', !this.get('isStored'));
  },
  favs:[],

  favsChanged: Ember.observer('favs', function(){
    console.log('/componets/fav-dataset saw favs change...');
  }),

  dataset: {},

  isStored:false,

  className: Ember.computed('favs', function(){
    var datasetId = this.get('dataset').id;
    
    if(this.get('favs')){
      if(this.get('favs').indexOf(datasetId) > -1){
        this.set('isStored', true);
        return 'glyphicon glyphicon-star';
      }else{
        this.set('isStored', false);
        return 'glyphicon glyphicon-star-empty';
      }
    }else{
      console.log('NO FAVS AVAIL TO FAV-DATASET');
      this.set('isStored', false);
      return 'glyphicon glyphicon-star-empty';
    }
    
  })

});
