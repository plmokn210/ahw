const form = document.querySelector('form')
const chat_container = document.querySelector('#chat_container')

let loadInterval;

function loader(element) {
    element.textContent = '';

    loadInterval = setInterval(() => {
        element.textContent += '.';

        if (element.textContent === "....") {
            element.textContent = "";
        }
    }, 300)
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadeimalString = randomNumber.toString(16);
}

function typeText(element, text) {
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function chatStripe (isAi, value, uniqueId) {
  return (
    <div class="wrapper" ${isAi && 'ai'}>
    <div class="chat">
    <div className="profile">
    <img src="${isAi ? bot : user}" alt="${isAi ? 'bot' : 'user'}" />
    </div></div>
    </div>
  )
}