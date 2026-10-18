// 1. HTML से दोनों बटनों को पकड़ना (Select करना)
const modeBtn = document.getElementById("modeBtn");
const ctaBtn = document.querySelector(".cta-btn");

// 2. Dark Mode बटन का ऑन-ऑफ लॉजिक (बल्ब वाला जादू!)
modeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // बटन का नाम बदलना
  if (document.body.classList.contains("dark-mode")) {
    modeBtn.innerText = "☀️ Light Mode";
    modeBtn.style.backgroundColor = "#f59e0b";
    modeBtn.style.color = "#000000";
  } else {
    modeBtn.innerText = "🌙 Dark Mode";
    modeBtn.style.backgroundColor = "#1e293b";
    modeBtn.style.color = "#ffffff";
  }
});

// 3. Mock Test बटन दबाने पर मैसेज दिखाना
ctaBtn.addEventListener("click", function() {
  alert("🚀 Test #1 Ready! All the best [आपका नाम]!");
  ctaBtn.innerText = "Test Started ✅"; 
});
