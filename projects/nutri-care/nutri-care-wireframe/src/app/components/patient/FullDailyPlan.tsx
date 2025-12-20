import { useNavigate } from 'react-router-dom';

export function FullDailyPlan() {
  const navigate = useNavigate();

  const meals = [
    {
      name: 'Breakfast',
      items: ['Oatmeal with berries', 'Green tea'],
      notes: 'Prepare the night before for convenience',
    },
    {
      name: 'Lunch',
      items: ['Grilled chicken (150g)', 'Mixed salad', 'Olive oil dressing'],
      notes: 'Can substitute chicken with turkey',
    },
    {
      name: 'Dinner',
      items: ['Salmon (120g)', 'Steamed broccoli', 'Quinoa (1 cup)'],
      notes: 'Cook salmon at 180°C for 15 minutes',
    },
    {
      name: 'Snacks',
      items: ['Greek yogurt (150g)', 'Handful of almonds'],
      notes: 'Consume between meals if hungry',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-4 border-gray-800 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl uppercase tracking-wide">Full Daily Plan</h1>
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="border-2 border-gray-400 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="space-y-6">
            {meals.map((meal, index) => (
              <div key={index} className="border-2 border-gray-400 bg-gray-50 p-6">
                <h3 className="text-lg uppercase tracking-wide mb-4">{meal.name}</h3>
                
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wide mb-2 text-gray-600">Items</p>
                  <ul className="space-y-2">
                    {meal.items.map((item, idx) => (
                      <li key={idx} className="border-2 border-gray-300 bg-white p-3 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {meal.notes && (
                  <div className="border-2 border-gray-300 bg-gray-100 p-3">
                    <p className="text-xs uppercase tracking-wide mb-1 text-gray-600">Notes</p>
                    <p className="text-sm">{meal.notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-gray-300 bg-gray-50">
          <p className="text-xs uppercase tracking-wide mb-1">Annotation:</p>
          <p className="text-sm text-gray-700">
            Pacijent samo pregledava plan – nema editiranja.
          </p>
        </div>
      </div>
    </div>
  );
}
