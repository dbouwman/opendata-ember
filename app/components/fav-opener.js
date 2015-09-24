import Ember from 'ember';

export default Ember.Component.extend({

  favs:[],

  favsChanged: Ember.observer('favs', function(){
    console.log('/componets/fav-opener saw favs change...');
  }),


  hasFavs: Ember.computed('favs', function(){
    
    console.log('/componets/fav-opener changed its hasFavs property');
    console.log('favs: ', this.get('favs'));
    if(this.get('favs') && this.get('favs').length > 0){
      return true;
    }else{
      return false;
    }
  }),

  url: Ember.computed('favs', function(){
    var ids = localStorage.getItem('favs');
    if(ids){
      var ds = JSON.parse(ids).join(',');
      return 'http://localhost:9090/multimap.html?orgId=LjjARY1mkhxulWPq&backUrl=' + window.location.href + '&datasets=' +ds;
    }else{
      return '';
    }
  })



});
