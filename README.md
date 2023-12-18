## Usage

Open the index.html file in a web browser.

## How It Works

The program will prompt you to enter the student's marks.
Enter a valid numeric value between 0 and 100.
The program will calculate and display the corresponding grade.

## Additional Notes

The program performs input validation to ensure that the entered value is a valid number between 0 and 100.
If an invalid input is detected, the user will be alerted, and the program will not proceed with grade calculation.
<hr><hr>


# Net Salary Calculator

This is a simple web-based application to calculate an individual's Net Salary based on the provided basic salary and benefits. The calculator takes into account Payee (Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

## Usage

1. Open the `index.html` file in a web browser.
2. Fill in the required information:
   - Basic Salary: Enter the individual's basic salary.
   - Benefits: Enter any additional benefits.
3. Click the "Calculate Net Salary" button.
4. The calculated salary details will be displayed on the page.

## How It Works

The calculation is based on the following components:
- **Gross Salary:** Sum of Basic Salary and Benefits.
- **Payee (Tax):** Calculated based on the provided KRA tax values.
- **NHIF Deductions:** Calculated based on the provided NHIF values.
- **NSSF Deductions:** Calculated based on the provided NSSF values.
- **Net Salary:** Gross Salary minus Payee, NHIF, and NSSF deductions.

## Additional Notes

- This calculator uses dummy values for KRA, NHIF, and NSSF. Replace the placeholder values with the actual values.
- The actual calculation logic is in the JavaScript section of the HTML file.

Feel free to customize the application to meet your specific requirements.

<hr><hr>


# Demerit Points Calculator

This is a simple program that calculates demerit points based on the speed of a car.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter the car speed in the input field.
3. Click the "Calculate Demerit Points" button.

## Rules

- If the speed is less than 70, it will display "Ok."
- For every 5 km/s above the speed limit (70), it will give the driver one demerit point.
- The total demerit points will be displayed.
- If the driver gets more than 12 points, the program will print "License suspended."

## Example

- Entering a speed of 80 will display "Points: 2" (2 points for exceeding the speed limit by 10 km/s).





