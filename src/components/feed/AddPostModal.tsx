import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';

interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (newPost: { image: string; description: string }) => void;
}

const AddPostModal = ({ isOpen, onClose, onAddPost }: AddPostModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        onAddPost({
          image: reader.result as string,
          description,
        });
        setImage(null);
        setDescription('');
        onClose();
      };
      reader.readAsDataURL(image);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Create New Post</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            placeholder="Enter a description"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!image || !description}
          className="w-full bg-blue-500 text-white py-2 rounded disabled:bg-gray-300"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPostModal;