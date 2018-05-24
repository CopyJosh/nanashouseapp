var amountSpent = 0;

$().ready(function() {
  console.log("It worked.");
  $("#addExpense").click(function() {
    getSpent();
  });

  $("#time").text(function() {
    var options = { hour: '2-digit', minute: '2-digit', hour12: 'true' }
    return new Date().toLocaleTimeString('en-US', options);
  });

  $("#date").text(function() {
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  });

});

function getSpent() {
  amountSpent = $("#inputSpent").val();
  console.log(amountSpent);
  loadTable();
}

function loadTable() {
  console.log("Load table");
  var tbody = $("tbody");
  tbody.empty();
  var item = "<tr>";
//  item += "<td>" + amountSpent + "</td>";
//  item += "<td>" + amountSpent*7 + "</td>";
//  item += "<td>" + amountSpent*30  + "</td>";
//  item += "<td>" + amountSpent*183  + "</td>";
//  item += "<td>" + amountSpent*365  + "</td>";
  item += "<td>" + Math.round(amountSpent*1*100)/100 + "</td>";
  item += "<td>" + Math.round(amountSpent*7*100)/100 + "</td>";
  item += "<td>" + Math.round(amountSpent*30.5*100)/100  + "</td>";
  item += "<td>" + Math.round(amountSpent*182.5*100)/100  + "</td>";
  item += "<td>" + Math.round(amountSpent*365*100)/100  + "</td>";
  item += "</tr>";
  tbody.append(item);
}

