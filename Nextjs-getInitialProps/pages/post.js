const Post = ({ post }) => (
  <div>
    <h1>{post.id}</h1>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { post };
};

export default Post;
