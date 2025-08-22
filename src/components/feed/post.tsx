import { useState } from 'react';
import { DotsHorizontalIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid';
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/outline';
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/solid';
import IPost from '../../schemas/post';
import { EmojiCollection, MessageIcon, ShareIcon } from './icons';

interface IProps {
  post: IPost;
}

const Post = ({ post }: IProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState<number>(parseInt(post.likes, 10) || 0);
  const [isSaved, setIsSaved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const hasInfoIcon = ['3', '5', '7', '8', '9'].includes(post.id) || !!post.isNew;

  return (
    <div className="relative card space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center -m-2">
          <div className="w-8 overflow-hidden rounded-full cursor-pointer">
            <img className="w-full" src={post.profile} alt={post.profile} />
          </div>
          <h2 className="font-semibold">{post.username}</h2>
        </div>
        <DotsHorizontalIcon className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="relative -mx-5">
        <img className="w-full h-auto" src={post.image} alt={post.username} />
        {hasInfoIcon && (
          <div className="absolute bottom-2 right-2">
            <InformationCircleIcon
              className="w-6 h-6 text-white bg-black bg-opacity-50 rounded-full cursor-pointer"
              onClick={handlePopupToggle}
            />
          </div>
        )}
      </div>
      {hasInfoIcon && showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg max-w-sm w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">AI generated Image Info</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handlePopupToggle}
              >
                ✕
              </button>
            </div>
            <img
              className="w-32 h-32 object-cover mb-2"
              src={post.image}
              alt={post.username}
            />
            <p className="text-sm">
              <span className="font-semibold">Creator:</span> {post.username}
            </p>
            <p className="text-sm">
              <span className="font-semibold">AI:</span> {['3', '5', '7', '8', '9'].includes(post.id) ? (post.id === '3' ? 'FreePik' : (post.id === '5' ? 'Flux' : (post.id === '7' ? 'Google gemini Imagen 4' : (post.id === '8' ? 'Google gemini Imagen 4' : (post.id === '9' ? 'Google gemini Imagen 4' : 'ChatGpt 5'))))) : 'ChatGpt 5'}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Prompt:</span> {['3', '5', '7', '8', '9'].includes(post.id) ? (post.id === '3' ? 'Cute Black Curly Haired Instgram Girl' : (post.id === '5' ? 'early 2000s emo profile pic selfie taken on an old digital camera from 2001' : (post.id === '7' ? 'Luxirious Bar' : (post.id === '8' ? 'A pit on the moon filled with Ice-cream and surrounded by astronuts' : (post.id === '9' ? 'Zoomed in Picture of a Dandelion' : 'ChatGpt 5'))))) : 'ChatGpt 5'}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Date:</span> {post.createdAt}
            </p>
          </div>
        </div>
      )}
      <div className="space-y-2">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-4">
            {isLiked ? (
              <SolidHeartIcon
                className="w-6 h-6 text-red-500 cursor-pointer"
                onClick={handleLikeToggle}
              />
            ) : (
              <OutlineHeartIcon
                className="w-6 h-6 cursor-pointer"
                onClick={handleLikeToggle}
              />
            )}
            <MessageIcon />
            <ShareIcon />
          </div>
          {isSaved ? (
            <SolidBookmarkIcon
              className="w-6 h-6 text-blue-500 cursor-pointer"
              onClick={handleSaveToggle}
            />
          ) : (
            <OutlineBookmarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={handleSaveToggle}
            />
          )}
        </div>
        <span className="font-semibold">{`${likes} likes`}</span>
        <p>
          <span className="font-semibold">{post.username} </span>
          {post.description}
        </p>
        <h3 className="text-xs text-gray-500">{post.createdAt}</h3>
      </div>
      <div className="h-[1px] relative left-0 right-0 bg-gray-200 -mx-5"></div>
      <div className="flex gap-4">
        <EmojiCollection />
        <input
          className="focus:outline-none w-full"
          type="text"
          placeholder="Add a comment"
        />
        <button className="text-blue-500">Post</button>
      </div>
    </div>
  );
};

export default Post;