import React from 'react';
import { Users, BookOpen, GraduationCap, Compass, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // 좌측 2x2 그리드에 들어갈 메뉴 데이터
  const mainCards = [
    { 
      title: '팀 프로젝트', 
      desc: '새로운 팀원을 찾거나 프로젝트를 시작하세요.',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'bg-blue-500',
      path: '/team-search'
    },
    { 
      title: '교과목 탐색', 
      desc: '나에게 맞는 교과목을 찾아보세요.',
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: 'bg-emerald-500',
      path: '/subjects'
    },
    { 
      title: '멘토링', 
      desc: '선배들의 조언과 멘토링을 받아보세요.',
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      color: 'bg-violet-500',
      path: '/mentoring'
    },
    { 
      title: '진로 설정', 
      desc: '나의 미래 진로를 설계하고 관리하세요.',
      icon: <Compass className="w-8 h-8 text-white" />,
      color: 'bg-orange-500',
      path: '/career'
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">로그인해 unifit을 시작해보세요</h2>
        <button
          onClick={() => navigate('/login')}
          className="bg-violet-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-violet-700 transition-colors shadow-md"
        >
          로그인
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start w-full">
      
      <div className="w-full max-w-[1600px]"> {/* 전체 컨테이너 너비 제한 증가 */}
        
        <div className="flex flex-col xl:flex-row gap-8 justify-center items-start">
          
          {/* 좌측: 2x2 그리드 (각 500x306) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainCards.map((card, index) => (
              <Link 
                to={card.path}
                key={index}
                className="group relative bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between"
                style={{ width: '500px', height: '306px' }} 
              >
                {/* 상단 아이콘 및 타이틀 영역 */}
                <div className="p-10">
                  <div className={`${card.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {/* 아이콘 크기 증가 */}
                    {React.cloneElement(card.icon as React.ReactElement, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-violet-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-lg font-medium break-keep">
                    {card.desc}
                  </p>
                </div>

                {/* 하단 화살표 (호버 시 이동) */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <ChevronRight size={28} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 우측: 사용자 레벨 (500x644) */}
          <div 
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col items-center justify-center"
            style={{ width: '500px', height: '644px' }}
          >
            <h2 className="text-3xl font-bold text-gray-800">사용자 레벨</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;