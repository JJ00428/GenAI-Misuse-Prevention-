import { ElementType } from 'react';

interface PathProps {
  Icon: ElementType;
  onClick?: () => void;
}

const Path = ({ Icon, onClick }: PathProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
        <Icon className="w-7 h-7" />
    </div>
  );
};

export default Path;