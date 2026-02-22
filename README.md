<div align="center">
  <img src="https://user-images.githubusercontent.com/78981558/155504905-3bd2d8db-64f5-413c-b7d2-d4e7842ddad8.png" width="180" height="180" alt="NearestDoctor Logo"/>

  <h1>🏥 NearestDoctor - AI Healthcare Assistant</h1>

  <p><strong>Your intelligent, AI-powered companion for smarter, faster, and safer healthcare.</strong></p>

  <p>
    <a href="https://github.com/ahlem-phantom/AI-HealthCare-Assistant/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/ahlem-phantom/AI-HealthCare-Assistant.svg?style=for-the-badge"/>
    </a>
    <a href="https://github.com/ahlem-phantom/AI-HealthCare-Assistant/issues">
      <img src="https://img.shields.io/github/issues/ahlem-phantom/AI-HealthCare-Assistant.svg?style=for-the-badge"/>
    </a>
    <a href="https://github.com/ahlem-phantom/AI-HealthCare-Assistant/stargazers">
      <img src="https://img.shields.io/github/stars/ahlem-phantom/AI-HealthCare-Assistant.svg?style=for-the-badge"/>
    </a>
    <a href="https://github.com/ahlem-phantom/AI-HealthCare-Assistant/network/members">
      <img src="https://img.shields.io/github/forks/ahlem-phantom/AI-HealthCare-Assistant.svg?style=for-the-badge"/>
    </a>
    <a href="https://www.youtube.com/watch?v=Kxqa83Us1m4">
      <img src="https://img.shields.io/badge/Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Demo"/>
    </a>
  </p>

  <a href="https://www.youtube.com/watch?v=Kxqa83Us1m4&t=1s">
    <img src="https://img.youtube.com/vi/Kxqa83Us1m4/0.jpg" width="620" alt="Project Demo Video"/>
  </a>

  <br/>
  <em>▲ Click to watch the full demo</em>

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Achievements](#-achievements)
- [Contributing](#-contributing)
- [Team](#-team)
- [Acknowledgments](#-acknowledgments)

---

## 🧠 About The Project

**NearestDoctor** is a full-stack, AI-powered healthcare web application that bridges the gap between patients and medical professionals. It combines machine learning, blockchain, facial recognition, and natural language processing into a seamless platform that covers the entire patient journey from first symptom to secured medical record.

> 💡 *"Every patient deserves professional medical guidance, instantly and securely — no matter where they are."*

### The Problem

Despite advances in digital health, patients still face three core challenges:

- 🔍 **Finding the right doctor**: it's hard to know which specialist fits your symptoms.
- 📆 **Getting an appointment**: scheduling is manual, slow, and rarely location-aware.
- 🔐 **Securing medical records**: records are fragmented, inaccessible, and vulnerable to breaches.

NearestDoctor was designed from the ground up to solve all three.

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| 🤖 **AI Symptom Detection & Chatbot** | Patients chat with a **Dialogflow**-powered bot, describe symptoms, and receive an illness prediction with the right specialist recommendation. |
| 📍 **Location-Based Doctor Search** | Find the nearest doctor or first available appointment in real time. |
| 📅 **Smart Appointment Scheduling** | Book with the nearest doctor or earliest available slot directly through the chatbot flow. |
| 🔗 **Blockchain Medical Records** | Patient data is stored on **Ethereum** using smart contracts. Every update creates a verifiable, immutable transaction block. |
| 🫁 **X-Ray Lung Diagnosis** | Doctors upload chest X-rays; a **TensorFlow** pre-trained model predicts **COVID-19**, **tuberculosis**, or **pneumonia** in seconds. |
| 🧠 **Mental Health Test** | Patients take a guided quiz to assess their mental wellbeing, then receive a result and curated article suggestions. |
| 🪪 **Doctor Identity Verification** | Doctors verify their real identity using a national card ID processed through the **Nanonets AI OCR API** before they can register. |
| 🤳 **Multi-Mode Authentication** | Three login options: **LinkedIn OAuth**, **username/password**, or **Face ID** (TensorFlow deep learning model). |
| 📰 **Blogs & Web Scraping Search** | Doctors publish articles; an integrated web scraping engine lets users search for external medical content by keyword. |
| 🛒 **Paramedical E-Shop** | ML-based patient behavioral analysis drives personalized product recommendations. |
| 🎙️ **AI Voice Assistant** | **ALAN SDK** integration lets users navigate the platform entirely by voice commands. |
| 💳 **Integrated Payments** | **Stripe API** handles doctor subscription plans and patient service payments. |

---

## 🚀 Tech Stack

<div align="center">

<a href="https://reactjs.org/"><img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" width="80" height="80"/></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" width="80" height="80"/></a>
<a href="http://expressjs.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" title="ExpressJS" width="80" height="80"/></a>
<a href="https://www.python.org/"><img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original-wordmark.svg" title="Python" width="80" height="80"/></a>
<a href="https://flask.palletsprojects.com/"><img src="https://user-images.githubusercontent.com/78981558/177000805-0c23d775-7133-4dc9-b476-8826e3a6cda3.png" title="Flask" width="80" height="80"/></a>
<a href="https://www.mongodb.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" width="80" height="80"/></a>

</div>

<br/>

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React.js | v18 |
| Backend API | Node.js + Express.js | Node v16.13.1 / Express v4.17.1 |
| AI/ML Microservices | Python + Flask | Flask v2.1 |
| Database | MongoDB | v5.9.1 |
| Blockchain | Ethereum Smart Contracts | — |
| Face Recognition | TensorFlow (pre-trained deep learning model) | — |
| ID Card OCR | Nanonets AI API | — |
| Chatbot (Symptoms + Appointments) | Dialogflow | — |
| X-Ray Diagnosis | TensorFlow (pre-trained model) | — |
| Maps & Location | Google Maps API | — |
| Voice Assistant | ALAN SDK | — |
| Payments | Stripe API | — |
| OAuth | LinkedIn OAuth | — |
| Languages | JavaScript, Python, HTML5, CSS | — |

---

## 📐 Architecture

<div align="center">
  <img src="https://user-images.githubusercontent.com/78981558/155615523-4663648b-50a2-4e45-a67e-3685dd28206d.png" width="750" alt="Technical Architecture Diagram"/>
</div>

The platform follows a **microservices-inspired MERN architecture**:

- The **React.js frontend** communicates with the **Node/Express REST API** for core operations.
- **AI features** run as independent **Flask microservices** (symptom detection, face recognition, X-ray diagnosis, OCR, behavioral analysis).
- **MongoDB** stores application data users, appointments, blogs, shop inventory.
- **Ethereum smart contracts** handle patient medical records with immutability and permission-based access control.


---

## ✅ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+ and `npm` or `yarn`
- [MongoDB](https://www.mongodb.com/) running locally or via a cloud URI (v5.9.1+)
- [Python 3.8+](https://www.python.org/) for AI/ML microservices
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahlem-phantom/AI-HealthCare-Assistant.git
   cd AI-HealthCare-Assistant
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Python dependencies** *(for AI services)*
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   STRIPE_SECRET_KEY=your_stripe_key
   GOOGLE_MAPS_API_KEY=your_maps_key
   DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id
   NANONETS_API_KEY=your_nanonets_key
   ```

5. **Start the main development server**
   ```bash
   npm run development
   ```

6. **Start Flask AI microservices** *(in a separate terminal)*
   ```bash
   cd py-side
   flask run
   ```

7. **Open the app** at `http://localhost:3000` 🎉

---

## 🔄 How It Works

### For Patients
1. **Select Role** — choose "Patient" at the landing screen.
2. **Register & Log In** — via username/password or LinkedIn OAuth.
3. **Describe Symptoms** — chat with the Dialogflow AI bot; receive a specialist recommendation.
4. **Mental Health Check** — take the guided quiz and get personalized article suggestions.
5. **Book an Appointment** — schedule with the nearest or first-available doctor via the chatbot and Google Maps.
6. **Medical Records** — your records are securely stored on the blockchain; grant selective access to your chosen doctors.

### For Doctors
1. **Verify Identity** — upload your national card ID; Nanonets OCR confirms authenticity in real time.
2. **Register Face ID** — enroll your face using the TensorFlow model for future biometric logins.
3. **Choose a Plan & Pay** — select a subscription tier and complete payment via Stripe.
4. **Log In** — use LinkedIn OAuth, username/password, or a live Face ID camera scan.
5. **Use the Dashboard** — manage appointments, write blogs, run X-ray lung diagnoses (COVID / TB / pneumonia), and access patient records via blockchain with granted permission.

---

## 📸 Screenshots

| | |
|---|---|
| ![Choose a role](https://user-images.githubusercontent.com/78981558/177000911-0c4cb2ca-aff1-4416-be97-5b9173215c9a.png) <br/>**1. Choose a Role** | ![FaceID Login](https://user-images.githubusercontent.com/78981558/177001216-8e8c9cc2-09cd-4c7a-9639-94ec384432cb.png) <br/>**2. Face ID Login** |
| ![CardID Verification](https://user-images.githubusercontent.com/78981558/177000941-82057aa0-5496-4b69-9aa1-a1c042395fe1.png) <br/>**3. Card ID Verification** | ![CardID Success](https://user-images.githubusercontent.com/78981558/177001352-2aab27c9-e939-4782-b2d9-0181a8888d13.png) <br/>**4. Verification Success** |
| ![Blog List](https://user-images.githubusercontent.com/78981558/177001224-b804c0df-5db0-4d4c-b83e-de964c501b0b.png) <br/>**5. Blog & Forum** | ![Web Scraping](https://user-images.githubusercontent.com/78981558/177000917-86dba137-ba0f-4dfd-83c3-a18fd902be11.png) <br/>**6. Web Scraping Search** |
| ![Appointments](https://user-images.githubusercontent.com/78981558/177001237-8932f8c4-31b1-4939-b3f0-042713444cb1.png) <br/>**7. Appointments List** | ![Symptoms Detection](https://user-images.githubusercontent.com/78981558/177001041-1dec9540-ec50-47e5-8c79-22dee3dece61.png) <br/>**8. Symptom Selection** |
| ![Suggestions](https://user-images.githubusercontent.com/78981558/177000997-ecd9c0bc-e3ca-4d0b-bb75-2e55bde0f690.png) <br/>**9. AI Specialist Suggestions** | ![More Suggestions](https://user-images.githubusercontent.com/78981558/177001043-cb8110c3-f1a0-4e2a-b9cd-ef393cbf5ec4.png) <br/>**10. Chatbot Recommendations** |

---

## 🗺️ Roadmap

- [x] **Phase 1 — Study & Prototyping**
  - Problem definition, state of the art & competitive analysis
  - Feasibility study, wireframes

- [x] **Phase 2 — Design & Initial Build**
  - Data model & physical/logical architecture design
  - Static frontend + first Node.js components

- [x] **Phase 3.1 — Feature Implementation (V1)**
  - Full backend REST API
  - Frontend integration with all services
  - Core AI modules: symptom detection, face ID, OCR verification

- [x] **Phase 3.2 — Finalization & Deployment (V2)**
  - X-ray diagnosis, mental health test, blockchain records
  - Final integration, system testing & deployment

- [ ] **v3 — Coming Soon**

---

## 🔮 Upcoming: Version 3

We're actively working on the next major release:

- 🎨 Redesigned UI/UX with a modern design system
- ⚡ Migration from Node.js backend to **FastAPI**
- 🤖 Integration of **LLM models** for smarter symptom analysis and conversational AI
- 🧪 Full CI/CD pipeline for automated testing & deployment
- 📦 All libraries and dependencies upgraded to latest stable versions
- 🏗️ Scalable, cloud-ready architecture

---

## 🏆 Achievements

🎖️ **NearestDoctor was selected among dozens of projects** to participate in the **9th Edition Ceremony of Best Engineering Projects of 2022** at **Esprit School of Engineering**, Tunisia.
<div align="center">
<img src="https://github.com/user-attachments/assets/669b98fd-3237-49a5-a666-44da002cef35" width="300" height="300" alt="NearestDoctor Logo"/>
</div>
---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the project
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

See [open issues](https://github.com/ahlem-phantom/AI-HealthCare-Assistant/issues) for ideas and known bugs. Don't forget to ⭐ star the project if you find it useful!

---

## 👥 Team

Built with 💕 by **AlphaCoders** 5 engineering students from Esprit School of Engineering, Tunisia.

**Project Mentor:** [ameni.rommene@esprit.tn](mailto:ameni.rommene@esprit.tn)

| | | | | |
|---|---|---|---|---|
| <div align="center"><img src="https://user-images.githubusercontent.com/78981558/157719496-9aec4730-512f-4188-87ca-8dbe6271ebfc.jpg" width="100" height="100"/><br/><b>Ahlem Laajili</b><br/><a href="mailto:ahlem.laajili@esprit.tn"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"/></a> <a href="https://github.com/ahlem-phantom"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/></a></div> | <div align="center"><img src="https://user-images.githubusercontent.com/78981558/157719539-f2829a38-c204-40fc-881d-21b9f407aa84.jpg" width="100" height="100"/><br/><b>Skander Turki</b><br/><a href="mailto:skander.turki@esprit.tn"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"/></a> <a href="https://github.com/skander-turki"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/></a></div> | <div align="center"><img src="https://user-images.githubusercontent.com/78981558/157719519-36d5e110-659c-4c29-80fc-64e78d53e669.jpg" width="100" height="100"/><br/><b>Syrine Zahras</b><br/><a href="mailto:syrine.zahras@esprit.tn"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"/></a> <a href="https://github.com/SyrineZahras"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/></a></div> | <div align="center"><img src="https://user-images.githubusercontent.com/78981558/157719578-6479fcf3-e4f1-4db0-83d4-158b640552c1.jpg" width="100" height="100"/><br/><b>Hichem Ben Zammal</b><br/><a href="mailto:hichem.bemzammal@esprit.tn"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"/></a> <a href="https://github.com/hichembenzammel"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/></a></div> | <div align="center"><img src="https://user-images.githubusercontent.com/78981558/157719597-23028a28-1095-4472-af25-ec631c6c1307.jpg" width="100" height="100"/><br/><b>Nesrine Ben Mahmoud</b><br/><a href="mailto:nesrine.benmahmoud@esprit.tn"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white"/></a> <a href="https://github.com/nesrine1999"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/></a></div> |

---

## ⚠️ Deprecation Notice

> **Important:** This project was built in 2022 and several of its core libraries and dependencies are now **outdated or deprecated**. The codebase across all four modules `react-app/`, `server/`, `py side/`, and `blockchain/`  requires updates before it can be safely run in a modern environment.
>
> Known areas that need attention:
> - **React**: project uses an older setup; migration to current React + Vite recommended, update of deprecated dependencies
> - **Node.js / Express**: dependencies likely have known CVEs; run `npm audit` and update
> - **Python / Flask**: AI service dependencies (TensorFlow, OpenCV, etc.) need version pinning and updates.
>
> A full dependency refresh is planned as part of **v3**. Contributions to modernize the stack are very welcome, see [Contributing](#-contributing).

---

## 🙌 Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Img Shields](https://shields.io)
- [Font Awesome](https://fontawesome.com)
- [Devicons](https://devicon.dev/)

---

<div align="center">
  <sub>Made with 💕 by AlphaCoders · Esprit School of Engineering · Tunisia · 2022</sub>
  <br/><br/>
  <a href="#top">⬆ Back to top</a>
</div>
