import Head from "next/head";
import { getAllPosts } from "../../services/postService";

/*
 * Make all necessary imports.
 * Write the function getStaticProps.
 * Pass down your props to the component.
 * Render the data.
 */

export async function getStaticProps() {
  const posts = await getAllPosts();

  return { props: { posts: posts } };
}

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>All Posts</h1>
      <p>List of all posts</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            Name: {post.name} - Description: {post.description}
          </li>
        ))}
      </ul>
    </>
  );
}
