import React from 'react';
import { 
  Wind, 
  Droplets, 
  Flame, 
  Fan, 
  Tv, 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

/**
 * Clean SVG components for specific appliances to ensure 100% reliable icon rendering
 */
const FridgeIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="5" y1="10" x2="19" y2="10" />
    <line x1="9" y1="5" x2="9" y2="7" />
    <line x1="9" y1="14" x2="9" y2="17" />
  </svg>
);

const WasherIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <circle cx="12" cy="13" r="5" />
    <line x1="12" y1="11" x2="12" y2="15" />
    <circle cx="8" cy="5" r="1" fill="currentColor" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <circle cx="16" cy="5" r="1" fill="currentColor" />
  </svg>
);

const MicrowaveIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <rect x="4" y="7" width="11" height="10" rx="1" />
    <circle cx="18" cy="8" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <line x1="17" y1="16" x2="19" y2="16" />
  </svg>
);

/**
 * ServiceIcon map
 */
export default function ServiceIcon({ name, className = "w-6 h-6", ...props }) {
  switch (name?.toLowerCase()) {
    case 'wind':
    case 'ac':
      return <Wind className={className} {...props} />;
    case 'refrigerator':
    case 'fridge':
      return <FridgeIcon className={className} {...props} />;
    case 'washingmachine':
    case 'washer':
    case 'washing-machine':
      return <WasherIcon className={className} {...props} />;
    case 'droplets':
    case 'ro':
      return <Droplets className={className} {...props} />;
    case 'flame':
    case 'geyser':
      return <Flame className={className} {...props} />;
    case 'fan':
    case 'chimney':
      return <Fan className={className} {...props} />;
    case 'tv':
      return <Tv className={className} {...props} />;
    case 'microwave':
      return <MicrowaveIcon className={className} {...props} />;
    case 'wrench':
    case 'general':
      return <Wrench className={className} {...props} />;
    case 'sparkles':
      return <Sparkles className={className} {...props} />;
    case 'shield':
    case 'shieldcheck':
      return <ShieldCheck className={className} {...props} />;
    case 'clock':
      return <Clock className={className} {...props} />;
    case 'check':
    case 'checkcircle':
      return <CheckCircle2 className={className} {...props} />;
    case 'alert':
      return <AlertCircle className={className} {...props} />;
    default:
      return <Wrench className={className} {...props} />;
  }
}
