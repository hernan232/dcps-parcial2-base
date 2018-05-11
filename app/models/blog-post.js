import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  publishedAt: DS.attr('date'),
  content: DS.attr('string'),

  // Relations
  author: DS.belongsTo('author')
});
