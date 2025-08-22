import { useState } from 'react';
import Layout from './components/layout';
import Panel from './components/panel';
import StoryBoard from './components/story-board';
import postsData from './data/posts';
import Post from './components/feed/post';
import Header from './components/layout/header';
import Sidebar from './components/layout/SidebarPost';

const App = () => {
  const [posts, setPosts] = useState(postsData);

  const handleAddPost = (newPost: { image: string; description: string }) => {
    const newPostData = {
      id: `${Date.now()}`,
      username: 'Current User',
      profile: 'https://images.unsplash.com/profile-fallback?auto=format&fit=crop&w=32&h=32',
      image: newPost.image,
      description: newPost.description,
      likes: '0',
      createdAt: new Date('2025-08-22T20:06:00+03:00').toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }), // 11:06 PM EEST, August 22, 2025
      isNew: true,
    };
    setPosts([newPostData, ...posts]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <Layout onAddPost={handleAddPost}>
        <div className="ml-80 space-y-3 lg:mx-0 flex-1">
          <StoryBoard />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <Panel />
      </Layout>
    </div>
  );
};

export default App;