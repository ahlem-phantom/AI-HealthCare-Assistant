# 🏥 NearestDoctor: The Future of AI-Powered Healthcare

> **Empowering Patients and Doctors with Next-Gen Intelligence.** 
> NearestDoctor is a premium, full-stack healthcare ecosystem designed to bridge the gap between AI diagnostics, secure medical records, and seamless patient-doctor interactions.

---

## ✨ Key Features

### 🧠 AI-Powered Diagnostics
- **Radiology Analysis**: Upload X-rays for instant, ML-driven detection of conditions like COVID-19, Pneumonia, and Tuberculosis (via TensorFlow.js).
- **Symptom Checker**: Intelligent questionnaires and diagnostic tools to triage health concerns before you even book an appointment.

### 🎙️ Voice-Activated Intelligence
- **Alan AI Integration**: A fully interactive voice assistant that helps you navigate the platform, check your symptoms, or book appointments with simple voice commands.

### 🔐 Secure & Immutable Records
- **Blockchain Foundation**: Medical records are stored with high-security standards, ensuring patient data remains private, immutable, and accessible only to authorized personnel.
- **Dossier Management**: Comprehensive "Add Action" forms for medications, allergies, laboratory results, and hereditary history.

### 📅 Seamless Scheduling
- **Dynamic Calendar**: Doctors can manage their availability via an interactive calendar with real-time appointment updates.
- **Instant Booking**: Patients can browse verified doctors, view detailed profiles, and book slots in seconds.

### 🛍️ Integrated Health Shop
- **Medical Equipment**: A dedicated shop for professional medical instruments with a premium, optimized checkout experience via Stripe.

---

## 🚀 Tech Stack

- **Frontend**: React 18 (Hooks, Context, Redux)
- **Styling**: Tailwind CSS (Utility-first, purely responsive)
- **Voice AI**: Alan AI SDK
- **Machine Learning**: TensorFlow.js / Google Cloud Dialogflow
- **Payments**: Stripe API
- **Visualization**: ApexCharts & React Big Calendar
- **State Management**: Redux & Redux-Thunk
- **Imaging**: p5.js for interactive UI elements

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nearest-doctor-front.git
   cd nearest-doctor-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root and add your API keys:
   ```env
   REACT_APP_STRIPE_KEY=your_stripe_key
   REACT_APP_ALAN_KEY=your_alan_key
   ```

4. **Run the development server**
   ```bash
   npm start
   ```

---

## 📂 Project Structure

```text
src/
├── assets/          # Global images, icons, and fonts
├── components/      # Reusable UI (Auth, Chat, Records, Common)
├── layout/          # DashboardHeaders, Footers, and Navbars
├── pages/           # Route-specific views (Patient, Doctor, Auth, Public)
├── services/        # API and Authentication services (AuthService)
├── store/           # Redux actions and reducers
└── routes.js        # Global route configuration
```

---

## 🎨 Design Philosophy

NearestDoctor follows a **Premium Glassmorphism** aesthetic. Key principles include:
- **Depth**: Soft shadows and layered transparency.
- **Clarity**: High-contrast typography (Inter/Outfit) and vibrant accent colors (Sky Blue/Indigo).
- **Responsive**: Mobile-first architecture with smooth transitions.
- **Tailwind Only**: No external CSS files; 100% utility-driven styling for maximum performance.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ for a healthier tomorrow.
</p>
