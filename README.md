

# ✈️ GoogleFlights\_SkyScraper

A **React Native** mobile application to search flights by **destination, date, airline, and price** using the **Sky-Scrapper API** (via RapidAPI).
The app provides flight details and redirects users to booking sites through deep links.
Authentication is handled via **Firebase Google Sign-In**.

---

## 📲 **Features**

* Search Flights by:
  ✅ **From / To Locations**
  ✅ **Departure Dates**
* View Detailed Flight Information:
  ✅ **Departure Time**
  ✅ **Arrival Time**
  ✅ **Airline Name**
  ✅ **Flight Rating**
  ✅ **Price**
* **Redirect to Booking Websites** via browser deep link.
* **Google Authentication** via Firebase.

---

## 🔧 **Tech Stack**

| Technology              | Purpose                       |
| ----------------------- | ----------------------------- |
| React Native            | Mobile App Framework          |
| Firebase Auth           | Google Sign-In Authentication |
| Axios                   | API Requests                  |
| RapidAPI (Sky-Scrapper) | Flight Search Data            |
| React Navigation        | Screen Navigation             |
| ESLint / Prettier       | Code Quality                  |
| Jest                    | Testing                       |

---

## 🚀 **Getting Started**

### ✅ **Prerequisites**

* Node.js `>= 18`
* Android Studio / Xcode for emulators
* Firebase Project with Google Authentication enabled
* RapidAPI Account for Sky-Scrapper API

---

### 🔑 **Environment Variables**

Create a `.env` file in the root directory:

```env
RAPID_API_KEY=your_sky_scrapper_api_key_here
```

> 🔔 **Note:** You need to get your own API Key from [Sky-Scrapper API on RapidAPI](https://rapidapi.com/apiheya/api/sky-scrapper).
> This key is required for the app to fetch flight data.

---

### 📂 **Installation Steps**

```bash
# Install dependencies
npm install

# Start Metro bundler
npm start

# Run Android
npm run android

# Run iOS
npm run ios
```

> Make sure you have completed React Native's [environment setup](https://reactnative.dev/docs/environment-setup).

---

## 🔍 **Project Structure (Overview)**

```
src/
 ├─ api/               # API Calls (Axios)
 ├─ assets/images/     # Images for UI
 ├─ components/        # Reusable UI Components
 ├─ constants/         # Colors, Config
 ├─ navigation/        # React Navigation Logic
 ├─ screens/           # Auth, Search, Flight Results, etc.
 └─ App.js             # Root Entry
```

---

## 🛠️ **Available Scripts**

| Command           | Purpose     |
| ----------------- | ----------- |
| `npm start`       | Start Metro |
| `npm run android` | Run Android |
| `npm run ios`     | Run iOS     |
| `npm run lint`    | Linting     |
| `npm run test`    | Run Tests   |

---

## 📸 **Screenshots**    

> *Sorry for inconvenience, I will add screenshot later. *

---

## 📤 **Deployment / Release**

* Android: `./gradlew assembleRelease`
* iOS: Standard Xcode archive process.

---

## 🤝 **Contributing**

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 **License**

This project is licensed for educational and portfolio purposes. Do not use the Sky-Scrapper API key in public repositories.

---

## 💬 **Contact**

**Tabariq Awab Ullah**
React Native Developer
Tabariqawabullah@gmail.com

---

If you want, I can also generate a **`CONTRIBUTING.md`** or even a sample **issue template** for you. Just let me know.

