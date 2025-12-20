import { useNavigate, useParams } from 'react-router-dom';

export function PatientProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const patientData = {
    name: 'Marko Horvat',
    email: 'marko@example.com',
    goal: 'Weight Loss',
    startWeight: '95kg',
    currentWeight: '88kg',
    targetWeight: '80kg',
    startDate: '2024-01-15',
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-4 border-gray-800 bg-white p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl uppercase tracking-wide">{patientData.name}</h1>
            <button
              onClick={() => navigate('/nutritionist/dashboard')}
              className="border-2 border-gray-400 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              ← Back
            </button>
          </div>
          <p className="text-sm text-gray-600">{patientData.email}</p>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border-2 border-gray-400 bg-gray-50 p-6">
            <p className="text-xs uppercase tracking-wide mb-3 text-gray-600">Goal</p>
            <p className="text-lg">{patientData.goal}</p>
          </div>

          <div className="border-2 border-gray-400 bg-gray-50 p-6">
            <p className="text-xs uppercase tracking-wide mb-3 text-gray-600">Start Date</p>
            <p className="text-lg">{patientData.startDate}</p>
          </div>

          <div className="border-2 border-gray-400 bg-gray-50 p-6">
            <p className="text-xs uppercase tracking-wide mb-3 text-gray-600">Weight Progress</p>
            <p className="text-lg">{patientData.startWeight} → {patientData.currentWeight} (Target: {patientData.targetWeight})</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-4 border-gray-800 bg-white p-6">
          <p className="text-xs uppercase tracking-wide mb-4 text-gray-600">Actions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate(`/nutritionist/diet-plan/${id}`)}
              className="border-4 border-gray-800 bg-gray-800 text-white h-14 uppercase tracking-wide hover:bg-gray-700"
            >
              Create Diet Plan
            </button>
            <button
              onClick={() => navigate(`/nutritionist/analytics/${id}`)}
              className="border-2 border-gray-400 bg-white h-14 uppercase tracking-wide hover:bg-gray-100"
            >
              View Analytics
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Ulazna točka za planiranje i praćenje rezultata.
          </p>
        </div>
      </div>
    </div>
  );
}
