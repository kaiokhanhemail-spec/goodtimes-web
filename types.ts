export interface PricingTier {
  id: string;
  duration: string;
  price: number;
  label: string;
  features: string[];
  recommended?: boolean;
}

export const PRICING_DATA: PricingTier[] = [
  {
    id: '3day',
    duration: '3 Days',
    price: 8,
    label: 'Trial',
    features: ['Access the private group', 'Get the latest information', '24/7 support', 'Join now'],
    recommended: false
  },
  {
    id: '1week',
    duration: '1 Week',
    price: 20,
    label: 'Standard',
    features: ['Access the private group', 'Get the latest information', '24/7 support', 'Join now'],
    recommended: false
  },
  {
    id: '2weeks',
    duration: '2 Weeks',
    price: 35,
    label: 'Popular',
    features: ['Access the private group', 'Get the latest information', '24/7 support', 'Join now'],
    recommended: true
  },
  {
    id: '1month',
    duration: '1 Month',
    price: 50,
    label: 'Premium',
    features: ['Access the private group', 'Get the latest information', '24/7 support', 'Join now'],
    recommended: false
  }
];