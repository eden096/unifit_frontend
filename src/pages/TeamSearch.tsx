import React from 'react';
import { Search } from 'lucide-react';

const TeamSearch: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">팀원 찾기</h1>
      
      {/* 검색 바 */}
      <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 mb-6 max-w-xl">
        <Search className="text-gray-400 w-5 h-5 mr-3" />
        <input 
          type="text" 
          placeholder="관심 분야, 기술 스택으로 검색해보세요 (예: React, 디자인)" 
          className="flex-grow outline-none text-gray-700"
        />
      </div>

      {/* 팀원 리스트 (더미 데이터) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold text-lg">김대학 {item}</h3>
                <p className="text-sm text-gray-500">컴퓨터공학과 3학년</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-violet-100 text-violet-800 text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
            </div>
            <button className="w-full border border-violet-600 text-violet-600 py-1.5 rounded hover:bg-violet-50 transition text-sm">
              프로필 보기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSearch;