import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">서비스 준비 중</h2>
        <p className="text-gray-500 text-center max-w-md">
          {title} 기능은 현재 준비 중입니다. <br /> 곧 더 좋은 서비스로 찾아뵙겠습니다.
        </p>
      </div>
    </div>
  );
};

export const SubjectExploration = () => <PlaceholderPage title="교과목 탐색" />;
export const Mentoring = () => <PlaceholderPage title="멘토링" />;
export const CareerSetting = () => <PlaceholderPage title="진로설정" />;
