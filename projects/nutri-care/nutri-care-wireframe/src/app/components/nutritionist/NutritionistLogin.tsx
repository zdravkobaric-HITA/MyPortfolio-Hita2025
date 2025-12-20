import { Link, useNavigate } from 'react-router-dom';

export function NutritionistLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        {/* Wireframe Box */}
        <div className="border-4 border-gray-800 bg-white p-8">
          <div className="text-center mb-8">
            <div className="border-2 border-gray-400 bg-gray-200 h-12 flex items-center justify-center mb-4">
              <span className="text-sm uppercase tracking-wide">Logo Placeholder</span>
            </div>
            <h1 className="text-2xl uppercase tracking-wide mb-2">Nutritionist Login</h1>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Email</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <span className="text-gray-500 text-sm">email@example.com</span>
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Password</label>
              <div className="border-2 border-gray-400 bg-gray-100 h-12 flex items-center px-3">
                <span className="text-gray-500 text-sm">••••••••</span>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => navigate('/nutritionist/onboarding')}
            className="w-full border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700 mb-4"
          >
            Login
          </button>

          {/* SSO Options */}
          <div className="space-y-3">
            <button className="w-full border-2 border-gray-400 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-100">
              Continue with Google
            </button>
            <button className="w-full border-2 border-gray-400 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-100">
              Continue with Apple
            </button>
          </div>

          {/* Link to Patient Login */}
          <div className="mt-6 text-center">
            <Link to="/patient/login" className="text-sm underline">
              Patient Login →
            </Link>
          </div>
        </div>

        {/* Annotation */}
        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Nutricionista može koristiti SSO ili email login.
          </p>
        </div>
      </div>
    </div>
  );
}
