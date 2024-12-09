import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export default function QuickActionCard({
  name,
  description,
  icon: Icon,
  href,
  color
}: QuickActionCardProps) {
  return (
    <Link
      to={href}
      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className={`p-3 rounded-full ${color} text-white mb-3`}>
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-medium text-gray-900 text-center">{name}</h4>
      <p className="text-xs text-gray-500 text-center mt-1">
        {description}
      </p>
    </Link>
  );
}