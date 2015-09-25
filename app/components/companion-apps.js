import Ember from 'ember';
import config from '../config/environment';

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
        url: config.companionAppsBaseUrl + '/crime-viewer.html?orgId=LjjARY1mkhxulWPq&backUrl=' + window.encodeURIComponent(window.location.href) +'&datasetId=' + dataset.id
      });
    }

    apps.push({
      name:'Chart Builder',
      url: 'http://esri.github.io/cedar/examples/scatter-def-url.html?datasetId=' + dataset.id
    });

    //always setup thematic mapper (aka mundi)
    apps.push({
      name:'Thematic Mapper',
      url: config.favAppUrl + '?orgId=LjjARY1mkhxulWPq&backUrl=' + window.encodeURIComponent(window.location.href) +'&datasets=' + dataset.id
    });

    return apps;

  })

});
