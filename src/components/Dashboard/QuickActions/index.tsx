import React from 'react';
import QuickActionCard from './QuickActionCard';
import { quickActions } from './quickActionsConfig';

export default function QuickActions() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.name}
            {...action}
          />
        ))}
      </div>
    </div>
  );
}