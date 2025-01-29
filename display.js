const messages = {
  Insaan: "आपने एक इंसान को चुना, यह खास संदेश आपके लिए है।",
  Putra: "यह संदेश एक पुत्र के अनमोल रिश्ते को समर्पित है।",
  Bhai: "यह संदेश एक भाई के प्यार और समर्पण को दर्शाता है।",
  Sathi: "यह संदेश एक सच्चे साथी के महत्व को उजागर करता है।",
  Pita: "यह संदेश एक पिता के त्याग और प्रेम को समर्पित है।",
  Damad: "यह संदेश एक दामाद/जीजू के अनमोल रिश्ते के लिए है।",
  Birthday: "जन्मदिन की शुभकामनाएं! यह खास संदेश आपके जन्मदिन के लिए है।",
};

function togglePopup(audioId) {
  const msg = messages[audioId] || "यह एक खास संदेश है।"; 
  document.querySelector('#msg').innerText = msg;
  document.querySelector('#pop_up').style.display = 'block'; 

  document.querySelectorAll('audio').forEach(audio => audio.pause());
  const selectedAudio = document.getElementById(audioId);
  if (selectedAudio) selectedAudio.play();
}

function closePopup() {
  document.querySelector('#pop_up').style.display = 'none'; 
}
