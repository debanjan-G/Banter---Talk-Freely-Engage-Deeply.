const paths = {
  homePage() {
    return "/";
  },
  viewTopic(topicName: string) {
    return `/topics/${topicName}`;
  },
  createPost(topicName: string) {
    return `/topics/${topicName}/posts/new`;
  },
  viewPost(topicName: string, postId: number) {
    return `/topics/${topicName}/posts/${postId}`;
  },
};

export default paths;
