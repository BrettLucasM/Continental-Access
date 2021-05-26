function validation(){
    var nm = document.getElementById("name").value
    var pw = document.getElementById("pswrd").value;
    var expression = Math.floor(Math.random() * 6);
    if(nm == "Winston" && pw == "Fortis Fortuna Adiuvat"){
        document.getElementById("successCont").innerHTML = "<a class='linkToHits' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/hits.html\">Continue?</a><br>\n";
    }
    else{
        switch(expression) {
            case 1:
                alert("Your Username or Password is incorrect. Please try again, or give up.");
                break;
            case 2:
                alert("Your Username or Password is incorrect. You're kind of bad at this.");
                break;
            case 3:
                alert("Wrong info...I shouldnt tell you this, but search the page for clues.");
                break;
            case 4:
                alert("You guessed it, your Username or Password is incorrect.");
                break;
            case 5:
                alert("You suck at this. Try again.");
                break;
            default:
                alert("Your Username or Password is incorrect. Please try again, or give up.");
        }
    }
}
function welcome(){

    setTimeout(function(){
        document.getElementById("welcome").innerHTML = "<h1 class='Main_Header'>Continental Access</h1>" +
            "<table class=\"titleFormWrapper4\">\n" +
            "    <tr>\n" +
            "        <th><h3 class=\"Main_Header\">Contract Information:</h3></th>\n" +
            "        <th><h3 class=\"Main_Header\">Confirmation:</h3></th>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "        <td>\n" +
            "            <div class=\"titleFormWrapper3\">\n" +
            "            <form class=\"titleForm1\">\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"To\">To:</label><br>\n" +
            "                <input type=\"text\" id=\"To\" name=\"To\"><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"Status\">Status:</label><br>\n" +
            "                <input type=\"text\" id=\"Status\" name=\"To\"><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"name\">Full Name:</label><br>\n" +
            "                <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"amount\">Amount:</label><br>\n" +
            "                <input type=\"text\" id=\"amount\" name=\"amount\"><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"Loc\">Last Known Location:</label><br>\n" +
            "                <input type=\"text\" id=\"Loc\" name=\"Loc\"><br><br>\n" +
            "            </form>\n" +
            "        </div>\n" +
            "        </td>\n" +
            "\n" +
            "        <td>\n" +
            "            <div class=\"titleFormWrapper2\">\n" +
            "                <form class=\"titleForm2\">\n" +
            "\n" +
            "                    <label class=\"Main_Header\" for=\"DID\">Designation ID:</label><br>\n" +
            "                    <input type=\"text\" id=\"DID\" name=\"DID\"><br><br>\n" +
            "\n" +
            "                    <label class=\"Main_Header\" for=\"DSC\">Date of superseded Certificate:</label><br>\n" +
            "                    <input type=\"text\" id=\"DSC\" name=\"DSC\"><br><br>\n" +
            "\n" +
            "                    <label for=\"yes\" class=\"Main_Header\">Payment Upon Death:</label><br><br>\n" +
            "                    <input type=\"radio\" id=\"yes\" name=\"yes\" value=\"yes\">\n" +
            "                    <label class=\"Main_Header\" for=\"yes\">Yes</label><br>\n" +
            "                    <input type=\"radio\" id=\"no\" name=\"yes\" value=\"no\">\n" +
            "                    <label class=\"Main_Header\" for=\"no\">No</label><br><br><br><br>\n" +
            "\n" +
            "                    <input type=\"submit\" value=\"Submit All\" onclick=\"crash()\">\n" +
            "                </form>\n" +
            "            </div>\n" +
            "        </td>\n" +
            "    </tr>\n" +
            "</table>";
    }, 3000);
}

function crash() {
    document.getElementById("welcome").innerHTML =  " <p style='font-size: medium' class='FakeError'>Error</p>" + "<small class='FakeError'>Critical Kernel Error: Abnormal SQL Injection, 675HX</small>"

    setTimeout(function(){
        document.getElementById("welcome").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> //You Have Failed...</p>"
    }, 3000);

    setTimeout(function(){
        document.getElementById("SecondHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> CREATE TABLE users(\n" +
            "  id    SERIAL PRIMARY KEY,\n" +
            "  email VARCHAR(40) NOT NULL UNIQUE\n" +
            ");\n" +
            ");</p>"
    }, 5000);

    setTimeout(function(){
        document.getElementById("ThirdHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> CREATE TABLE posts(\n" +
            "  id SERIAL PRIMARY KEY,\n" +
            "  user_id INTEGER NOT NULL REFERENCES users(id),\n" +
            "  title   VARCHAR(100) NOT NULL UNIQUE\n" +
            ");\n" +
            "CREATE TABLE comments(\n" +
            "  id      SERIAL PRIMARY KEY,\n" +
            "  user_id INTEGER NOT NULL REFERENCES users(id),\n" +
            "  post_id INTEGER NOT NULL REFERENCES posts(id),\n" +
            "  body    VARCHAR(500) NOT NULL\n" +
            ");</p>"
    }, 6000);

    setTimeout(function(){
        document.getElementById("FourthHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> " +
            "#ssh user@host.com \n </p>"
    }, 7000);

    setTimeout(function(){
        document.getElementById("FifthHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> " +
             "login: user\n </p>"
    }, 7500);

    setTimeout(function(){
        document.getElementById("SixthHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> " +
             "password: password\n </p>"
    }, 8000);

    setTimeout(function(){
        document.getElementById("SeventhHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> " +
             "cd $CATALINA_HOME/bin; </p>"
    }, 8500);

    setTimeout(function(){
        document.getElementById("EigthHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>JohnWick@Ubuntu:~$</small></span> " +
             "sudo ./catalina.sh start; </p>"
    }, 9000);

    setTimeout(function(){
        document.getElementById("NinthHckMsg").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>User@host:~$</small></span> " +
            "sudo call ./EndOfDays; </p>"
    }, 10000);

    setTimeout(function(){
        document.getElementById("FH").innerHTML = "<table class='eodTable'>" + "<tr>" + "<th>" +"<p style='font-size: large' class='FakeError'> " +
            "..///////////////////........" + "<br>" +
            "..//........................." + "<br>" +
            "..//........................." + "<br>" +
            "..//........................." + "<br>" +
            "..//////////////............." + "<br>" +
            "..//........................." + "<br>" +
            "..//........................." + "<br>" +
            "..//........................." + "<br>" +
            "..//........................." + "<br>" +
            "..///////////////////////...."
            + "</p>" +"</th>" + "<th>" +
            "<p style='font-size: large' class='FakeError'> " +
            ".........//.................// <br>" +
            ".......//.//...............//. <br>" +
            "......//...//.............//.. <br>" +
            ".....//.....//...........//... <br>" +
            "....//.......//.........//.... <br>" +
            "...//.........//.......//..... <br>" +
            "..//...........//.....//...... <br>" +
            ".//.............//...//....... <br>" +
            "//...............//.//........ <br>" +
            "//................///......... <br>"
            + "</p>" +
            "</th>"+ "<th>" +
            "<p style='font-size: large' class='FakeError'>" +
            "///////////////////////.... <br>" +
            "//.....................//... <br>" +
            "//...................... //. <br>" +
            "//........................//... <br>" +
            "//.........................//... <br>" +
            "//........................//..... <br>" +
            "//.......................//...... <br>" +
            "//.....................//....... <br>" +
            "//....................//....... <br>" +
            "//////////////////////......... <br>" +
            "</p>" +
            "</th></tr>" + "<tr><th>" +
        "<p style='font-size: large' class='FakeError'>" +
        "//////////////////////////........ <br>" +
        "//.......................//....... <br>" +
        "//...................... //....... <br>" +
        "//.......................//....... <br>" +
        "//.......................//....... <br>" +
        "//...................... //....... <br>" +
        "//.......................//....... <br>" +
        "//.......................//....... <br>" +
        "//.......................//....... <br>" +
        "//////////////////////////......... <br>" +
        "</p>" +
        "</th>" + "<th>" +
        "<p style='font-size: large' class='FakeError'>" +
        "//////////////////////............ <br>" +
        "//................................ <br>" +
        "//................................ <br>" +
        "//................................ <br>" +
        "//////////////.................... <br>" +
        "//................................ <br>" +
        "//................................ <br>" +
        "//................................ <br>" +
        "//................................ <br>" +
        "//................................ <br>" +
        "</p>" +
        "</th></tr>" + "<tr><th>" +
            "<p style='font-size: large' class='FakeError'>" +
            "////////////////////////... <br>" +
            "//.....................//... <br>" +
            "//...................... //. <br>" +
            "//........................//... <br>" +
            "//.........................//... <br>" +
            "//........................//..... <br>" +
            "//.......................//...... <br>" +
            "//.....................//....... <br>" +
            "//....................//....... <br>" +
            "//////////////////////......... <br>" +
            "</p>" +
            "</th>" +
            "<th>" +
        "<p style='font-size: large' class='FakeError'>" +
        ".........//................. <br>" +
        "........//.//............... <br>" +
        ".......//...//.............. <br>" +
        "......//.....//................. <br>" +
        ".....//.......//................ <br>" +
        "..../////////////............... <br>" +
        "...//...........//............... <br>" +
        "..//.............//............. <br>" +
        ".//...............//........... <br>" +
        "//.................//......... <br>" +
        "</p>" +
        "</th>" +
            "<th>" +
            "<p style='font-size: large' class='FakeError'>" +
            ".............//.......//..... <br>" +
            "..............//.....//...... <br>" +
            "...............//...//....... <br>" +
            "................//.//............ <br>" +
            ".................//.............. <br>" +
            ".................//............. <br>" +
            ".................//............. <br>" +
            ".................//............. <br>" +
            ".................//............ <br>" +
            ".................//........... <br>" +
            "</p>" +
            "</th>" +
            "<th>" +
            "<p style='font-size: large' class='FakeError'>" +
            "......////////////////....... <br>" +
            ".....//..................... <br>" +
            ".....//..................... <br>" +
            ".....//.......................... <br>" +
            "......//......................... <br>" +
            "......//////////////........... <br>" +
            "..................//............ <br>" +
            "..................//............ <br>" +
            "..................//......... <br>" +
            ".....///////////////.......... <br>" +
            "</p>" +
            "</th>" +
            "</tr>" +
            "</table>"

    }, 12000);

    setTimeout(function(){
        alert("Remote Exploit found! \nRecomend Diagnostic On Site, Continental Access.");

        if (window.confirm("Cofirm Diagnostic?"))
        {
            window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/Game.html';
        }
    }, 16000);
}

function commandLine() {

    setTimeout(function(){
        document.getElementById("CommandLine1").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>root@Continentalaccess:~$</small></span> " +
            "sudo run diagnostic | automatically </p>"
    }, 5000);
    setTimeout(function(){
        document.getElementById("CommandLine2").innerHTML = "<p style='font-size: medium' class='FakeError'> " +
            "Error: 4563ed3, Diagnostic Failed to run automatically</p>"
    }, 7000);
    setTimeout(function(){
        document.getElementById("CommandLine3").innerHTML = "<p style='font-size: medium' class='FakeError'> " +
            "Error: 4563ed3, Switching to Manual Control of Diagnostics...</p>"
    }, 10000);
    setTimeout(function(){
        document.getElementById("CommandLine4").innerHTML = "<p style='font-size: medium' class='FakeError'> " +
            "Plesase Wait, System Processing...</p>"
    }, 14000);
    setTimeout(function(){
        document.getElementById("CommandLine5").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>root@Continentalaccess:~$</small></span> " +
            "start GUI | display=block </p>"
    }, 16500);
    setTimeout(function(){
    document.getElementById("commandLine").innerHTML = "<h3 class='Main_Header'>Continental Diagnostic Program</h3>" +
        "<p style='font-size: medium' class='Main_Header'>Beginning Manual Diagnostic Process</p>" +
        "<hr class='Main_Header'>" +
        "<table class='FakeError'><tr><th><p style='font-size: medium'><span style='color: white'>root@Continentalaccess:~$ cd</span></p></th></tr><tr><td>Documents</td><td style='color: red'><a href=\\" +
        "https://www.reddit.com/r/AskReddit/comments/a5m9bm/what_is_victorias_actual_secret/\">authenticationKeys</a></td><td>HashCommands</td></tr><tr><td>FileSystem</td><td style='color: yellow'><a href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/hits.html\">readme.txt</a></td><td style='color: red'>EndOfDays.zip</td>" +
        "</tr><tr><td style='color: red'><a href=\"https://www.reddit.com/r/AskReddit/comments/a5m9bm/what_is_victorias_actual_secret/">Victoriasactualsecrets</a></td><td style='color: red'>Ragnar.XSS</td><td>PiratedACValhalla</td></tr></table>"
}, 19000);
}