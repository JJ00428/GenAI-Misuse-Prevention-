import { ReactNode } from 'react';
import Header from './header';
import Main from './main';

interface LayoutProps {
  children: ReactNode;
  onAddPost: (newPost: { image: string; description: string }) => void;
}

const Layout = ({ children, onAddPost }: LayoutProps) => {
  return (
    <div className="min-h-screen space-y-5">
      <Header onAddPost={onAddPost} />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;