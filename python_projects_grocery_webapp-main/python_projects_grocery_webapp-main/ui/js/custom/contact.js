(function (){

  $.get(contactusApiUrl, function (response) {
    if(response) {
      var table = '';
      $.each(response, function(index, contact) {
          table += '<tr data-fname="'+ contact.First_name +'" data-lname="'+ contact.Last_name +'" data-email="'+ contact.Email_id +'" data-subject="'+ contact.Subject + '"data-message="'+ contact.Message +'">' +
              '<td>'+ contact.First_name +'</td>'+
              '<td>'+ contact.Last_name +'</td>'+
              '<td>'+ contact.Email_id +'</td>'+
              '<td>'+ contact.Subject +'</td>'+
              '<td>'+ contact.Message +'</td>'+
              '<td><span class="btn btn-xs btn-danger delete-product">Delete</span></td></tr>';
              
      });
      $("table").find('tbody').empty().html(table);
  }
});
});


function validate(){
    var First_name = document.getElementById("fname").value;
    var Last_name = document.getElementById("lname").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(First_name.length < 2){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(Last_name.length < 2){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    } 
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }