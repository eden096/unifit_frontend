import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loginPageImg from '../assets/login_page.png';
import unifitLogin from '../assets/unifit_login.png';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 전체 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img 
          src={loginPageImg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* 배경 어둡게 처리 (가독성 확보) */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 w-full max-w-md px-4 flex flex-col items-center">
        
        {/* 상단 로고 (클릭 시 메인으로 이동) */}
        <Link to="/" className="mb-20 hover:opacity-90 transition-opacity">
          <img 
            src={unifitLogin} 
            alt="UniFit" 
            className="h-24 object-contain drop-shadow-lg" 
          />
        </Link>

        {/* 로그인 박스 (Glassmorphism, 531x282 size) */}
        <div 
          className="w-[531px] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/50 flex flex-col justify-center"
          style={{ minHeight: '282px' }}
        >
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="이메일 (example@univ.ac.kr)"
                className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all bg-white/50 hover:bg-white"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all bg-white/50 hover:bg-white"
                required
              />
            </div>
            
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 px-1 pt-1">
              <label className="flex items-center cursor-pointer hover:text-gray-800 transition-colors">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                로그인 상태 유지
              </label>
              <button type="button" className="text-violet-600 font-semibold hover:underline">
                아이디/비밀번호 찾기
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-[1.01] shadow-lg shadow-violet-200 active:scale-95"
            >
              로그인
            </button>
          </form>

          <div className="mt-4 text-center text-gray-600 text-sm">
            계정이 없으신가요?{' '}
            <button type="button" className="text-violet-600 font-bold hover:underline ml-1">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;