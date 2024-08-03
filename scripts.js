let canSendMessage = true; // Flag to track if messages can be sent
const cooldownTime = 3000; // Cooldown time in milliseconds (3 seconds)
let cooldownEndTime = 0; // Timestamp when cooldown ends
let anonymousId = Math.floor(Math.random() * 90000) + 10000; // Generate a random 5-digit number
const creatorName = 'Sarah'; // Define the creator's name here

// List of spam messages
const spamMessages = [
  "your sexy",
  "ur sexy",
  "your hot",
  "you're hot",
  "you're hot",
  "you're such a baddie",
  "baddie",
  "hot",
  "sexy",
  "break the bed",
  "lets break the bed with me",
  "nice 🍑",
  "🍑",
  "nice 🍒",
  "🍒",
  "🍑🍑",
  "🍒🍒",
  "open whole",
  "open",
  "sexy pics",
  "sexy nuds",
  "nice pics",
  "hot pics",
  "ur hot",
  "ur baddie",
  "u sexy",
  "stop this content",
  "what the sigma",
  "wtf is this",
  "ur soo hot",
  "ur soo sexy",
  "ur 🍒 is big",
  "ur cute",
  "cute",
  "cute asf",
  "your 🍑 is big",
  "big 🍑",
  "sexy 🍑",
  "sexy 🍒",
  "🍼",
  "open 🍼",
  "🍼🍼🍼",
  "break bed 🍼",
  "give me face 🍼",
  "i give u 🍼",
  "give me 🍑",
  "open 🍑",
  "i suck your 🍒",
  "open 🍒",
  "yo u need to verify to view pics",
  "just verify to see the pics",
  "imagine being unverified",
  "ur unverified u cant see the pics",
  "open on live",
  "open live",
  "🍒big",
  "any indians",
  "whre are you from?",
  "where r u from?",
  "good pics",
  "i nutted",
  "i will tribute you 🍒🍒",
  "i will tribute u lady",
  "nice lady",
  "sexy lady",
  "🍒 lady",
  "beautiful ladyy",
  "cutee girl"
];

// List of usernames
const usernames = [
    'Bob',
    'Alice',
    'Charlie',
    'Dave',
    'Eve',
    'Frank',
    'Grace',
    'Anonymous12345',
    'Anonymous67890',
    'Anonymous23456',
    'Anonymous78901',
    'Anonymous34567',
    'Anonymous89012',
    'Anonymous45678',
    'Anonymous90123',
    'Anonymous56789',
    'Anonymous01234',
    'Anonymous67891',
    'Anonymous23457',
    'Anonymous78902',
    'Anonymous34568'
];

// List of Sarah's messages
const sarahMessages = [
  "im posting my 🍑",
  "my 🍑 is big",
  "🍒 im gonna send",
  "btw guys u need to verify to see my pics 🍑🍒",
  "check out my 🍑",
  "my 🍑 is huge",
  "🍒 sending soon",
  "verify to see my pics 🍑🍒",
  "posting my big 🍑",
  "huge 🍑 coming your way",
  "🍒 pics are on the way",
  "you need verification to view 🍑🍒",
  "look at my 🍑",
  "my 🍑 is gigantic",
  "🍒 sending pics shortly",
  "verify to access my pics 🍑🍒",
  "showing off my 🍑",
  "my 🍑 is enormous",
  "🍒 getting ready to send",
  "verify for my 🍑🍒 pics",
  "here's my 🍑",
  "my 🍑 is massive",
  "🍒 sending pics now",
  "verification needed for 🍑🍒",
  "displaying my 🍑",
  "my 🍑 is really big",
  "🍒 pics coming up",
  "need verification to view 🍑🍒",
  "revealing my 🍑",
  "my 🍑 is gigantic",
  "🍒 sending soon",
  "verify to see 🍑🍒",
  "sharing my 🍑",
  "my 🍑 is enormous",
  "🍒 pictures are coming",
  "verification required for 🍑🍒",
  "showing my big 🍑",
  "my 🍑 is massive",
  "🍒 pics on their way",
  "verify to access 🍑🍒",
  "posting a big 🍑",
  "my 🍑 is huge",
  "🍒 about to send",
  "verify to view 🍑🍒 pics"
];

// Verified usernames (80% of the usernames list)
const verifiedUsernames = usernames.slice(0, Math.ceil(usernames.length * 0.8));

document.getElementById('submit-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action (form submission)
        sendMessage();
    }
});

function sendMessage() {
    if (!canSendMessage) {
        // If cooldown is active, show status message
        updateCooldownStatus();
        return;
    }

    const usernameInput = document.getElementById('username');
    let username = usernameInput.value.trim();
    
    // If no username is provided, use "Anonymous" followed by a random number
    if (username === '') {
        username = `Anonymous${anonymousId}`;
    }

    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message === '') return;

    addMessage(username, message, 'default-pfp.jpg', null, true);
    chatInput.value = '';

    // Start the cooldown
    canSendMessage = false;
    cooldownEndTime = Date.now() + cooldownTime;
    setTimeout(() => {
        canSendMessage = true; // Re-enable sending messages after cooldown
        updateCooldownStatus();
    }, cooldownTime);
}

function updateCooldownStatus() {
    const statusElement = document.getElementById('status');
    const statusContainer = document.getElementById('status-container');

    if (!statusElement || !statusContainer) return;

    if (!canSendMessage) {
        const remainingTime = Math.ceil((cooldownEndTime - Date.now()) / 1000);
        statusElement.textContent = `You can send a message in ${remainingTime} seconds`;
        statusContainer.classList.add('show');
    } else {
        statusContainer.classList.remove('show');
    }
}

function addMessage(username, message, pfp, image = null, isSender = false) {
    const chatMessages = document.getElementById('chat-messages');

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    const pfpElement = document.createElement('img');
    pfpElement.className = 'pfp';
    pfpElement.src = pfp;

    const usernameElement = document.createElement('span');
    usernameElement.className = 'username';
    usernameElement.textContent = username;
    if (isSender) {
        usernameElement.textContent += ' (You) '; // Add (You) if it's the current user
    }

    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageContent.appendChild(userInfo);
    messageContent.appendChild(document.createTextNode(message));

    if (image) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.className = 'chat-image';

        imageElement.addEventListener('click', function() {
            _Cd();
        });

        const caption = document.createElement('div');
        caption.className = 'image-caption';
        caption.textContent = '(Tap to view unblurred Image)';

        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(caption);

        messageContent.appendChild(imageContainer);
    }

    messageContent.appendChild(time);

    userInfo.appendChild(pfpElement);
    userInfo.appendChild(usernameElement);

    if (username === creatorName) {
        const creatorLabel = document.createElement('span');
        creatorLabel.className = 'creator-label';
        creatorLabel.textContent = 'Creator';
        userInfo.appendChild(creatorLabel);
    } else if (isSender) {
        const unverifiedLabel = document.createElement('span');
        unverifiedLabel.className = 'unverified-label';
        unverifiedLabel.textContent = 'Unverified';
        userInfo.appendChild(unverifiedLabel);
    } else if (verifiedUsernames.includes(username)) {
        const verifiedLabel = document.createElement('span');
        verifiedLabel.className = 'verified-label';
        verifiedLabel.textContent = 'Verified';
        userInfo.appendChild(verifiedLabel);
    } else {
        const unverifiedLabel = document.createElement('span');
        unverifiedLabel.className = 'unverified-label';
        unverifiedLabel.textContent = 'Unverified';
        userInfo.appendChild(unverifiedLabel);
    }

    messageContainer.appendChild(messageContent);
    chatMessages.appendChild(messageContainer);

    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function fakeMessage(username, message) {
    addMessage(username, message, 'default-pfp.jpg');
}

function mainFakeMessage(message) {
    addMessage(creatorName, message, 'main-pfp.png');
}

function mainFakeMessageImage() {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    
    // Construct the image filename
    const randomImage = `contact-${randomNumber}.jpg`;
    
    addMessage(creatorName, '', 'main-pfp.png', randomImage);
}

function getRandomElement(exclude, array) {
    let filteredArray = array.filter(item => !exclude.includes(item));
    return filteredArray[Math.floor(Math.random() * filteredArray.length)];
}

let lastMessages = [];
let lastUsernames = [];

function startRandomSpam() {
    // Get the last two messages and usernames
    const lastMessage1 = lastMessages[0] || '';
    const lastMessage2 = lastMessages[1] || '';
    const lastUsername1 = lastUsernames[0] || '';
    const lastUsername2 = lastUsernames[1] || '';

    // Pick a random username excluding the last two
    const randomUsername = getRandomElement([lastUsername1, lastUsername2], usernames);

    // Pick a random message excluding the last two
    const randomMessage = getRandomElement([lastMessage1, lastMessage2], spamMessages);

    // Add the new message
    fakeMessage(randomUsername, randomMessage);

    // Update the tracked last messages and usernames
    lastMessages.push(randomMessage);
    lastUsernames.push(randomUsername);
    
    if (lastMessages.length > 2) lastMessages.shift(); // Keep only the last 2 messages
    if (lastUsernames.length > 2) lastUsernames.shift(); // Keep only the last 2 usernames

    // Random delay between 3 and 10 seconds
    const randomDelay = Math.floor(Math.random() * 1000) + 1020;

    setTimeout(startRandomSpam, randomDelay);
}

function startSarahMessages() {
    const randomChoice = Math.random();
    if (randomChoice < 0.2) {
        const randomSarahMessage = sarahMessages[Math.floor(Math.random() * sarahMessages.length)];
        mainFakeMessage(randomSarahMessage);
    } else {
        mainFakeMessageImage();
    }

    setTimeout(startSarahMessages, Math.floor(Math.random() * 500) + 3000);
}

startRandomSpam();
startSarahMessages();
