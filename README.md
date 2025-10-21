# 🥑 React Nutrition App

A simple React application that lets users type a food name and instantly see its nutrition information such as calories, protein, carbs, and fats. Uses a free nutrition API.

## ✨ Features

* 🕒 Search history (shows previously searched foods in current session)
* 🔎 Search any food by name
* 📊 Displays calories, protein, carbs, and fats
* Clean and responsive UI
* Built with React + Fetch API

## 🛠️ Tech Stack

* **React**
* **API**: CalorieNinjas

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/PlamenKosharov/react-nutrition-app.git
cd react-nutrition-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key (securely)

This project is client-side only, but **API keys should NOT be exposed directly in the browser**.
For production, you should proxy the API through a small backend (e.g. Node/Express or serverless function).

For local testing only, you may temporarily use a `.env` file:

```
REACT_APP_NUTRITION_API_KEY=your_api_key_here
```

````

### 4. Run the app
```bash
npm run dev
````

## 🍽️ Example Usage

Type "banana" → the app fetches nutrition data and shows:

* Calories: 105
* Protein: 1.3g
* Carbs: 27g
* Fats: 0.4g

## 📄 License

MIT License

---

Feel free to fork and customize. PRs welcome!
