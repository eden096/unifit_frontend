import React, { useState } from 'react';
import { Bot, Users, Search, ChevronRight, MessageCircle, MoreHorizontal, X, Github, Mail } from 'lucide-react';
import userIcon from '../assets/user_icon.png';

// 더미 데이터: 수업 및 해당 수업의 구인 프로필
const classProjects = [
  {
    id: 1,
    className: '과목',
    professor: '김ㅇㅇ교수님',
    profiles: [
      { id: 1, name: '정이든', role: '프론트', image: userIcon },
      { id: 2, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 3, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 4, name: '김ㅇㅇ', role: '프론트', image: userIcon },
    ]
  },
  {
    id: 2,
    className: '과목',
    professor: '김ㅇㅇ교수님',
    profiles: [
      { id: 5, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 6, name: '김ㅇㅇ', role: '프론트', image: userIcon },
    ]
  },
  {
    id: 3,
    className: '과목',
    professor: '김ㅇㅇ교수님',
    profiles: [
      { id: 7, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 8, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 9, name: '김ㅇㅇ', role: '프론트', image: userIcon },
    ]
  },
  {
    id: 4,
    className: '과목',
    professor: '김ㅇㅇ교수님',
    profiles: [
      { id: 10, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 11, name: '김ㅇㅇ', role: '프론트', image: userIcon },
    ]
  },
  {
    id: 5,
    className: '과목',
    professor: '김ㅇㅇ교수님',
    profiles: [
      { id: 12, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 13, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 14, name: '김ㅇㅇ', role: '프론트', image: userIcon },
    ]
  },
  {
    id: 6,
    className: '과목',
    professor: '김ㅇㅇ교수님',
    profiles: [
      { id: 15, name: '김ㅇㅇ', role: '프론트', image: userIcon },
      { id: 16, name: '김ㅇㅇ', role: '프론트', image: userIcon },
    ]
  }
];

// 프로필 모달 컴포넌트
interface ProfileModalProps {
  profile: { id: number; name: string; role: string; image: string };
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* 배경 회색 처리 (백드롭) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* 정보 박스 */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100 p-8">
        {/* 닫기 버튼 */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>

        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 rounded-full border-4 border-violet-100 p-1 mb-4">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{profile.name}</h2>
          <span className="text-violet-600 font-medium bg-violet-50 px-3 py-1 rounded-full text-sm">
            {profile.role}
          </span>
        </div>

        {/* 상세 정보 (백엔드 연동 시 데이터 매핑 필요) */}
        <div className="space-y-6">
          {/* 더미 데이터: 소속 */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">소속</h3>
            <p className="text-gray-800 font-medium ml-1">AISW학 2학년</p>
          </div>

          {/* 더미 데이터: 기술 스택 */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Node.js'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 더미 데이터: 주요 이력 */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">주요 이력</h3>
            <div className="text-gray-600 bg-gray-50 p-4 rounded-xl text-sm leading-relaxed space-y-2">
              <p>• 웹 프로젝트 'UniFit' 프론트엔드 개발자</p>
            </div>
          </div>

          {/* 하단 연락처 및 링크 (백엔드 연동 시 데이터 매핑 필요) */}
          <div className="flex flex-col gap-3 pt-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">연락처 및 링크</h3>
            <div className="bg-gray-50 p-4 rounded-xl space-y-3">
              <div className="flex items-center gap-3 text-gray-700 hover:text-violet-600 transition-colors cursor-pointer">
                <Mail size={18} className="text-gray-400" />
                <span className="text-sm font-medium">eden096@hs.ac.kr</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-violet-600 transition-colors cursor-pointer">
                <Github size={18} className="text-gray-400" />
                <span className="text-sm font-medium">github.com/eden096</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSearch: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<{ id: number; name: string; role: string; image: string } | null>(null);

  const handleProfileClick = (profile: { id: number; name: string; role: string; image: string }) => {
    // ID가 1번인 경우에만 모달 열기
    if (profile.id === 1) {
      setSelectedProfile(profile);
    }
  };

  const closeModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="flex flex-col h-full pt-4 relative">
      
      {/* 프로필 모달 (선택된 프로필이 있을 때만 표시) */}
      {selectedProfile && (
        <ProfileModal profile={selectedProfile} onClose={closeModal} />
      )}

      <div className="flex flex-col lg:flex-row gap-12 h-full">
        
        {/* 좌측: 팀원찾기 (AI 매칭 + 자율 구성) - 2:3 비율의 '2' (40%) */}
        <div className="lg:w-2/5 flex-shrink-0 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
            <Users className="w-6 h-6 text-violet-600" />
            팀원찾기
          </h3>

          {/* AI 추천 매칭 블록 */}
          <div className="group bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden h-[320px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Bot size={100} />
            </div>
            <div className="relative z-10">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">AI 추천 매칭</h4>
              <p className="text-violet-100 mb-8 text-sm leading-relaxed">
                나의 성향과 스킬을 분석하여<br/>최적의 팀원을 자동으로 추천해드려요.
              </p>
              <button className="bg-white text-violet-600 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-violet-50 transition-colors flex items-center gap-2">
                매칭 시작하기 <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* 자율 매칭 블록 */}
          <div className="group bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-violet-400 cursor-pointer hover:bg-violet-50/30 transition-all duration-300 flex flex-col items-center justify-center text-center h-[320px]">
            <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-violet-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">자율 매칭</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              직접 공고를 올리거나<br/>원하는 팀을 찾아보세요.
            </p>
          </div>
        </div>

        {/* 중앙 구분선 */}
        <div className="hidden lg:block w-px bg-gray-200 self-stretch my-2" />

        {/* 우측: 팀플목록 섹션 - 2:3 비율의 '3' (60%) */}
        <div className="lg:w-3/5 flex flex-col gap-6 h-full overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-700 flex items-center gap-2 flex-shrink-0">
            <div className="bg-emerald-100 p-1.5 rounded">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            팀플목록
          </h3>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4 min-h-0 custom-scrollbar">
            {classProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* 수업 헤더 */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{project.className}</h4>
                    <p className="text-sm text-gray-500">{project.professor}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                {/* 프로필 리스트 (가로 스크롤) */}
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {/* 유저 프로필 카드들 */}
                  {project.profiles.map((profile) => (
                    <div 
                      key={profile.id} 
                      onClick={() => handleProfileClick(profile)}
                      className={`flex-shrink-0 w-32 bg-gray-50 rounded-xl p-3 flex flex-col items-center cursor-pointer transition-all border border-transparent group
                        ${profile.id === 1 ? 'hover:bg-violet-50 hover:border-violet-200 hover:shadow-md' : 'hover:bg-gray-100 opacity-80 hover:opacity-100'}
                      `}
                    >
                      <div className="relative mb-2">
                        <img 
                          src={profile.image} 
                          alt={profile.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        {/* ID 1번만 온라인 표시 등 강조 가능 */}
                        {profile.id === 1 && (
                          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <span className="font-bold text-gray-800 text-sm mb-1">{profile.name}</span>
                      <span className="px-2 py-0.5 bg-white text-violet-600 text-[10px] font-bold rounded-full border border-violet-100 group-hover:border-violet-200">
                        {profile.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSearch;