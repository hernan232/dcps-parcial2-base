import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  profilePicture: DS.attr('string'),

  // Relations
  blogPosts: DS.hasMany('blog-post')  
});
