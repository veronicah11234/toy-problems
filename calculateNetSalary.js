 function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    document.getElementById('result').innerHTML = `
      <h2>Salary Details</h2>
      <p>Gross Salary: ${salaryDetails.grossSalary}</p>
      <p>Payee (Tax): ${salaryDetails.payee}</p>
      <p>NHIF Deductions: ${salaryDetails.nhifDeductions}</p>
      <p>NSSF Deductions: ${salaryDetails.nssfDeductions}</p>
      <p>Net Salary: ${salaryDetails.netSalary}</p>
    `;
  }

  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    let payee = 0;
    let nhifDeductions = 0;
    let nssfDeductions = 0;

    switch (true) {
      case grossSalary <= 24000:
        payee = 0.1 * grossSalary;
        nhifDeductions = 0.05 * grossSalary;
        nssfDeductions = 0.06 * grossSalary;
        break;
      case grossSalary <= 40000:
        payee = 0.2 * grossSalary;
        nhifDeductions = 0.1 * grossSalary;
        nssfDeductions = 0.08 * grossSalary;
        break;
      default:
        payee = 0.3 * grossSalary;
        nhifDeductions = 0.15 * grossSalary;
        nssfDeductions = 0.1 * grossSalary;
        break;
    }

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
