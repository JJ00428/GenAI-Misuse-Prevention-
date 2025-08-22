import { useState } from 'react';
import Logo from './logo';
import Searchbar from './searchbar';
import { HomeIcon } from '@heroicons/react/solid';
import Path from './path';
import { ExploreIcon, HeartIcon, MessengerIcon, PostIcon } from './icons';
import Profile from './profile';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import AddPostModal from '../feed/AddPostModal';

interface NavbarProps {
  onAddPost: (newPost: { image: string; description: string }) => void;
}

const Navbar = ({ onAddPost }: NavbarProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 h-14 gap-5">
        <Logo />
        <Searchbar />
        <div className="flex items-center gap-5">
          <ul className="sm:flex items-center gap-5 hidden">
            <Path Icon={HomeIcon} />
            <Path Icon={MessengerIcon} />
            <Path Icon={PostIcon} onClick={() => setShowModal(true)} />
            <Path Icon={ExploreIcon} />
            <Path Icon={HeartIcon} />
          </ul>
          <MenuAlt4Icon className="w-6 sm:hidden" />
          <Profile />
        </div>
      </nav>
      <AddPostModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddPost={onAddPost}
      />
    </>
  );
};

export default Navbar;