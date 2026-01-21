# AppointmentEase

A simple, client-side web application designed to demonstrate the core functionality of an appointment booking and management system. Built entirely with **HTML, CSS, and Vanilla JavaScript**, AppointmentEase allows users to book, view, reschedule, and cancel appointments directly within their browser, utilizing `localStorage` for data persistence.

## ✨ Features

AppointmentEase provides a straightforward and intuitive user experience for managing personal appointments:

*   **Easy Booking:** A dedicated form (`book.html`) to schedule new appointments with details like service type, date, and time.
*   **Appointment Management:** A "My Appointment" page (`appointments.html`) where users can view all scheduled bookings.
*   **Reschedule Functionality:** Users can easily edit the date and time of existing appointments.
*   **Cancellation:** Simple one-click option to cancel and remove appointments.
*   **Local Data Storage:** All appointment data is stored securely in the browser's `localStorage`, requiring no backend server or database.
*   **Pre-defined Services:** Includes a variety of service categories such as Medical Consultation, Personal Training, and Academic Tutoring.

## 💻 Technology Stack

This project is a purely front-end application, focusing on core web technologies:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5 | Provides the structural foundation for all pages. |
| **Styling** | CSS3 | Custom, modular styling for a clean and modern interface. |
| **Logic** | Vanilla JavaScript | Handles all client-side logic, including form submission, data manipulation, and DOM updates. |
| **Data Storage** | Browser `localStorage` | Used for persisting appointment data across browser sessions. |

## 🚀 Getting Started

Since AppointmentEase is a static web application, getting it up and running is very simple.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Edge, Safari, etc.).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mohammad-abu-haded/Appointment_Ease.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Appointment_Ease
    ```
3.  **Open the application:**
    Simply open the `index.html` file in your web browser.
    ```bash
    # Example command (may vary by OS)
    open index.html
    ```

## ⚠️ Important Note on Data Persistence

This application uses the browser's **`localStorage`** to save appointment data. This means:

1.  **Data is Local:** Your appointments are only stored on the specific device and browser you used to create them.
2.  **No Server Sync:** Data is **not** synchronized across different devices or browsers.
3.  **Data Loss Risk:** Clearing your browser's local storage or cache will permanently delete all your saved appointments.

For a production application, a proper backend and database would be required for secure and persistent data storage.

## 📂 Project Structure

The repository is organized for clarity and maintainability:

```
Appointment_Ease/
├── appointments.html     # Page to view and manage existing appointments
├── book.html             # Page for booking a new appointment
├── contact.html          # Contact information page
├── index.html            # Homepage and entry point
├── imgs/                 # Contains all SVG icons and images
├── script/
│   ├── appointments.js   # Logic for viewing, editing, and deleting appointments
│   ├── book.js           # Logic for handling new appointment submissions
│   └── contact.js        # (Placeholder/utility script for contact page)
└── style/
    ├── appointments.css  # Styling for the appointments page
    ├── book.css          # Styling for the booking page
    ├── contact.css       # Styling for the contact page
    ├── header.css        # Shared styling for the navigation header
    └── home.css          # Styling for the homepage
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
