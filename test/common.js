var assert = require('assert');

function testBot(bot, messages, done) {
  var step = 1;
  var connector = bot.connector();
  bot.on('send', function (message) {
      
    if (step <= messages.length && step++ >= 1) {
      var check = messages[step - 2];
      if (check.type) {
        assert(message.type === check.type);
      }
      
      if (check.in) {
        if (check.in.test ? check.in.test(message.text) : message.text === check.in) {
          assert(true);
        } else if (typeof check.in === 'function') {
          assert(check.in(message))
        } else {
          console.error('<%s> does not match <%s>', message.text, check.in);
          assert(false);
        }
      }

      if (check.out) {
        connector.processMessage(check.out);
      }

      if (step - 1 == messages.length) {
        setTimeout(done, 10); // Enable message from connector to appear in current test suite
      }
    } else {
      assert(false);
      setTimeout(done, 10); // Enable message from connector to appear in current test suite
    }
  });

  if (messages.length && messages[0].out) {
    step = 2;
    connector.processMessage(messages[0].out)
  }
}

module.exports = {
  testBot
};