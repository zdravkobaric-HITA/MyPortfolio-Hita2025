import { useNavigate } from 'react-router-dom';

const mockPatients = [
  { id: 1, name: 'Marko Horvat', goal: 'Weight Loss', lastCheckIn: '2 days ago' },
  { id: 2, name: 'Ana Novak', goal: 'Muscle Gain', lastCheckIn: '1 day ago' },
  { id: 3, name: 'Petra Kralj', goal: 'Maintenance', lastCheckIn: 'Today' },
  { id: 4, name: 'Ivan Babić', goal: 'Weight Loss', lastCheckIn: '3 days ago' },
];

export function NutritionistDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-4 border-gray-800 bg-white p-6 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl uppercase tracking-wide">Dashboard</h1>
            <button
              onClick={() => navigate('/nutritionist/add-patient')}
              className="border-4 border-gray-800 bg-gray-800 text-white px-6 py-3 uppercase tracking-wide hover:bg-gray-700"
            >
              + Add Patient
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border-2 border-gray-400 bg-gray-100 p-6">
            <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Quick Action</p>
            <button className="w-full border-2 border-gray-800 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-50">
              Create Diet Plan
            </button>
          </div>
          <div className="border-2 border-gray-400 bg-gray-100 p-6">
            <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Quick Action</p>
            <button className="w-full border-2 border-gray-800 bg-white h-12 uppercase tracking-wide text-sm hover:bg-gray-50">
              View Analytics
            </button>
          </div>
        </div>

        {/* Patient List */}
        <div className="border-4 border-gray-800 bg-white p-6">
          <h2 className="text-xl uppercase tracking-wide mb-4">Patients</h2>
          
          <div className="space-y-3">
            {mockPatients.map((patient) => (
              <div
                key={patient.id}
                onClick={() => navigate(`/nutritionist/patient/${patient.id}`)}
                className="border-2 border-gray-400 bg-gray-50 p-4 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="uppercase tracking-wide mb-1">{patient.name}</p>
                    <p className="text-sm text-gray-600">Goal: {patient.goal}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Last check-in:</p>
                    <p className="text-sm">{patient.lastCheckIn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Centralni hub za upravljanje pacijentima.
          </p>
        </div>
      </div>
    </div>
  );
}
