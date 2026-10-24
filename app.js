(() => {
  const WHATSAPP_NUMBER = "917003104215";
  const root = document.documentElement;
  const langToggle = document.getElementById("langToggle");
  let language = "bn";

  function applyLanguage(next) {
    language = next;
    root.lang = language === "bn" ? "bn" : "en";
    document.body.classList.toggle("lang-en", language === "en");
    document.querySelectorAll("[data-bn][data-en]").forEach((el) => {
      const text = el.getAttribute(language === "bn" ? "data-bn" : "data-en");
      if (text !== null) el.textContent = text;
    });
    langToggle.textContent = language === "bn" ? "English" : "বাংলা";
    document.getElementById("customerName").placeholder = language === "bn" ? "নাম / Name" : "Name";
    document.getElementById("details").placeholder = language === "bn" ? "যা লাগবে লিখুন / Describe your request" : "Describe your request";
    const first = document.querySelector('#serviceSelect option[value=""]');
    first.textContent = language === "bn" ? "পরিষেবা বেছে নিন" : "Choose a service";
    document.title = language === "bn" ? "Airlink Variety | এয়ারলিংক ভ্যারাইটি" : "Airlink Variety | Services & Orders";
  }

  langToggle.addEventListener("click", () => applyLanguage(language === "bn" ? "en" : "bn"));
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
  });
  document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));

  document.querySelectorAll("[data-service]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById("serviceSelect").value = button.dataset.service;
      document.getElementById("order").scrollIntoView({ behavior: "smooth" });
      document.getElementById("customerName").focus({ preventScroll: true });
    });
  });

  document.getElementById("orderForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("customerName").value.trim();
    const service = document.getElementById("serviceSelect").value;
    const details = document.getElementById("details").value.trim();
    const message = language === "bn"
      ? `নমস্কার Airlink Variety,\nআমার নাম: ${name}\nপরিষেবা/পণ্য: ${service}\nবিস্তারিত: ${details || "জানতে চাই"}\nদয়া করে দাম ও উপলব্ধতা জানাবেন।`
      : `Hello Airlink Variety,\nMy name: ${name}\nService/product: ${service}\nDetails: ${details || "Please share more information"}\nPlease confirm price and availability.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
  applyLanguage("bn");
})();