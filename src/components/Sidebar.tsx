import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut, Menu, Settings, BookOpen, GraduationCap, Compass } from 'lucide-react';
import unifitLogo from '../assets/unifit_logo.png';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const allMenuItems = [
    { name: '대시보드', path: '/', icon: <LayoutDashboard size={28} /> },
    { name: '팀원 찾기', path: '/team-search', icon: <Users size={28} /> },
    { name: '교과목 탐색', path: '/subjects', icon: <BookOpen size={28} /> },
    { name: '멘토링', path: '/mentoring', icon: <GraduationCap size={28} /> },
    { name: '진로설정', path: '/career', icon: <Compass size={28} /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = isAuthenticated 
    ? allMenuItems 
    : allMenuItems.filter(item => item.name === '대시보드');

  // 더미 프로필 이미지 URL
  const profileImageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

  return (
    <div 
      className={`h-full bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 transition-all duration-300 z-50 shadow-xl ${
        isExpanded ? 'w-[380px]' : 'w-20'
      }`}
    >
      {/* 상단: 햄버거 메뉴 버튼 및 로고 */}
      <div className="h-20 flex items-center border-b border-gray-100 px-2 overflow-hidden">
        <button 
          onClick={toggleSidebar}
          className={`h-16 w-16 flex-shrink-0 flex items-center justify-center text-gray-500 hover:text-violet-600 focus:outline-none rounded-lg transition-colors`}
        >
          <Menu size={32} />
        </button>
        <div className={`flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'w-40 opacity-100 ml-4' : 'w-0 opacity-0 ml-0'
        }`}>
          <img 
            src={unifitLogo} 
            alt="UniFit" 
            className="h-10 object-contain" 
          />
        </div>
      </div>
      
      {/* 네비게이션 메뉴 */}
      <nav className="flex-grow flex flex-col pt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            title={isExpanded ? '' : item.name}
            className={({ isActive }) =>
              `h-16 flex items-center transition-colors duration-200 w-full relative ${
                isActive
                  ? 'text-violet-600 bg-violet-50'
                  : 'text-gray-500 hover:text-violet-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* 아이콘 영역: 햄버거 버튼과 동일하게 정렬되도록 w-20 설정 */}
                <div className="w-20 h-16 flex-shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                
                {/* 확장되었을 때만 텍스트 표시 */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'opacity-100 ml-2' : 'opacity-0 w-0'
                }`}>
                  <span className="text-lg font-medium whitespace-nowrap">
                    {item.name}
                  </span>
                </div>

                {/* 활성화 표시 바 (축소 상태일 때) */}
                {!isExpanded && (
                  <div className={`absolute left-0 w-1 h-8 bg-violet-600 transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 하단 사용자 프로필 영역 (로그인 시에만 표시) */}
      {isAuthenticated && (
        <div className="border-t border-gray-100 flex items-center h-20 transition-all duration-300 overflow-hidden">
          {/* 프로필 이미지 (항상 고정된 위치) */}
          <div className="w-20 flex-shrink-0 flex items-center justify-center">
            <img 
              src={profileImageUrl} 
              alt="Profile" 
              className="w-[42px] h-[42px] rounded-full object-cover border-2 border-gray-100 cursor-pointer hover:border-violet-300 transition-colors"
              onClick={toggleSidebar}
            />
          </div>

          {/* 확장 시 표시되는 정보 */}
          <div className={`flex items-center justify-between flex-1 overflow-hidden transition-all duration-300 ${
            isExpanded ? 'opacity-100 pr-6' : 'opacity-0 w-0 pr-0'
          }`}>
            <span className="font-bold text-lg text-gray-800 whitespace-nowrap truncate ml-2">
              김유니
            </span>
            
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <button 
                title="설정"
                className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-violet-50 hover:text-violet-600 transition-colors"
              >
                <Settings size={20} />
              </button>
              <button
                onClick={handleLogout}
                title="로그아웃"
                className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;