import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost(post) {
      let deleteConfirmation = confirm('Are you sure?');
      if (deleteConfirmation) {
        post.destroyRecord().then(() => {
          this.get('model').posts.removeObject(post); 
        });
      }
    }
  }
});
