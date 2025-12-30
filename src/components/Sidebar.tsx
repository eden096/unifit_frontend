import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut, Menu, Settings, BookOpen, GraduationCap, Compass } from 'lucide-react';

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
  const menuItems = [
    { name: '대시보드', path: '/', icon: <LayoutDashboard size={28} /> },
    { name: '팀원 찾기', path: '/team-search', icon: <Users size={28} /> },
    { name: '교과목 탐색', path: '/subjects', icon: <BookOpen size={28} /> },
    { name: '멘토링', path: '/mentoring', icon: <GraduationCap size={28} /> },
    { name: '진로설정', path: '/career', icon: <Compass size={28} /> },
  ];

  // 더미 프로필 이미지 URL
  const profileImageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

  return (
    <div 
      className={`h-full bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 transition-all duration-300 z-50 shadow-xl ${
        isExpanded ? 'w-[380px]' : 'w-20'
      }`}
    >
      {/* 상단: 햄버거 메뉴 버튼 및 로고 */}
      <div className="h-20 flex items-center border-b border-gray-100 px-2">
        <button 
          onClick={toggleSidebar}
          className={`h-16 w-16 flex items-center justify-center text-gray-500 hover:text-violet-600 focus:outline-none rounded-lg transition-colors`}
        >
          <Menu size={32} />
        </button>
        {isExpanded && (
          <span className="text-xl font-bold text-violet-600 ml-4 animate-fade-in whitespace-nowrap overflow-hidden">
            UniFit
          </span>
        )}
      </div>
      
      {/* 네비게이션 메뉴 */}
      <nav className="flex-grow flex flex-col pt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            title={isExpanded ? '' : item.name}
            className={({ isActive }) =>
              `h-16 flex items-center transition-colors duration-200 ${
                isExpanded ? 'px-6 mx-4 rounded-lg' : 'justify-center w-auto'
              } ${
                isActive
                  ? `bg-violet-50 text-violet-600 ${!isExpanded ? 'border-r-4 border-violet-600' : ''}`
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`
            }
          >
            <span className="flex-shrink-0">{item.icon}</span>
            
            {/* 확장되었을 때만 텍스트 표시 */}
            {isExpanded && (
              <span className="ml-4 text-lg font-medium whitespace-nowrap overflow-hidden">
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 하단 사용자 프로필 영역 */}
      <div className="border-t border-gray-100 p-4">
        {isExpanded ? (
          // 확장 상태: 프로필 사진, 이름, 버튼들
          <div className="flex items-center justify-between w-full animate-fade-in">
            <div className="flex items-center overflow-hidden">
              <img 
                src={profileImageUrl} 
                alt="Profile" 
                className="w-[42px] h-[42px] rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
              />
              <span className="ml-4 font-bold text-lg text-gray-800 whitespace-nowrap truncate">
                김유니
              </span>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <button 
                title="설정"
                className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-violet-50 hover:text-violet-600 transition-colors"
              >
                <Settings size={20} />
              </button>
              <NavLink
                to="/login"
                title="로그아웃"
                className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <LogOut size={20} />
              </NavLink>
            </div>
          </div>
        ) : (
          // 축소 상태: 프로필 사진만 (42x42 영역에 맞춤)
          <div className="flex justify-center items-center w-full">
            <img 
              src={profileImageUrl} 
              alt="Profile" 
              className="w-[42px] h-[42px] rounded-full object-cover border-2 border-gray-100 cursor-pointer hover:border-violet-300 transition-colors"
              onClick={toggleSidebar}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;