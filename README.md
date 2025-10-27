> **📌 Note**  
> This project is **not open source**.  
> The code is publicly visible **for portfolio and demonstration purposes only**.  
> **Unauthorized use, copying, or distribution is strictly prohibited.**

# 🥑 React Nutrition App

A React application that lets users type a food name and instantly see its nutrition information such as calories, protein, carbs, and fats. Also provides the ability to create meals, see the macros of a meal, add meals to a plan and see plan macros.

## ✨ Features
* 🔎 Search any food by name
* 📊 Displays calories, protein, carbs, and fats
* 🥗 Create meals + view meal macros + view previous meals
* 🍎 Create plans + view plan macros
* Clean and responsive UI
* Built with React + Fetch API

## 🛠️ Tech Stack

* **React**
* **API**: CalorieNinjas

## Try it yourself
* The App is deployed on Vercel
* https://react-nutrition-app-iota.vercel.app/

## 🧠 What I Learned
- Managing more complex state flow and component data passing in React
- Organizing nutrition data dynamically from API responses
- Understanding the importance of API key security for front-end apps
- Practiced building user-friendly UI with responsive layout

## 🚀 Setup

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


### 4. Run the app
```bash
npm run dev
````
