import { calculateCarInsurance } from './calculator.js';

document.getElementById('carInsuranceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    carMake: this.carMake.value,
    carModel: this.carModel.value,
    carYear: parseInt(this.carYear.value),
    carValue: parseFloat(this.carValue.value),
    driverAge: parseInt(this.driverAge.value),
    experience: parseInt(this.experience.value),
    coverageType: this.coverageType.value,
    claims: parseInt(this.claims.value)
  };

  const { monthlyPremium, annualPremium } = calculateCarInsurance(formData);
  
  document.getElementById('monthlyPremium').textContent = `$${monthlyPremium.toFixed(2)}`;
  document.getElementById('annualPremium').textContent = `$${annualPremium.toFixed(2)}`;
  document.getElementById('result').classList.remove('hidden');
});
