# Job Search App

### Project Description

The Job Search App is a web application designed to simplify the job search process. It provides users with the ability to search for jobs using specific keywords and locations. Additionally, the app includes a feature to check historical salary data for different US states, offering valuable insights for job seekers.

### Target Browsers

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

### User Manual

#### How to Use the Job Search App

1. **Job Searching:**
   - Open `index.html` in your web browser.
   - Enter desired keywords and location in the search form.
   - Click 'Search' to view job listings based on your criteria.

2. **Checking Salaries:**
   - Navigate to the 'About' page.
   - Select a US state from the dropdown menu.
   - View the average salary chart for the selected state.

### Developer Manual

##### Prerequisites

- Node.js
- Basic understanding of HTML, CSS, and JavaScript
- Knowledge of Fetch API and working with external APIs

##### Installation

1. Clone the repository to your local machine.
2. No additional dependencies are required for running the app.

##### Running the Application

- Open the `index.html` file in a web browser to start using the application.

##### Application Structure

- `index.html`: Main page for job searching functionality.
- `about.html`: Page that includes historical salary data visualization.
- `styles.css` and `bar.css`: Contains the styling for the web pages.

### How to Install Your Application and All Dependencies

1. Use Git to clone the repository to your local machine.

git clone [(https://github.com/INST377-UMD/inst377-group-project-Danielmhkimz)]


2. Navigate to the project directory.

cd [project-directory]

* If the project uses Node.js and has a package.json file, install the necessary packages using npm *

### How to Run Your Application on a Server

For local development and testing:

1. Ensure Node.js is installed on your local machine.
2. Navigate to your project's root directory in the terminal.
3. If you haven't already, install the required Node.js dependencies with "npm install"
4. Run the server using Node.js with "node server.js"
5. The server will start on http://localhost:4000. Open this URL in a web browser to access your application.
   
#### API Integration

- **Adzuna API**: Used for fetching job listings and historical salary data.
- API Endpoints:
  - Job Search: `https://api.adzuna.com/v1/api/jobs/us/search/`
  - Salary Data: `https://api.adzuna.com/v1/api/jobs/us/history`

#### JavaScript Functions

- `chartSalary()`: Fetches and displays salary data on the "About" page.
- `populate(page)`: Fetches and displays job listings on the "Index" page.

#### Known Issues and Future Development

1. **Mobile Responsiveness:**
   - Optimize the application for mobile browsers, ensuring a responsive design that adapts to different screen sizes and devices.
   - Implement touch-friendly navigation and controls.

2. **Advanced Search Filters:**
   - Introduce more search filters such as job type (full-time, part-time), salary range, and experience level to help users refine their job search more effectively.

3. **User Accounts and Personalization:**
   - Develop a user account system allowing users to save job searches, bookmark listings, and receive personalized job recommendations.

4. **Interactive Salary Data Visualization:**
   - Enhance the salary chart feature on the 'About' page with interactive elements, like tooltips and the ability to compare salaries across different states or job titles.

### Contact for Contributions

Kimberly Escobar: esc.kimberly@outlook.com

Noel Christopher: ncchristopher19@gmail.com

Myung Heon Kim: audgjs789@gmail.com

