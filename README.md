# ⚛️ Thrift-Shop (PreLoved Gems)
Welcome to the Thrift Shop Web Application! This web application is designed to provide a platform for users to buy and sell second-hand items easily.

## Sample images
![image](https://github.com/rohan-2702/olx/assets/141563537/bd1823f7-a581-4602-80dd-3c33a52c8272)

## Features

- **User Authentication**: Users can sign up and log in securely to access the platform.
- **Product Listings**: Users can list items they want to sell, including descriptions and images.
- **Search Functionality**: Users can search for specific items based on categories, keywords, or other filters.
- **Shopping Cart**: Users can add items to their cart for later purchase.
- **Checkout Process**: Users can securely checkout and make payments for their purchases.
- **Messaging System**: Buyers and sellers can communicate securely through an integrated messaging system.
- **User Profiles**: Each user has a profile where they can manage their listings, purchases, and personal information.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: Firebase Realtime Database, Firebase Authentication
- **Authentication**: Firebase Authentication
- **Image Storage**: Firebase Storage
- **Messaging**: Firebase Cloud Messaging

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/thrift-shop-web-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd thrift-shop-web-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Set up Firebase Authentication and Realtime Database for the project.
   - Obtain your Firebase configuration details.

5. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=3000
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_DATABASE_URL=your_firebase_database_url
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   Replace `your_firebase_api_key`, `your_firebase_auth_domain`, etc. with your Firebase project's details and `your_stripe_secret_key` with your Stripe secret key.

6. Start the development server:

   ```bash
   npm start
   ```

7. Visit `http://localhost:3000` in your web browser to access the application.

## Live Server Link

- The application is hosted on a live server. You can access it (🚀Live- https://olx-three.vercel.app/).

## Project Contributors

- **Amar Sharma**
  - LinkedIn: [Amar Sharma](https://www.linkedin.com/in/amarsharma30/)
- **Rohan Chintalwar**
  - LinkedIn: [Rohan Chintalwar](https://www.linkedin.com/in/rohan-chintalwar/)
- **Mayur Nair**
  - LinkedIn: [Mayur Nair](https://www.linkedin.com/in/mayurnair28/)
- **Omkar Patil**
  - LinkedIn: [Omkar Patil](https://www.linkedin.com/in/omkar0808/)
- **Yug Jain**
  - LinkedIn: [Yug Jain](https://www.linkedin.com/in/yug-jain-2a6341251/)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
