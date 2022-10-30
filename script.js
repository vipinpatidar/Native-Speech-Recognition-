window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
// recognition.lang = "en-IN";
recognition.lang = "hi-IN";
// recognition.lang = "bn-IN";

let p = document.createElement("p");

const words = document.querySelector(".words");

words.appendChild(p);

recognition.addEventListener("result", (e) => {
  //   console.log(e.results);
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;

  // inserting p again so next speech don't overwrite last one
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  //   console.log(transcript);

  // giving some instuction and taking out put like sir, or google
  if (transcript.includes("get the weather")) {
    console.log(" it is raining");
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
