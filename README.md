# 🍽️ Salary Invoice Generator for Local Restaurants

## A Story Behind This Project

Every month, my dad would sit at the dining table with stacks of restaurant data and employee information, manually calculating and generating salary slips for each worker. With multiple local restaurants to handle, it was a time-consuming and error-prone process — and I knew there had to be a better way.

So, as a developer and a son, I decided to make things simpler for him.

## 💡 The Idea

Instead of repeating the same steps over and over each month, why not create a simple web application where my dad could just upload a CSV file with all the necessary details, and the app would take care of the rest?

And that’s exactly what I built — a lightweight ReactJS app that does just that.

## 🔧 How It Works

1. **Upload a CSV File**  
   My dad uploads a CSV file containing restaurant names, employee details, salary info, and dates.

2. **Parse the CSV using PapaParse**  
   The app uses the [`papaparse`](https://www.npmjs.com/package/papaparse) library to read and convert the CSV content into structured data.

3. **Generate Salary PDFs with react-pdf**  
   For each employee in the file, the app creates a simple but clear salary invoice using [`@react-pdf/renderer`](https://react-pdf.org/). All invoices are then bundled and available for download in one go.

4. **Print or Share**  
   The final PDF is easy to print or share via email, saving time and effort every single month.

## 🛠️ Tech Stack

- **ReactJS** – Frontend framework
- **PapaParse** – For reading and parsing CSV files
- **@react-pdf/renderer** – For dynamically generating PDF invoices

## 📂 Sample CSV Format

Here's what the CSV is expected to look like:

```csv
Sl No,Restaurant Name,Address,Name,Mobile No,Month,Payment Mode,Amount,Payment Date
1, Spice Villa,Bengaluru,Ravi Kumar,1234567890,April,UPI,18000,29-04-2025
2, Spice Villa,Bengaluru,Sunitha Kumar,1234567890,April,UPI,20000,30-04-2025
1, Tandoori Treats,Bengaluru,Hemanth Kumar,1234567890,April,UPI,18000,30-05-2025