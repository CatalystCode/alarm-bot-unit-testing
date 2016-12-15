var nock = require('nock');

function setup() {
  var model = '/?id=appId&subscription-key=subId&q=';
  nock('https://luis.url')
    .get(model + encodeURIComponent('set alarm test in 10 seconds'))
    .reply(200,{
      "query": "set alarm test in 10 seconds",
      "intents": [
        {
          "intent": "builtin.intent.alarm.set_alarm"
        }
      ],
      "entities": [
        {
          "entity": "in 10 seconds",
          "type": "builtin.alarm.start_time",
          "resolution": {
            "resolution_type": "builtin.datetime.time",
            "time": "2016-12-14T15:31:59" // some time in the past
          }
        }
      ]
    })
    .get(model + encodeURIComponent('help'))
    .reply(200, {
      "query": "help",
      "intents": [
        {
          "intent": "builtin.intent.none"
        }
      ],
      "entities": []
    })
    .get(model + encodeURIComponent('delete alarm named test'))
    .reply(200, {
      "query": "delete alarm named test",
      "intents": [
        {
          "intent": "builtin.intent.alarm.delete_alarm"
        }
      ],
      "entities": [
        {
          "entity": "test",
          "type": "builtin.alarm.title"
        }
      ]
    });
}

module.exports = {
  setup
};