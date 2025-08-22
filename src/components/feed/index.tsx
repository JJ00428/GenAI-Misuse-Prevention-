import Navbar from '../navbar';
import Post from '../feed/post';
import IPost from '../../schemas/post';

interface FeedProps {
  posts: IPost[];
  onAddPost: (newPost: { image: string; description: string }) => void;
}

const Feed = ({ posts, onAddPost }: FeedProps) => {
  return (
    <div>
      <Navbar onAddPost={onAddPost} />
      <div className="space-y-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;