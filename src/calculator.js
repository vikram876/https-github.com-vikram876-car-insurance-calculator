export function calculateCarInsurance({ carYear, carValue, driverAge, experience, coverageType, claims }) {
  // Base rate calculation (0.04% of car value)
  let baseRate = carValue * 0.04;

  // Age factor
  let ageFactor = 1.0;
  if (driverAge < 25) ageFactor = 1.3;
  else if (driverAge < 40) ageFactor = 1.0;
  else if (driverAge < 65) ageFactor = 0.9;
  else ageFactor = 1.1;

  // Experience factor
  let experienceFactor = Math.max(0.7, 1 - (experience * 0.02));

  // Car age factor
  const carAge = new Date().getFullYear() - carYear;
  let carAgeFactor = 1.0;
  if (carAge > 10) carAgeFactor = 1.2;
  else if (carAge > 5) carAgeFactor = 1.1;

  // Coverage type factor
  let coverageFactor = 1.0;
  switch (coverageType) {
    case 'basic': coverageFactor = 1.0; break;
    case 'comprehensive': coverageFactor = 1.3; break;
    case 'premium': coverageFactor = 1.5; break;
  }

  // Claims factor
  const claimsFactor = 1 + (claims * 0.2);

  // Calculate annual premium
  const annualPremium = baseRate * ageFactor * experienceFactor * carAgeFactor * coverageFactor * claimsFactor;
  const monthlyPremium = annualPremium / 12;

  return {
    monthlyPremium,
    annualPremium
  };
}
