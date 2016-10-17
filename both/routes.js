Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.redirect('login');
  }
  this.next();
});

Router.route("/login", {
  name: 'login',
  template: 'Login'
});

Router.route("/", {
  name: "home",
  template: "Home"
});
