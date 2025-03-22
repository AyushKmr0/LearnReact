# 🔐 Password Generator App

A simple and interactive Password Generator built with React using modern hooks and styled with Tailwind CSS.  

## 📌 Features
- Generate random passwords with adjustable length.  
- Include numbers and symbols as options.  
- Copy passwords to clipboard with a single click.  
- Responsive UI styled with Tailwind CSS.  

## 🚀 Technologies Used
- **React** (useState, useEffect, useCallback, useRef)  
- **Tailwind CSS** (For styling)  

## 📂 Folder Structure
```lua
src/
|-- App.js
|-- index.js 
```


## 📦 Installation & Usage
 1. Clone the repository:  
```bash
git clone https://github.com/AyushKmr0/LearnReact.git
```

 2. Navigate to the project directory:

```bash
cd LearnReact
```

 3. Install dependencies:

```bash
npm install
```


 4. Run the application:

```bash
npm run dev
```

5. Open your browser at http://localhost:5173/ to see the app in action.

## 💡 How It Works

- useState() manages state for password length, numbers, symbols, and generated password.
- useEffect() auto-generates a new password whenever settings change.
- useCallback() ensures functions aren’t re-created unnecessarily.
- useRef() allows copying the password to the clipboard.


## 📸 Demo Screenshot
![Screenshot 2025-03-22 195055](https://github.com/user-attachments/assets/7f3c93aa-73e2-4bbc-ba17-1c70dd83e34a)