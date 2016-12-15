
module.exports = [
  {
    out: "set alarm in 10 seconds"
  },
  {
    in: "What would you like to call your alarm?",
    out: "test"
  },
  {
    in: (message, assert, callback) => {
      assert(message && message.text && message.text.startsWith('Creating alarm named "test" for'));
      callback();
    }
  },
  {
    in: "Here's your 'test' alarm." // the message sent by the bot after a few seconds
  }
];