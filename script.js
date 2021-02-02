/* Script en jQuery */

/* Remplissage du formulaire */

/* Passage du message de succès en caché */

$(".alert").hide();

$("form").submit((e) => {
  e.preventDefault();
  /* Réinitialisation des bordures */
  $("textarea").removeClass("formWrong");
  $("select").removeClass("formWrong");
  $("menuGauche").removeClass("formWrong");

  /* Réinitialisation du message d'alerte */
  $(".alert").hide();

  if ($("select").val() !== null && $("textarea").val().length > 15) {
    $(".alert").show();
    $("form").hide();
  } else {
    $("textarea").addClass("formWrong");
    $("select").addClass("formWrong");
    $("menuGauche").addClass("formWrong");
  }
});

/* Changement du background color de la tête du chat du Footer quand hover de tout le footer */

$("footer").hover(() => {
  $("footer img").toggleClass("newBgChat");
});
