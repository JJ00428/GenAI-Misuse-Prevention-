import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Circle, Cpu, MessageSquare } from "lucide-react";
import DellProfile from '../../assets/images/Dell.png';

const Sidebar = () => {
  return (
    <div className=" h-screen w-64  text-black flex flex-col p-4 border-r border-gray-800">
      <h1 className="text-2xl font-bold mb-8 px-2">Instagram</h1>

      <nav className="flex flex-col gap-6">
        <SidebarItem icon={<Home size={22} />} label="Home" active />
        <SidebarItem icon={<Search size={22} />} label="Search" />
        <SidebarItem icon={<Compass size={22} />} label="Explore" />
        <SidebarItem icon={<Film size={22} />} label="Reels" />
        <SidebarItem icon={<MessageCircle size={22} />} label="Messages" badge="9+" />
        <SidebarItem icon={<Heart size={22} />} label="Notifications" dot />
        <SidebarItem icon={<PlusSquare size={22} />} label="Create" />
        <SidebarItem icon={<User size={22} />} label="Profile" avatar />
        <SidebarItem icon={<Circle size={22} />} label="Meta AI" />
        <SidebarItem icon={<Cpu size={22} />} label="AI Studio" />
        <SidebarItem icon={<MessageSquare size={22} />} label="Threads" />
      </nav>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  dot?: boolean;
  avatar?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, badge, dot, avatar }) => {
  return (
    <div
      className={`relative flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer 
        hover:bg-gray-300 transition-colors ${active ? "font-bold" : "font-normal"}`}
    >
      {avatar ? (
        <img
          src={DellProfile}
          alt="profile"
          className="w-7 h-7 rounded-full object-cover"
        />
      ) : (
        icon
      )}
      <span>{label}</span>

      {badge && (
        <span className="absolute right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}

      {dot && <span className="absolute right-2 w-2 h-2 bg-red-500 rounded-full"></span>}
    </div>
  );
};

export default Sidebar;
