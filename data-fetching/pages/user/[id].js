import Link from "next/link";

const User = ({ user, posts }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Posts by {user.name}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [userRes, postRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`),
  ]);

  const [user, posts] = await Promise.all([userRes.json(), postRes.json()]);

  return {
    props: {
      user,
      posts,
    },
  };
}

export default User;
