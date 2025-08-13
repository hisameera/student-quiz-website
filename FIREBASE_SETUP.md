# Firebase Setup Guide for Quiz Master India

## 🔥 Firebase Configuration Required

To enable user accounts, progress tracking, and leaderboards, you need to set up Firebase:

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Name your project: "Quiz Master India"
4. Enable Google Analytics (recommended)
5. Complete project creation

### Step 2: Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Google" sign-in provider
5. Add your website domain: `hisameera.github.io`

### Step 3: Enable Firestore Database
1. Go to "Firestore Database"
2. Click "Create database"
3. Start in "test mode" (can secure later)
4. Choose your preferred location

### Step 4: Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web app
4. Register app: "Quiz Master India Web"
5. Copy the configuration object

### Step 5: Update Configuration
Replace the placeholder config in `script.js` (line ~572) with your actual config:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

## 🎯 Current Status
- ✅ Firebase SDK loaded
- ✅ Authentication UI ready
- ✅ User dashboard implemented
- ✅ Progress tracking coded
- ✅ Achievement system ready
- ✅ Leaderboard functionality added
- ⏳ **Needs Firebase project setup**

## 🔧 Demo Mode
Until Firebase is configured, the website runs in demo mode with:
- Local storage for basic progress
- Simulated achievements
- Static leaderboard

## 📱 Features Ready to Activate
Once Firebase is configured, users will get:
- 🔐 Google Sign-in
- 📊 Progress tracking across devices
- 🏆 Achievement badges
- 🏅 Real-time leaderboards
- 💾 Cloud-saved quiz history
- 📈 Detailed performance analytics

## 🚀 Next Steps
1. Complete Firebase setup
2. Test authentication
3. Add PWA features for mobile app experience
4. Implement daily challenges
5. Add email newsletter integration
