import React from 'react';
import { useNavigate } from 'react-router-dom';
import schoolBg from '../assets/school.png'; // src/assets/school.png 이미지 임포트

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${schoolBg})` }} // 배경 이미지 적용
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-90 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-violet-600">UniFit 로그인</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
            <input
              type="email"
              placeholder="example@univ.ac.kr"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition duration-200"
          >
            로그인
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          계정이 없으신가요? <span className="text-violet-500 cursor-pointer">회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default Login;