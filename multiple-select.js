if (Meteor.isClient) {
  Template.select.output = function () {
    return Session.get("output")
  };

  Template.select.events({
    'click button' : function () {
      Session.set("output", "Hello World!")
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
