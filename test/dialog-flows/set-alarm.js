
module.exports = [
  {
    out: "set alarm in 10 seconds"
  },
  {
    in: "What would you like to call your alarm?",
    out: "test"
  },
  {
    in: /^(Creating alarm named "test" for)/i,
    out: "delete alarm named test"
  },
  {
    in: "Deleted the 'test' alarm." // the message sent by the bot after a few seconds
  }
];