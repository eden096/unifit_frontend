import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return '대시보드';
      case '/team-search': return '팀원 찾기';
      case '/subjects': return '교과목 탐색';
      case '/mentoring': return '멘토링';
      case '/career': return '진로설정';
      default: return '';
    }
  };

  const title = getPageTitle(location.pathname);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* 사이드바 */}
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      
      {/* 백드롭 (사이드바 확장 시 표시) */}
      {isSidebarExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
      
      {/* 메인 콘텐츠 영역 (사이드바 너비만큼 왼쪽 마진) */}
      <div className="flex-1 ml-20 p-8 overflow-y-auto bg-gray-50">
        
        {/* 페이지 제목 영역 (우측 상단 235x64) */}
        <div className="flex justify-end mb-6">
          <div className="w-[235px] h-[64px] flex items-center justify-end">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;