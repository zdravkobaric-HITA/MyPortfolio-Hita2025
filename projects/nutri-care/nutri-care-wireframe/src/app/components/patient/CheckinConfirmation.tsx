import { useNavigate } from 'react-router-dom';

export function CheckinConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="border-4 border-gray-800 bg-white p-12 text-center">
          {/* Success Icon Placeholder */}
          <div className="mb-6 flex justify-center">
            <div className="border-4 border-gray-800 w-24 h-24 rounded-full flex items-center justify-center">
              <div className="text-4xl">✓</div>
            </div>
          </div>

          <h1 className="text-2xl uppercase tracking-wide mb-4">Check-in Saved!</h1>
          <p className="text-gray-600 mb-8">
            Your daily check-in has been recorded successfully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate('/patient/daily-plan')}
              className="border-2 border-gray-400 bg-white h-14 uppercase tracking-wide hover:bg-gray-100"
            >
              View Full Plan
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Jasna povratna informacija da je unos spremljen.
          </p>
        </div>
      </div>
    </div>
  );
}
