const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

if (button && message) {
  const tips = [
    "Click to see expert advice for this build.",
    "PRO TIP 1: Use weapon arts on cooldown for burst damage. Time your heals during long recovery animations.",
    "PRO TIP 2: Equip Ritual Pot Talisman to reduce FP consumption on incantations—this extends your spell usage between rests.",
    "PRO TIP 3: Stack buffs before boss fights. Use Golden Order's Seal + Blessing of the Erdtree for maximum damage and survivability.",
    "PRO TIP 4: Manage your equip load carefully. Stay under 70% to maintain medium roll speed while wearing heavy armor.",
    "PRO TIP 5: Practice backstab setups. Position behind enemies during their attack animations for critical hits with Claymore.",
    "PRO TIP 6: In multiplayer, prioritize healing cooperators over yourself. Your role is support tank—keep your team alive."
  ];

  let currentTipIndex = 0;

  button.addEventListener("click", function () {
    message.textContent = tips[currentTipIndex];
    currentTipIndex = (currentTipIndex + 1) % tips.length;
  });
}

// Contact form handling
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    
    // Since this is a static site, show success message
    alert("Thank you for your message! This is a demo site, so messages aren't actually sent.");
    
    // Clear the form
    contactForm.reset();
  });
}
