import { useNavigate, useParams } from 'react-router-dom';

export function AnalyticsOverview() {
  const navigate = useNavigate();
  const { patientId } = useParams();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="border-4 border-gray-800 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl uppercase tracking-wide">Analytics Overview</h1>
            <button
              onClick={() => navigate(`/nutritionist/patient/${patientId}`)}
              className="border-2 border-gray-400 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              ← Back
            </button>
          </div>

          {/* Graphs Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Weight Trend */}
            <div className="border-2 border-gray-400 bg-gray-50 p-6">
              <p className="text-xs uppercase tracking-wide mb-4 text-gray-600">Weight Trend</p>
              <div className="border-2 border-gray-300 bg-white h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-32 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                      <polyline
                        points="10,80 50,60 90,55 130,50 170,45"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                      />
                      <line x1="10" y1="10" x2="10" y2="90" stroke="#d1d5db" strokeWidth="1" />
                      <line x1="10" y1="90" x2="190" y2="90" stroke="#d1d5db" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Graph Placeholder</p>
                </div>
              </div>
            </div>

            {/* Adherence */}
            <div className="border-2 border-gray-400 bg-gray-50 p-6">
              <p className="text-xs uppercase tracking-wide mb-4 text-gray-600">Adherence</p>
              <div className="border-2 border-gray-300 bg-white h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">85%</div>
                  <p className="text-xs text-gray-500">Avg. Adherence</p>
                </div>
              </div>
            </div>

            {/* Activity Level */}
            <div className="border-2 border-gray-400 bg-gray-50 p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-wide mb-4 text-gray-600">Activity Level</p>
              <div className="border-2 border-gray-300 bg-white h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-32 relative flex items-end justify-center gap-4">
                    <div className="w-12 bg-gray-300" style={{ height: '60%' }} />
                    <div className="w-12 bg-gray-300" style={{ height: '80%' }} />
                    <div className="w-12 bg-gray-300" style={{ height: '70%' }} />
                    <div className="w-12 bg-gray-300" style={{ height: '90%' }} />
                    <div className="w-12 bg-gray-300" style={{ height: '75%' }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Bar Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="flex-1 border-2 border-gray-400 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-100">
              View Details
            </button>
            <button className="flex-1 border-2 border-gray-400 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-100">
              Message Patient
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Brzi uvid u napredak pacijenta i engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
