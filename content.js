const originalTable = $('#raw').html(); // Get default table contents

// Shows a class of elements
function ttshow(major) {
  $("." + major).show();
}

// Hides a class of elements
function tthide(major) {
  $("." + major).hide();
}

function ttparseTimetable() {
  $('#raw').html(originalTable);
  if ($("#phys").is(":checked")) {
    ttshow("physics");
  } else {
    tthide("physics");
  }

  if ($("#bio-b1").is(":checked")) {
    ttshow("biology-b1");
  } else {
    tthide("biology-b1");
  }

  if ($("#bio-b2").is(":checked")) {
    ttshow("biology-b2");
  } else {
    tthide("biology-b2");
  }

  if ($("#socio").is(":checked")) {
    ttshow("sociology");
  } else {
    tthide("sociology");
  }

  if ($("#law").is(":checked")) {
    ttshow("philosophy");
  } else {
    tthide("philosophy");
  }

  if ($("#chem").is(":checked")) {
    ttshow("chemistry");
  } else {
    tthide("chemistry");
  }

  if ($("#cs").is(":checked")) {
    ttshow("computer");
  } else {
    tthide("computer");
  }

  if ($("#env").is(":checked")) {
    ttshow("environment");
  } else {
    tthide("environment");
  }

  if ($("#heal").is(":checked")) {
    ttshow("health");
  } else {
    tthide("health");
  }

  if ($("#art").is(":checked")) {
    ttshow("arts");
  } else {
    tthide("arts");
  }

  if ($("#sci").is(":checked")) {
    ttshow("science");
  } else {
    tthide("science");
  }

  if ($("#arab").is(":checked")) {
    ttshow("arabic");
  } else {
    tthide("arabic");
  }

  if ($("#music").is(":checked")) {
    ttshow("musics");
  } else {
    tthide("musics");
  }

  if ($("#hist").is(":checked")) {
    ttshow("history");
  } else {
    tthide("history");
  }

  if ($("#elec").is(":checked")) {
    ttshow("electronic");
  } else {
    tthide("electronic");
  }

  if ($("#thea").is(":checked")) {
    ttshow("theater");
  } else {
    tthide("theater");
  }

  $("#result").show();
}
