function skillsMember() {
    // 1. Create a request variable
    var request = new XMLHttpRequest();
    // 2. Create a new connection
    request.open("GET", "https://api.github.com/users/robinsondante/repos", true);
    // 3. Send request
    request.send();
    // 4. Check request status
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            // 5. Parse JSON data
            var data = JSON.parse(request.responseText);
            // 6. Display data
            var skills = [];
            for (var i = 0; i < data.length; i++) {
                skills.push(data[i].name);
            }
            document.getElementById("skills").innerHTML = skills.join(", ");
        }
    };
}