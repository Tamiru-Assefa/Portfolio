# 🌐 Personal Portfolio Website

Welcome to my **Portfolio Website**!
This is a responsive and interactive web portfolio built using **HTML**, **CSS**, and **JavaScript**, designed to showcase my projects, skills, and experience in a simple yet effective way.

## 🚀 Features

* ✨ Clean, responsive design
* 💻 Built using **HTML**, **CSS**, and **JavaScript**
* 📱 Mobile-friendly layout
* 📇 Sections include:

  * Home
  * About Me
  * Projects
  * Skills
  * Contact

### 🔔 Unique Feature – Telegram Bot Notification

One of the standout features of this website is the **Contact Me** section:

* When a visitor submits the contact form, **you get instantly notified on Telegram**.
* This is made possible by:

  * Creating a **Telegram Bot** via [BotFather](https://core.telegram.org/bots#botfather)
  * Using the **Telegram Bot API** to send messages to my chat
  * Sending form data with **JavaScript Fetch API**

This integration allows me to receive messages in real-time, directly on my phone through Telegram.

## 📁 Folder Structure

```
/portfolio
│
├── index.html         # Main HTML file
├── css/               # Custom CSS styles
├── pages/             # other html files and Js file 
├── images/            # Images
├── icons/             #Icons         
└── README.md          # You're here!
```

## 🛠️ How It Works

1. **Form Submission**

   * Users fill out the contact form with their name, email, subject, and message.

2. **JavaScript Integration**

   * The `script.js` file captures the form submission event and sends the data using `fetch()`.

3. **Telegram Bot API**

   * The JS code sends a request to the Telegram Bot API endpoint:

     ```
     https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage
     ```
   * The message is delivered to my Telegram chat ID instantly.

> ⚠️ Note: The actual bot token and chat ID are stored securely and are not exposed in public repositories.

## 📬 Contact Me

To get in touch or learn more, simply use the **Contact** section of the website. Messages are forwarded instantly via my Telegram bot.

---

## 📌 Future Improvements

* Add dark mode toggle 🌙
* Connect backend email service for form submission fallback
* Add animations with GSAP or Framer Motion

---

## 🧑‍💻 Author

**Tamiru Assefa**
Passionate about web development, cloud computing, and creating smart solutions using modern tools.

---

