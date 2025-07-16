const resumelink = document.getElementById("intro_button");
resumelink.addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/1GCYy4U7G9AfD_9vmeEyQ8eY-09BXetC8/view", "_blank");
});


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const telegramMessage = `
🚀 New Contact Form Submission:
👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message}
    `;

    const telegramAPI = `https://api.telegram.org/bot8064414899:AAHLtSeEtINH3ZBaNubDC_FCsqbarEpc5CI/sendMessage?chat_id=6048439667&text=${encodeURIComponent(telegramMessage)}`;

    fetch(telegramAPI)
      .then(response => {
        if (response.ok) {
          alert("Message sent successfully to Telegram!");
          document.getElementById("contactForm").reset();
        } else {
          alert("Failed to send message.");
        }
      })
      .catch(error => {
        console.error("Error sending message:", error);
        alert("Error sending message.");
      });
  });

