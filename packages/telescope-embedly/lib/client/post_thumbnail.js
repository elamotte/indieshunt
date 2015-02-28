Template[getTemplate('postThumbnail')].helpers({
  postLink: function () {
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  playVideoClass: function () {
    return !!this.media ? 'post-thumbnail-has-video': 'post-thumbnail-no-video';
  },
  videoTemplate: function () {
    return getTemplate('postVideo');
  }
});

Template[getTemplate('postThumbnail')].events({
  'click .post-thumbnail-has-video': function (e) {
    e.preventDefault();
    $('body').addClass('showing-lightbox');
    $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');
  },
  'click .post-thumbnail-no-video': function (e) {
    e.preventDefault();
    window.open(getOutgoingUrl(this.url),'_blank')
  }
})
