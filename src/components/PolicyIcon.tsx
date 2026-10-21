import React from 'react';
import {
  Layers,
  Landmark,
  Sliders,
  Award,
  Database,
  Map,
  TrendingUp,
  GitBranch,
  Cpu,
  Search,
  CheckCircle2,
  Users,
  Server,
  RefreshCw,
  Building2,
  Scale,
  ShieldCheck,
  FileCheck2,
  MapPin,
  CalendarClock,
  Sparkles,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface PolicyIconProps extends LucideProps {
  name: string;
}

export const PolicyIcon: React.FC<PolicyIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Layers':
      return <Layers {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'Sliders':
      return <Sliders {...props} />;
    case 'Award':
      return <Award {...props} />;
    case 'Database':
      return <Database {...props} />;
    case 'Map':
      return <Map {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'GitBranch':
      return <GitBranch {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'SearchCheck':
      return <Search {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'Server':
      return <Server {...props} />;
    case 'RefreshCw':
      return <RefreshCw {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'FileCheck2':
      return <FileCheck2 {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'CalendarClock':
      return <CalendarClock {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
