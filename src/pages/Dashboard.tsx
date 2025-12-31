import React from 'react';
import { Users, BookOpen, GraduationCap, Compass, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import userLevelImg from '../assets/user_level.png';

const Dashboard: React.FC = () => {
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

  return (
    <div className="flex flex-col items-center justify-start w-full">
      
      <div className="w-full max-w-[1240px]"> {/* 전체 컨테이너 너비 제한 (400*3 + 간격 고려) */}
        
        <div className="flex flex-col xl:flex-row gap-6 justify-center items-start">
          
          {/* 좌측: 2x2 그리드 (각 400x245) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainCards.map((card, index) => (
              <Link 
                to={card.path}
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between"
                style={{ width: '400px', height: '245px' }} // 요청하신 고정 크기
              >
                {/* 상단 아이콘 및 타이틀 영역 */}
                <div className="p-8">
                  <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 font-medium break-keep">
                    {card.desc}
                  </p>
                </div>

                {/* 하단 화살표 (호버 시 이동) */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 우측: 사용자 레벨 (400x516) */}
          <div 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            style={{ width: '400px', height: '516px' }}
          >
            <img 
              src={userLevelImg} 
              alt="사용자 레벨" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;