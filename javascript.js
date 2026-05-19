function validateForm() {
    var form = document.forms["contact-form"];
    var name = form["name"].value.trim();
    var email = form["email"].value.trim();
    var subject = form["subject"].value.trim();
    var message = form["message"].value.trim();

    if (name == "") {
        alert("Full Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email Address must be filled out");
        return false;
    }

    // Optional: basic email format check
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (subject == "") {
        alert("Subject must be filled out");
        return fase;
    }

    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}


/*function validateForm() {
    var x = document.forms["contact-form"]["name].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

*/




