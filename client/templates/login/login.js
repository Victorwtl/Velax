Template.Login.events({
  "submit #formLogin": function(event, template) {
    event.preventDefault();
    $("#alerta-erro").attr("hidden", "true");
    alert("teste");
    var email = event.target.email.value;
    var senha = event.target.senha.value;

    Meteor.loginWithPassword(email, senha, function(err) {
      if (err) {
          $("#alerta-erro").removeAttr('hidden');
          $("#mensagem-alerta").text(err.message);
          console.log(err.message);
      } else {
        Router.go('home');
      }
    });

    return false;
  }
});
