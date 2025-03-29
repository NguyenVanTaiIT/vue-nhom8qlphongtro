# Rental Management System
![Screenshot 2025-03-29 121151](https://github.com/user-attachments/assets/32f2ef80-3100-4459-99b8-1c31bbc247e3)
![Screenshot 2025-03-29 121158](https://github.com/user-attachments/assets/b0045fa0-30ab-46f7-bc58-d6167184182d)
![Screenshot 2025-03-29 121232](https://github.com/user-attachments/assets/0e79cd3e-9eb5-40c1-8e18-4cea8566449c)
![Screenshot 2025-03-29 121104](https://github.com/user-attachments/assets/6616cb4d-57b6-4d9e-b26f-5b14617d1e97)


## Overview
The **Rental Management System** is a Vue.js-based web application designed to streamline the management of rental properties. This system provides an intuitive interface for administrators and tenants, ensuring seamless management of rooms, invoices, payments, and utilities.

## Features

### 1. Email Notifications
- Automatically send invoices to tenants via email.
- Ensure timely reminders for due payments.

### 2. Direct Payment Support
- Allow tenants to make direct payments for deposits and monthly rent.
- Secure and convenient payment processing.

### 3. JWT Authentication & Authorization
- Secure authentication using JSON Web Token (JWT).
- Role-based access control for administrators and tenants.

### 4. Customer Portal
- Tenants can book rooms, view invoices, and make payments.
- User-friendly dashboard to track rental details.

### 5. Revenue & Reports
- Track investments, profits, and tenant deposits.
- Generate detailed financial reports for better decision-making.

### 6. Property & Billing Management
- Manage rooms, invoices, and tenants efficiently.
- Monitor electricity and water usage for accurate billing.

## Technology Stack
- **Frontend:** Vue.js, Vue Router, Vuex
- **Styling:** HTML, CSS, Bootstrap, FontAwesome
- **Scripting:** JavaScript
- **HTTP Requests:** Axios
- **Backend:** Spring Boot (RESTful API) [GitHub Backend Repo](https://github.com/HuyBui111/DACN.github.io.git)
- **Database:** MySQL
- **Authentication:** JWT
- **Email Service:** Nodemailer / SendGrid
- **Payment Gateway:** VnPay

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version)
- Vue CLI
- MySQL

### Steps
1. Clone the frontend repository:
   ```sh
   git clone https://github.com/NguyenVanTaiIT/vue-nhom8qlphongtro.git
   cd rental-management-frontend
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Set up API base URL, authentication keys, and other required settings.

4. Start the frontend development server:
   ```sh
   npm run serve
   ```

5. Access the application at `http://localhost:3000`

## Usage
- **Admin Panel:** Manage rooms, tenants, invoices, and reports.
- **Tenant Portal:** View bookings, invoices, and make payments.

## Key Frontend Technologies
- **HTML**: Structure the web pages.
- **CSS**: Style and enhance UI components.
- **JavaScript**: Handle dynamic content and interactions.
- **Vue.js**: Core framework for building the application.
- **Vue Router**: Manage navigation and routing between pages.
- **Vuex**: State management for global data handling.
- **Axios**: Handle HTTP requests and interact with the backend API.
- **Bootstrap**: Responsive UI design and pre-styled components.
- **FontAwesome**: Icon library for a modern user interface.

## Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes and push the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact **vtai7287@gmail.com**.

