import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import TeamSearch from './pages/TeamSearch';
import { SubjectExploration, Mentoring, CareerSetting } from './pages/PlaceholderPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 (사이드바 없음) */}
        <Route path="/login" element={<Login />} />
        
        {/* 메인 레이아웃 (사이드바 포함) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="team-search" element={<TeamSearch />} />
          <Route path="subjects" element={<SubjectExploration />} />
          <Route path="mentoring" element={<Mentoring />} />
          <Route path="career" element={<CareerSetting />} />
          {/* 정의되지 않은 경로는 메인으로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;