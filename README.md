# BitShort - URL Shortener

BitShort is a simple, user-friendly URL shortener project built using modern web technologies. This application takes long URLs and shortens them into more manageable links. It also provides seamless redirection to the original URLs when the short link is accessed.

---

## Features

- Shorten long URLs into manageable links.
- Quick and seamless redirection to the original URL.
- Dynamic and responsive design using CSS grid.
- Navbar for easy navigation.
- Professional design with animations for a smooth user experience.

---

## Technologies Used

- **Node.js**: Server-side runtime.
- **Express**: Web application framework.
- **Mongoose**: ODM for MongoDB.
- **EJS**: Templating engine for dynamic HTML rendering.
- **CSS Grid**: For creating modern layouts.
- **HTML5**: Structuring the web page.

---

## Installation

### Prerequisites

- Node.js installed on your system.
- MongoDB database set up and running locally or on a cloud provider.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bitshort.git
   cd bitshort
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure your environment variables (e.g., MongoDB connection string).

   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=3000
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

- Navigate to the homepage.
- Enter a long URL in the input field.
- Click "Shorten" to generate a short link.
- The short link will appear on the same page and can be copied or clicked to redirect.

---

## File Structure

```plaintext
bitshort/
├── controllers/
│   ├── url.js
├── models/
│   ├── Url.js
├── public/
│   ├── css/
│   │   ├── styles.css
├── views/
│   ├── index.ejs
├── .env
├── .gitignore
├── package.json
├── server.js
```

---

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

- Mpawank

---

## Contact

For any inquiries, please contact at:

- Email: mpawankumar356@gmail.com.com
- GitHub: [mpawank](https://github.com/mpawank)
