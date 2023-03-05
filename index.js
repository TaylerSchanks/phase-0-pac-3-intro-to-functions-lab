function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return 'HELLO'.toLowerCase();
}

function logShout(string) {
    console.log('HELLO');
}

function logWhisper(string) {
    console.log('HELLO'.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === "hello") {
        return "I can't hear you!"
    } if (string === "HELLO") {
        return "YES INDEED!"
    } else {
        string === "Let's have dinner together!"
        return "I would love to!"
    }

}