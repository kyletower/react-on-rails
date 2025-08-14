import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';

const PostsList = () => {
  // Fetch posts from the API
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className='post-container'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export { PostsList };
