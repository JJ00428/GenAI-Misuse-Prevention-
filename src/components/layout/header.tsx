import Navbar from '../navbar';

interface HeaderProps {
  onAddPost: (newPost: { image: string; description: string }) => void;
}

const Header = ({ onAddPost }: HeaderProps) => {
  return (
    <header className="bg-white border-[1px] border-gray-300 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto">
        <Navbar onAddPost={onAddPost} />
      </div>
    </header>
  );
};

export default Header;