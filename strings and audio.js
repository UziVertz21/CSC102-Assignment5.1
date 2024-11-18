/*George Seals-Ramos
11-5-2024
Assignment 3.1 & 3.2*/
/*George Seals-Ramos
    11-10-2024
    Assignment 4.2*/
function strings()
{
    var string1 = document.getElementById("firstStr").value; 
    /* Recieves info from string1 on html */
   
    var spellCheck1 = "spellCheck1";
    /* Connection to the HTML to split the word */
    var spellCheck2 = "spellCheck2";
    /* Connection tot the HTML to reverse the spelling*/

    /*First looping method for spell check*/
    var splitStr = string1.split(""); 
    document.getElementById(splitStr);
    var reverseStr = splitStr.reverse();
    document.getElementById(reverseStr);
    var joinStr = reverseStr.join("");
    document.getElementById(joinStr);

    if (string1 == joinStr)
        {
            document.getElementById("checker").innerHTML = "YES";
        }
        else
        {
            document.getElementById("checker").innerHTML = "NO";
        }

    /*Splitting and reversing the word in spellCheck*/
    var spellCheck1 = string1.split("");
    document.getElementById("spellCheck1").innerHTML = spellCheck1;
    var spellCheck2 = spellCheck1.reverse("");
    document.getElementById("spellCheck2").innerHTML = spellCheck2;
}
    /* Function and verifcation process of 2nd form*/
function validate()
{
    var usersname = document.getElementById("nameString").value;
    var lastname = document.getElementById("nameString2").value;
    var fullname = usersname+" "+lastname;   /*Cancatinate of the first and last names*/

   if ((fullname.length >=20))
    {
        document.getElementById("formStatus").innerHTML = "Full name is acceptable"; /*correct input updates formStatus*/
    }
        else
        {
        document.getElementById("formStatus").innerHTML = "Name is too short, try adding your middle name";
        alert('WARNING: Look to form status'); /*incorrect entry results in reason why entry did not work with alert for warning for extra measure */
        }
}
        /* Separate forms to show that each form has a curtain function*/
function validate2()
{
    var zipcode = document.getElementById("numberString").value; /*secret password is a zipcode*/
    var fookyImage = "fooky.jpg"; /* Secret message */
    if ((zipcode <9999) || (zipcode >99999)) /*conditioned code to be only a 5 digit number or zipcode*/
    {
        document.getElementById("formStatus2").innerHTML = "A zipcode needs 5 digits"; /*the hint to help user*/
    }
        else
        {
            alert("This is my dog, Fukushima Cheetoh Seals-Ramos"); /*correct entry reveals alert, shows secret message and image */
        document.getElementById("finalImage").src = fookyImage;
        document.getElementById("formStatus").innerHTML = "You have figure out the zipcode riddle!";
        document.getElementById("formStatus2").innerHTML = "Fooky is my son. :)";
        }
}
/*assignment 4.2 audio functions*/
function sound(src) 
{// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    } /* teams chat for the button function play*/
}

function play() 
{
    mySound = new sound("rain_Audio.mp3");
    mySound.play(); 
}

function stop() 
{
    window.location.reload();
}