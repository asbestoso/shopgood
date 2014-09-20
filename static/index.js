window.Shopgood = Ember.Application.create();

Shopgood.Router.map(function() {
  this.resource('shopgood', { path: '/' });
});

Shopgood.Folder = DS.Model.extend({
  name: DS.attr('string'),
  products: DS.hasMany('product'),
});

var updateFrequencyOptions = [
  'immediate',
  'hourly',
  'daily',
];

Shopgood.Product = DS.Model.extend({
  name: DS.attr('string'),
  urls: DS.hasMany('productUrl'),
  folder: DS.belongsTo('folder'),
  updateFrequency: DS.attr('string'),
});

Shopgood.Url = DS.Model.extend({
  product: DS.belongsTo('product'),
  url: DS.attr('string'),
});



Shopgood.ApplicationAdapter = DS.FixtureAdapter;
Shopgood.Folder.FIXTURES = [
  { id: 1, name: 'Electronics', products: [1, 2] },
  { id: 2, name: 'Cooking', products: [3, 4, 5] },
];
Shopgood.Product.FIXTURES = [
  { id: 1, name: 'Nintendo Wii U', urls: [1], folder: 1 },
  { id: 2, name: 'iPhone 6 Plus', urls: [2], folder: 1 },
  { id: 3, name: 'Spatula', urls: [3], folder: 2 },
  { id: 4, name: 'Pasta Maker', urls: [4], folder: 2 },
  { id: 5, name: 'Knife Block', urls: [5], folder: 2 },
];
Shopgood.Url.FIXTURES = [
  { id: 1, url: 'http://whocares.example.com' },
  { id: 2, url: 'http://whocares.example.com' },
  { id: 3, url: 'http://whocares.example.com' },
  { id: 4, url: 'http://whocares.example.com' },
  { id: 5, url: 'http://whocares.example.com' },
];
