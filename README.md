# 🛡️ Cyber Cipher System

A lightweight cybersecurity project built with **Python Flask** that demonstrates classical text encryption and decryption through a simple cyber-themed interface.

The project implements **Caesar Cipher** and **Reverse Cipher**, along with a Matrix-style interface, QR code generation, and local encryption history.

## ✨ Features

* 🔐 Caesar Cipher Encryption
* 🔓 Caesar Cipher Decryption
* 🔄 Reverse Cipher
* 📋 Copy Encrypted/Decrypted Result
* ⬇️ Download Result
* 📱 QR Code Generation
* 🗂️ Local Encryption History
* 🟢 Matrix Rain Cyber UI
* 💻 Simple Flask-based Web Interface

## 🛠️ Technologies

* **Python**
* **Flask**
* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap**
* **SQLite**
* **QRCode**

## 📂 Project Structure

```text
Cyber-Cipher/
│
├── app.py
├── cipher.py
├── requirements.txt
│
├── templates/
│   ├── index.html
│   └── about.html
│
└── static/
    ├── style.css
    ├── script.js
    └── qr/
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd Cyber-Cipher
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the application

```bash
python app.py
```

### 4. Open in browser

```text
http://127.0.0.1:5000
```

## 🔐 How It Works

### Caesar Cipher

The Caesar Cipher shifts each alphabetic character by a fixed number of positions.

**Example:**

```text
Plain Text  → HELLO
Shift       → 3
Cipher Text → KHOOR
```

### Reverse Cipher

The Reverse Cipher reverses the order of characters in the input text.

```text
HELLO → OLLEH
```

## ⚠️ Educational Note

This project demonstrates **classical cryptography concepts for educational purposes**. Caesar Cipher and Reverse Cipher are not considered secure encryption methods for protecting sensitive or real-world confidential information.

---

### 👩‍💻 Built With

**Python • Flask • HTML • CSS • JavaScript • SQLite**

> A small project exploring the fundamentals of encryption, web development, and cybersecurity-themed UI design.
