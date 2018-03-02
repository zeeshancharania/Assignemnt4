function MenuOption()
{
 if (document.getElementById("menu").value == "Show Area 1")
 {
 document.getElementById("showarea1").style.visibility = "visible";
 document.getElementById("showarea2").style.visibility = "hidden";
 }
 else if (document.getElementById("menu").value == "Show Area 2")
 {
 document.getElementById("showarea1").style.visibility = "hidden";
 document.getElementById("showarea2").style.visibility = "visible";
 }
 else
 {
 document.getElementById("showarea1").style.visibility = "hidden";
 document.getElementById("showarea2").style.visibility = "hidden";
 }
}