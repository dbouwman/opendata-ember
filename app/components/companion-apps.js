import Ember from 'ember';

export default Ember.Component.extend({
  dataset: {},

  apps: Ember.computed('dataset', function(){
    var apps = [];
    //super hacky!
    var dataset = this.get('dataset');
    if(dataset.get('name').toLowerCase().indexOf('crime') > -1){
      //add the crime viewer
      apps.push({
        name:'Crime Explorer',
        url: 'http://localhost:9090/crime-viewer.html?orgId=LjjARY1mkhxulWPq&backUrl=' + window.location.href +'&datasetId=' + dataset.id
      });
    }

    return apps;

  })

});
