import Head from "next/head";
import { getAllPosts, getPostById } from "../../services/postService";

/*
 * Make all necessary imports.
 * Write the function getStaticPaths.
 * Write the function getStaticProps.
 * Pass down your props to the component.
 * Render the data.
 */

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const ids = posts.map((post) => post.id);

  return {
    paths: ids.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const post = await getPostById(id);

  return {
    props: { id: post.id, name: post.name, description: post.description },
  };
}

export default function Post({ id, name, description }) {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <h1>{name}</h1>
      <p>ID: {id}</p>
      <h2>Description</h2>
      <p>{description}</p>
    </>
  );
}
