function validation(){
    var nm = document.getElementById("name").value;
    var pw = document.getElementById("pswrd").value;
    var expression = Math.floor(Math.random() * 6);
    if(nm == "Winston" && pw == "Fortis Fortuna Adiuvat"){
        //document.getElementById("successCont").innerHTML = "<a class='linkToHits' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/hits.html\">Continue?</a><br>\n";
        window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/hits.html';
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
            "        <th><h3 class=\"Main_Header\">Confirmation #:</h3></th>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "        <td>\n" +
            "            <div class=\"titleFormWrapper3\">\n" +
            "            <form class=\"titleForm1\">\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"To\">To:</label><br>\n" +
            "                <input type=\"text\" id=\"To\" name=\"To\" required><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"Status\">Status:</label><br>\n" +
            "                <input type=\"text\" id=\"Status\" name=\"To\"><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"name\">Full Name:</label><br>\n" +
            "                <input type=\"text\" id=\"name\" name=\"name\" required><br><br>\n" +
            "\n" +
            "                <label class=\"Main_Header\" for=\"amount\">Amount:</label><br>\n" +
            "                <input type=\"text\" id=\"amount\" name=\"amount\" required><br><br>\n" +
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

    setTimeout(function () {
        document.getElementById("CommandLine1").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>root@Continentalaccess:~$</small></span> " +
            "sudo run diagnostic | automatically </p>"
    }, 5000);
    setTimeout(function () {
        document.getElementById("CommandLine2").innerHTML = "<p style='font-size: medium' class='FakeError'> " +
            "Error: 4563ed3, Diagnostic Failed to run automatically</p>"
    }, 7000);
    setTimeout(function () {
        document.getElementById("CommandLine3").innerHTML = "<p style='font-size: medium' class='FakeError'> " +
            "Error: 4563ed3, Switching to Manual Control of Diagnostics...</p>"
    }, 10000);
    setTimeout(function () {
        document.getElementById("CommandLine4").innerHTML = "<p style='font-size: medium' class='FakeError'> " +
            "Plesase Wait, System Processing...</p>"
    }, 14000);
    setTimeout(function () {
        document.getElementById("CommandLine5").innerHTML = "<p style='font-size: medium' class='FakeError'><span style='color: white'><small>root@Continentalaccess:~$</small></span> " +
            "start GUI | display=block </p>"
    }, 16500);

    setTimeout(function(){

        if (window.confirm("Open Terminal?"))
        {
            window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/Game2.html';
        }
    }, 18000);
}

function authenticationKey(){
    var u = document.getElementById("authKeys").value;
    if(u == "BML546298"){
        //document.getElementById("cd").innerHTML = "<div class='Main_Header'><a class='linkToHits' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/RealGamePlay.html\">Continue?</a></div>"
        window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/RealGamePlay.html';
    }
    else {
        alert("Please Enter Authentication Key")
    }
}

function goToCD() {
    document.getElementById("cd").innerHTML = "<h3 class='Main_Header'>Continental Diagnostic Program</h3>\n" +
        "\n" +
        "<p style='font-size: medium' class='Main_Header'>Beginning Manual Diagnostic Process</p>\n" +
        "<hr class='Main_Header'>\n" +
        "<table class='FakeError'>\n" +
        "    <tr>\n" +
        "        <th>\n" +
        "            <p style='font-size: medium'><span style='color: white'>root@Continentalaccess:~$ </span>\n" +
        "            ls</p>\n" +
        "        </th>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>Documents</td>\n" +
        "        <td>\n" +
        "            <a style='color: red' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/Keys.html\">.<span style='color: black'>authenticationKeys</span></a>\n" +
        "        </td>\n" +
        "        <td>HashCommands</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>FileSystem</td>\n" +
        "        <td>\n" +
        "            <a style='color: red' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/Gameplay.html\">readme.txt</a>\n" +
        "        </td>\n" +
        "        <td>\n" +
        "            <a style='color: red' onclick='Lose()' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/index.html\">EndOfDays.zip</a>\n" +
        "        </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>\n" +
        "            <a style='color: red' href=\"https://www.reddit.com/r/AskReddit/comments/a5m9bm/what_is_victorias_actual_secret/\">Victoriasactualsecrets</a>\n" +
        "        </td>\n" +
        "        <td style='color: red'>\n" +
        "            Ragnar.XSS\n" +
        "        </td>\n" +
        "        <td>PiratedACValhalla</td>\n" +
        "    </tr>\n" +
        "</table>" +
        "<form class=\"Main_Header\" action=\"#\">\n" +
        "    <label style='color: #00FF33' for=\"authKeys\">Winston's Authentication Key:</label><br>\n" +
        "    <input type=\"text\" id=\"authKeys\" name=\"authKeys\"><br><br>\n" +
        "    <input type=\"reset\" value=\"Submit All\" onclick=\"authenticationKey()\">\n" +
        "</form>"

}

function Lose() {
    if (window.confirm("You Have Failed, Press Enter To Continue.."))
    {
        window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/index.html';
    }
}

function Win() {
    if (window.confirm("You Have Won, Press Enter To Continue.."))
    {
        window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/LGP.html';
    }
}

function Win2() {
    if (window.confirm("You Have Won, Press Enter To Continue.."))
    {
        window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/Winner.html';
    }
}

$(document).ready(function () {
    GamePlayjW();
    GamePlayC();
    GamePlayW();
    GamePlayO();
    GamePlayO2();
    GamePlayO3();

});

function GamePlayjW(){



    $("#JohnWick1").hide(500, function() {
        $("#JohnWick1").html("<img class=\"GameTableImg\" id=\"JohnWick\" alt=\"Jardani Jovonovich\" src=\"JohnWick.jpg\" onclick='Win()'>");
    $("#JohnWick1").show(500);
        $("#JohnWick1").hide(500, function () {
            $("#JohnWick1").html("<img class=\"GameTableImg\" id=\"Cassian\" alt=\"Cassian\" src=\"Cassian.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
        $("#JohnWick1").hide(700, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Kit.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
        //bellow>
        $("#JohnWick1").hide(700, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Winston.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
        $("#JohnWick1").hide(700, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Julius.jpg\" onclick='Lose'>");
        });
        $("#JohnWick1").show(700);
        $("#JohnWick1").hide(500, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"TinyTim\" alt=\"TinyTim\" src=\"TinyTim.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
        $("#JohnWick1").hide(700, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Keanu.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
        $("#JohnWick1").hide(700, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"ScarFace.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
        $("#JohnWick1").hide(700, function () {
            $("#JohnWick1").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"adjuticator.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick1").show(700);
    GamePlayjW();
    });
}

function GamePlayC() {

    $("#Cassian1").hide(850, function() {
        $("#Cassian1").html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"adjuticator.jpg\" onclick='Lose()'>");
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"ScarFace.jpg\" onclick='Lose()'>");
        });
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Winston.jpg\" onclick='Lose()'>");
        });
        $("#Cassian1").show(850);
        //bellow>
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Kit.jpg\" onclick='Lose()'>");
        });
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Nero.jpg\" onclick='Lose'>");
        });
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Keanu.jpg\" onclick='Lose()'>");
        });
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"TinyTim\" alt=\"TinyTim\" src=\"TinyTim.jpg\" onclick='Lose()'>");
        });
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"Cassian\" alt=\"Cassian\" src=\"Cassian.jpg\" onclick='Lose()'>");
        });
        $("#Cassian1").show(850);
        $("#Cassian1").hide(850, function () {
            $("#Cassian1").empty().html("<img class=\"GameTableImg\" id=\"JohnWick\" alt=\"Jardani Jovonovich\" src=\"JohnWick.jpg\" onclick='Win()'>");
        });
        $("#Cassian1").show(500);
        GamePlayC();
    });

}

function GamePlayW() {

        $("#Winston1").hide(920, function() {
            $("#Winston1").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Julius.jpg\" onclick='Lose'>");
            $("#Winston1").show(920);
            $("#Winston1").hide(920, function () {
                $("#Winston1").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Winston.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            $("#Winston1").hide(920, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"ScarFace.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            //bellow>
            $("#Winston1").hide(920, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Keanu.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            $("#Winston1").hide(920, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"adjuticator.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            $("#Winston1").hide(920, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Kit.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            $("#Winston1").hide(920, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"JohnWick\" alt=\"Jardani Jovonovich\" src=\"JohnWick.jpg\" onclick='Win()'>");
            });
            $("#Winston1").show(500);
            $("#Winston1").hide(500, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"TinyTim\" alt=\"TinyTim\" src=\"TinyTim.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            $("#Winston1").hide(920, function () {
                $("#Winston1").empty().html("<img class=\"GameTableImg\" id=\"Cassian\" alt=\"Cassian\" src=\"Cassian.jpg\" onclick='Lose()'>");
            });
            $("#Winston1").show(920);
            GamePlayW();
        });
}

function GamePlayO() {

    $("#Other1").hide(1000, function() {
        $("#Other1").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Speed.jpg\" onclick='Lose'>");
        $("#Other1").show(1000);
        $("#Other1").hide(1000, function () {
            $("#Other1").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"JohnWick.jpg\" onclick='Win()'>");
        });
        $("#Other1").show(500);
        $("#Other1").hide(500, function () {
            $("#Other1").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"Morpheus.jpg\" onclick='Lose()'>");
        });
        $("#Other1").show(1000);
        //bellow>
        $("#Other1").hide(1000, function () {
            $("#Other1").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Neo.jpg\" onclick='Lose()'>");
        });
        $("#Other1").show(1000);
        $("#Other1").hide(1000, function () {
            $("#Other1").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"Rchitect.jpg\" onclick='Lose()'>");
        });
        $("#Other1").show(1000);
        $("#Other1").hide(1000, function () {
            $("#Other1").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Viggo.jpg\" onclick='Lose()'>");
        });
        $("#Other1").show(1000);

        GamePlayO();
    });
}

function GamePlayO2() {

    $("#Other2").hide(600, function() {
        $("#Other2").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Viggo.jpg\" onclick='Lose'>");
        $("#Other2").show(600);
        $("#Other2").hide(600, function () {
            $("#Other2").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Rchitect.jpg\" onclick='Lose()'>");
        });
        $("#Other2").show(600);
        $("#Other2").hide(600, function () {
            $("#Other2").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"Ptrick.jpg\" onclick='Lose()'>");
        });
        $("#Other2").show(600);
        //bellow>
        $("#Other2").hide(600, function () {
            $("#Other2").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"JohnWick.jpg\" onclick='Win()'>");
        });
        $("#Other2").show(500);
        $("#Other2").hide(500, function () {
            $("#Other2").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"Psychopth.jpg\" onclick='Lose()'>");
        });
        $("#Other2").show(600);
        $("#Other2").hide(600, function () {
            $("#Other2").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"FkJW2.jpg\" onclick='Lose()'>");
        });
        $("#Other2").show(600);
        $("#Other2").hide(600, function () {
            $("#Other2").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Julius.jpg\" onclick='Lose()'>");
        });
        $("#Other2").show(600);

        GamePlayO2();
    });
}

function GamePlayO3() {

    $("#Other3").hide(3000, function() {
        $("#Other3").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"JohnWickCosply.jpg\" onclick='Lose'>");
        $("#Other3").show(3000);
        $("#Other3").hide(3000, function () {
            $("#Other3").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"JohnWick.jpg\" onclick='Win()'>");
        });
        $("#Other3").show(500);
        $("#Other3").hide(500, function () {
            $("#Other3").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"FkJW2.jpg\" onclick='Lose()'>");
        });
        $("#Other3").show(3000);


        GamePlayO3();
    });
}

function goToCD2() {
    document.getElementById("LGP").innerHTML = "<h3 class='Main_Header'>Continental Diagnostic Program</h3>\n" +
        "\n" +
        "<p style='font-size: medium' class='Main_Header'><span id='cont'></span> Manual Diagnostic Process</p>\n" +
        "<hr class='Main_Header'>\n" +
        "<table class='FakeError'>\n" +
        "    <tr>\n" +
        "        <th>\n" +
        "            <p style='font-size: medium'><span style='color: white'>root@Continentalaccess:~$ </span>\n" +
        "            ls</p>\n" +
        "        </th>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>Documents</td>\n" +
        "        <td>authenticationKeys</td>\n" +
        "        <td>Veracrypt</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>Downloads</td>\n" +
        "        <td>\n" +
        "            <a style='color: red' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/LGPRM.html\">readme.txt</a>\n" +
        "        </td>\n" +
        "        <td>\n" +
        "            <a style='color: red' onclick='Lose()' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/index.html\">EndOfDays.zip</a>\n" +
        "        </td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td style='color: red'>NextTarget</td>\n" +
        "        <td style='color: red'>\n" +
        "            99Percent.XSS\n" +
        "        </td>\n" +
        "        <td>PiratedHitMan3</td>\n" +
        "    </tr>\n" +
        "</table>" +
        "<form class=\"Main_Header\" action=\"#\">\n" +
        "    <label style='color: #00FF33' for=\"authKeys2\">Root Authentication Key:</label><br>\n" +
        "    <input type=\"text\" id=\"authKeys2\" name=\"authKeys2\"><br><br>\n" +
        "    <input type=\"reset\" value=\"Submit All\" onclick=\"authenticationKey2()\">\n" +
        "</form>"

}

function conti() {
    setTimeout(function(){
    document.getElementById("cont").innerHTML = "<a class='hiddenLink' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/Key2.html\">Continue</a>"
}, 5000);
}

function authenticationKey2(){
    var u = document.getElementById("authKeys2").value;
    if(u == "BML92597"){
        //document.getElementById("cd").innerHTML = "<div class='Main_Header'><a class='linkToHits' href=\"https://webpages.uncc.edu/blucas17/ContinentalAccess/RealGamePlay.html\">Continue?</a></div>"
        window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/LRealGamePlay.html';
    }
    else {
        alert("Please Enter Authentication Key")
    }
}


function LGamePlayjW(){



    $("#JohnWick2").hide(400, function() {
        $("#JohnWick2").html("<img class=\"GameTableImg\" id=\"JohnWick\" alt=\"Jardani Jovonovich\" src=\"JohnWickCosply.jpg\" onclick='Win2()'>");
        $("#JohnWick2").show(400);
        $("#JohnWick2").hide(400, function () {
            $("#JohnWick2").html("<img class=\"GameTableImg\" id=\"Cassian\" alt=\"Cassian\" src=\"Cassian.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Kit.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        //bellow>
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Winston.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Julius.jpg\" onclick='Lose'>");
        });
        $("#JohnWick2").show(600);
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"TinyTim\" alt=\"TinyTim\" src=\"TinyTim.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Keanu.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"ScarFace.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        $("#JohnWick2").hide(600, function () {
            $("#JohnWick2").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"adjuticator.jpg\" onclick='Lose()'>");
        });
        $("#JohnWick2").show(600);
        LGamePlayjW();
    });
}

function LGamePlayC() {

    $("#Cassian2").hide(750, function() {
        $("#Cassian2").html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"adjuticator.jpg\" onclick='Lose()'>");
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"ScarFace.jpg\" onclick='Lose()'>");
        });
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Winston.jpg\" onclick='Lose()'>");
        });
        $("#Cassian2").show(750);
        //bellow>
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Kit.jpg\" onclick='Lose()'>");
        });
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Nero.jpg\" onclick='Lose'>");
        });
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Keanu.jpg\" onclick='Lose()'>");
        });
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"TinyTim\" alt=\"TinyTim\" src=\"TinyTim.jpg\" onclick='Lose()'>");
        });
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"Cassian\" alt=\"Cassian\" src=\"Cassian.jpg\" onclick='Lose()'>");
        });
        $("#Cassian2").show(750);
        $("#Cassian2").hide(750, function () {
            $("#Cassian2").empty().html("<img class=\"GameTableImg\" id=\"JohnWick\" alt=\"Jardani Jovonovich\" src=\"JohnWickCosply.jpg\" onclick='Win2()'>");
        });
        $("#Cassian2").show(400);
        LGamePlayC();
    });

}

function LGamePlayW() {

    $("#Winston2").hide(820, function() {
        $("#Winston2").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Julius.jpg\" onclick='Lose'>");
        $("#Winston2").show(820);
        $("#Winston2").hide(820, function () {
            $("#Winston2").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Winston.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        $("#Winston2").hide(820, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"ScarFace.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        //bellow>
        $("#Winston2").hide(820, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Keanu.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        $("#Winston2").hide(820, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"adjuticator.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        $("#Winston2").hide(820, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Kit.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        $("#Winston2").hide(820, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"JohnWick\" alt=\"Jardani Jovonovich\" src=\"JohnWick.jpg\" onclick='Win2()'>");
        });
        $("#Winston2").show(350);
        $("#Winston2").hide(350, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"TinyTim\" alt=\"TinyTim\" src=\"TinyTim.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        $("#Winston2").hide(820, function () {
            $("#Winston2").empty().html("<img class=\"GameTableImg\" id=\"Cassian\" alt=\"Cassian\" src=\"Cassian.jpg\" onclick='Lose()'>");
        });
        $("#Winston2").show(820);
        LGamePlayW();
    });
}

function LGamePlayO() {

    $("#Other4").hide(900, function() {
        $("#Other4").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Speed.jpg\" onclick='Lose'>");
        $("#Other4").show(900);
        $("#Other4").hide(900, function () {
            $("#Other4").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"JohnWickCosply.jpg\" onclick='Win2()'>");
        });
        $("#Other4").show(400);
        $("#Other4").hide(400, function () {
            $("#Other4").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"Morpheus.jpg\" onclick='Lose()'>");
        });
        $("#Other4").show(900);
        //bellow>
        $("#Other4").hide(900, function () {
            $("#Other4").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"Neo.jpg\" onclick='Lose()'>");
        });
        $("#Other4").show(900);
        $("#Other4").hide(900, function () {
            $("#Other4").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"Rchitect.jpg\" onclick='Lose()'>");
        });
        $("#Other4").show(900);
        $("#Other4").hide(900, function () {
            $("#Other4").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Viggo.jpg\" onclick='Lose()'>");
        });
        $("#Other4").show(900);

        LGamePlayO();
    });
}

function LGamePlayO2() {

    $("#Other5").hide(500, function() {
        $("#Other5").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"Viggo.jpg\" onclick='Lose'>");
        $("#Other5").show(500);
        $("#Other5").hide(500, function () {
            $("#Other5").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"Rchitect.jpg\" onclick='Lose()'>");
        });
        $("#Other5").show(500);
        $("#Other5").hide(500, function () {
            $("#Other5").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"Ptrick.jpg\" onclick='Lose()'>");
        });
        $("#Other5").show(500);
        //bellow>
        $("#Other5").hide(500, function () {
            $("#Other5").empty().html("<img class=\"GameTableImg\" id=\"Keanu\" alt=\"Keanu\" src=\"JohnWickCosply.jpg\" onclick='Win2()'>");
        });
        $("#Other5").show(400);
        $("#Other5").hide(400, function () {
            $("#Other5").empty().html("<img class=\"GameTableImg\" id=\"adjuticator\" alt=\"adjuticator\" src=\"Psychopth.jpg\" onclick='Lose()'>");
        });
        $("#Other5").show(500);
        $("#Other5").hide(500, function () {
            $("#Other5").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"FkJW2.jpg\" onclick='Lose()'>");
        });
        $("#Other5").show(500);
        $("#Other5").hide(500, function () {
            $("#Other5").empty().html("<img class=\"GameTableImg\" id=\"JohnSnow\" alt=\"John Snow\" src=\"Julius.jpg\" onclick='Lose()'>");
        });
        $("#Other5").show(500);

        LGamePlayO2();
    });
}

function LGamePlayO3() {

    $("#Other6").hide(2000, function() {
        $("#Other6").html("<img class=\"GameTableImg\" id=\"Julius\" alt=\"Julius\" src=\"JohnWickCosply.jpg\" onclick='Lose'>");
        $("#Other6").show(2000);
        $("#Other6").hide(2000, function () {
            $("#Other6").html("<img class=\"GameTableImg\" id=\"Winston\" alt=\"Winston\" src=\"JohnWick.jpg\" onclick='Win2()'>");
        });
        $("#Other6").show(400);
        $("#Other6").hide(400, function () {
            $("#Other6").empty().html("<img class=\"GameTableImg\" id=\"ScarFace\" alt=\"ScarFace\" src=\"FkJW2.jpg\" onclick='Lose()'>");
        });
        $("#Other6").show(2000);


        LGamePlayO3();
    });
}

function clock(element, minutes, seconds) {

    var time = minutes*60 + seconds;
    var interval = setInterval(function() {
        var el = document.getElementById(element);

        if (time <= 0){
            clearInterval(interval);
            if (window.confirm("You Have Lost, Press Enter To Continue.."))
            {
                window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/index.html';
            }
        }

        var minutes = Math.floor(time / 60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        var text = minutes + ":" + seconds;
        el.innerHTML = text;
        time--;
    }, 1000)
}

function alertWinning(){
    alert("Continental Access Diagnostic Complete\nSite functioning properly\nJohn Wick severely wounded, at large");
}

function FinalPage() {
    window.location.href = 'https://webpages.uncc.edu/blucas17/ContinentalAccess/FinalPage.html';
}