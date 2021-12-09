const Puser = require('pusher');

const pusher = new Pusher({
  appId: process.env.REACT_APP_ID,
  key: process.env.REACT_APP_KEY,
  secret: process.env.REACT_APP_SECRET,
  cluster: process.env.REACT_APP_CLUSTER,
  useTLS: true
});


pusher.trigger('my-channel', 'my-event', {
  message: 'hello world'
})