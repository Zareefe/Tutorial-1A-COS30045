# Appliance Energy Consumption Website

This is a small interactive website created as part of the **COS30045 – T1 (a) Lab Exercise**.  
The website demonstrates the use of **HTML, CSS, JavaScript, GitHub, and deployment via Vercel**.

---

## Live Website
[Visit the deployed site](https://tutorial-1-a-cos-30045.vercel.app/)  

---

## Project Structure
appliance-energy-website/
├── index.html # Home page
├── televisions.html # Televisions page
├── about.html # About Us page
├── style.css # CSS styling
├── script.js # JavaScript interactivity
├── PowerIcon.png # Logo
└── README.md # Project documentation


---

## Features
- **Three pages**: Home, Televisions, About Us  
- **Navigation bar**:
  - Switch between pages with JavaScript  
  - Power logo (top-left) returns to Home page  
  - Hover effect and active page highlight  
- **Footer**:
  - Includes year, name, and GenAI acknowledgement  
- **Styling**:
  - CSS file with consistent theme colors  
  - Table formatting for appliance data  
- **Placeholder content** about appliance energy consumption in the Australian market  

---

## Deployment
The project is deployed using **Vercel**:  

---

##  How to Run Locally
1. Clone this repository:
```bash
git clone https://github.com/your-username/appliance-energy-website.git
Open the project folder in Visual Studio Code.

Open index.html in your browser (or use the VS Code Live Server extension).

    GenAI Acknowledgement
This project was created by Muhd Zareefe.
Guidance, starter code, and documentation support were generated with the help of ChatGPT (OpenAI GenAI tool)



# T03: Communicating Data Insights
**Audience:** Retail Buyers – Australian Electronics Retailers  
**Project:** COS30045 Data Visualisation

---

## Data Story

This data story provides insights for **retail buyers** who need to understand the latest television market trends in Australia.  
Using cleaned and aggregated data from the Australian Government’s **Energy Rating Data for Household Appliances – Televisions**, this analysis highlights which screen technologies, sizes, and brands dominate the market, and how energy consumption relates to screen size and efficiency ratings.

---

## What Do Retail Buyers Want to Know?

| # | Question | Chart Type | Main Insight | How It Helps Retail Buyers |
|---|-----------|-------------|---------------|-----------------------------|
| **1** | What type of TV screen technologies are currently available in Australia and which are the most frequent? | Bar Chart / Pie Chart | LED TVs dominate the market, followed by OLED and QLED. | Helps identify which display technologies are most popular and profitable for bulk stock orders. |
| **2** | What screen sizes are currently available, and which are the most frequent? | Bar Chart / Histogram | 55-inch TVs are the most common, followed by 43-inch and 65-inch models. | Helps determine which TV sizes have the highest consumer demand and guide inventory decisions. |
| **3** | Which brands have the greatest number of different models? | Horizontal Bar Chart | Samsung, LG, and Sony lead in model variety, followed by Hisense and TCL. | Guides brand partnerships and shelf space allocation for key market players. |
| **4** | Which type of screen technology consumes the least amount of power? | Grouped Bar Chart | LCD and LED TVs show the lowest average energy use, while OLED consumes more power. | Supports promoting energy-efficient products to eco-conscious customers. |
| **5** | What is the relationship between screen size and power use? | Scatter Plot | Power consumption increases with screen size, but technology affects efficiency levels. | Helps balance stock between popular large-screen models and energy-efficient smaller models. |
| **6** | What is the relationship between star rating and screen size? | Scatter Plot / Box Plot | Star ratings remain balanced; larger screens can still achieve high efficiency. | Allows retailers to highlight large TVs with strong energy ratings for premium markets. |
| **7 (Optional)** | Are there differences in power consumption between brands? | Bar Chart | Some brands (e.g., Hisense, LG) have more efficient models on average. | Useful for comparing energy efficiency across brands and marketing green product lines. |

---

## Key Insights Summary

- **LED TVs** dominate the market, providing reliable and efficient options.  
- **55-inch TVs** are the most frequently available and best-selling screen size.  
- **Samsung, LG, and Kogan** lead in market presence and model diversity.  
- **LCD and LED** are the most energy-efficient technologies.   
- **Power use correlates with screen size**, but many large TVs remain efficient with high star ratings.

---

## About the Data
- **Source:** Australian Government – [Energy Rating Data for Household Appliances (Televisions)](https://data.gov.au/).  
- **Processing:** Cleaned and analysed using KNIME. Duplicates removed, missing data handled, screen size converted from cm to inches, and grouped into categories.  
- **Privacy:** Contains no personal data — only public model and energy information.  
- **Accuracy & Limitations:** Reflects only registered products at time of data collection; may not cover all market models.  
- **Ethics:** Visualisations are intended to support sustainable retail decisions and inform public understanding.  

---

## AI Declaration
Some parts of this project (content writing, structure, and workflow guidance) were assisted by **ChatGPT (GPT-5, OpenAI)**.  
All analyses, chart creation, and data preparation were independently completed by the author using **KNIME** and **Excel**.

---

## License
© 2025 Muhd Zareefe – For academic purposes only.
