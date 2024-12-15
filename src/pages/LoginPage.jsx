import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import bgphoto from '../assets/dnahome.jpg'


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for checkbox
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');

      // Handle "remember me" functionality (e.g., store in local storage)
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true'); // Or a more secure method
      } else {
        localStorage.removeItem('rememberMe');
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center rounded-3xl">
       <div className="w-1/2 h-screen hidden lg:block"> {/*Image Div*/}
        <img
          src= {bgphoto}
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 text-black font-semibold font-mono">
        <h1 className="text-2xl font-semibold mb-4">Hesabına Giriş Yap</h1> {/*Heading*/}


        {error && ( 
        <div className="text-red-500 mb-4 text-center" role="alert">
            <span className="font-medium">Hata: Yanlış E-mail veya Şifre</span>
          </div>
        )}


        <form onSubmit={handleLogin}> {/* Form with onSubmit handler */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black"> {/*Email Input*/}
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:border-2"
              autoComplete="off"
              value={email} // Bind to email state
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-black">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:border-2"
              autoComplete="off"
              value={password} // Bind to password state
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={rememberMe} // Bind to rememberMe state
              onChange={(e) => setRememberMe(e.target.checked)} // Update rememberMe state
              className="text-red-500"
            />
            <label htmlFor="remember" className="text-gray-400 ml-2 text-sm">
              Beni hatırla
            </label>
          </div>
          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500 text-md">
            <a href="#" className="hover:underline"> {/*Forgot Password Link*/}
              Şifremi Unuttum?
            </a>
          </div>

          <button
            type="submit" // Make the button type "submit"
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Giriş Yap
          </button>
        </form>
      </div>

    </div>
  );
}

export default LoginPage;
