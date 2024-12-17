

# **Travel Booking System**

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to explore travel packages, make bookings, and manage bookings via an admin panel.

---

## **Project Description**

The Travel Agency Booking System allows users to browse available travel packages, view details, and book their desired tours. The system includes an **Admin Dashboard** for managing packages, such as adding, updating, or deleting packages. It also features seamless integration with a database for storing and retrieving package details.

---

## **Technologies Used**

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Deployment**: Render 

---

## **Setup Instructions**

Follow these steps to set up and run the project locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/asmit137/Travel-booking-system.git
cd Travel-booking-system
```

### 2. **Setup Backend (Server)**

1. Navigate to the backend folder:
   ```bash
   cd server
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables in the `server` directory:
   ```plaintext
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   ```

4. Start the server:
   ```bash
   npm start
   ```
   - The server will run on `http://localhost:5000`.

---

### 3. **Setup Frontend (Client)**

1. Navigate to the frontend folder:
   ```bash
   cd ../client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables in the `client` directory:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the React app:
   ```bash
   npm start
   ```
   - The app will run on `http://localhost:3000`.

---

### 4. **Run the Application**

After setting up both the frontend and backend:

- **Frontend** runs on `http://localhost:3000`.  
- **Backend** runs on `http://localhost:5000`.

Make sure the **MongoDB database** is running, and verify the API endpoints are working.

---

## **List of Implemented Features**

### **User Features**
1. **Explore Packages**: Browse all available travel packages.  
2. **View Package Details**: See detailed information like price, description, and available dates.  
3. **Booking System**: Users can book a tour from the provided options.

### **Admin Features**
1. **Add a Package**: Admin can add a new travel package.  
2. **Update a Package**: Admin can edit existing packages.  
3. **Delete a Package**: Admin can delete a travel package.  
4. **Form Validation**: Ensures that all required fields are filled correctly.

### **General**
- **API Integration**: Backend REST API for CRUD operations.  
- **Responsive Design**: Designed using Tailwind CSS for mobile and desktop views.  
- **Loading States**: Visual loading indicators during data fetching.  
- **Error Handling**: Alert messages for successful and failed operations.  

---

## **Deployment**

The project is deployed using **Vercel**:  
- **Frontend URL**: https://travel-booking-system-frontend.onrender.com  
- **Backend URL**: https://travel-booking-system-2ub1.onrender.com




---

## **Screenshots**

1. **Home Page**
   - Displays all travel packages in a grid layout.
2. **Admin Dashboard**
   - Forms for adding, updating, or deleting packages.

---

## **Future Enhancements**

- **User Authentication**: Add login/logout functionality for customers and admins.  
- **Booking History**: Allow users to view and manage their bookings.  
- **Payment Integration**: Integrate a payment gateway like Stripe.  

---

## **Contributing**

Contributions are welcome!  
- Fork the repository.  
- Create a new branch (`git checkout -b feature-name`).  
- Commit your changes (`git commit -m "Add feature"`).  
- Push to your branch (`git push origin feature-name`).  
- Create a Pull Request.  

---

## **License**

This project is licensed under the MIT License.  

---

## **Contact**

For any questions or collaboration, reach out:  
**Email**: [your-email@example.com](mailto:your-email@example.com)  
**GitHub**: [Your GitHub Profile](https://github.com/asmit137)

---

### Happy Coding! 🚀

---

Replace placeholders like `your-username`, `your-repo-name`, and `your-mongodb-uri` with the appropriate details. This README file provides a clean, professional overview of your project. Let me know if you need further customization!


