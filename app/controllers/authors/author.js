import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost(post) {
      post.destroyRecord().then(() => {
        this.get('model').posts.removeObject(post);
        this.get('model').save();
      });
    }
  }
});
