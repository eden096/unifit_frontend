import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

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
      <div className="flex-1 ml-20 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;