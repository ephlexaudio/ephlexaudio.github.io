$( document ).ready(function()
{
  createNavigationMenu();
});
function createNavigationMenu()
{
  var menu = $('#navigationMenu');

  menu.append($('<div>')//<div class="col-md-2"></div>
    .append($('<div>').attr({"class":"col-lg-12 navbar-inverse"})
    .append($('<ul>').attr({"class":"nav navbar-nav"})
    .append($('<li>').append($('<a>').attr("href","/index.html").text("Main")))
    .append($('<li>').append($('<a>').attr("href","/pedal.html").text("The Evolution of the FLX Pedal")))
    .append($('<li>').append($('<a>').attr("href","/editor.html").text("The FLX Editor Application")))
    .append($('<li>').append($('<a>').attr("href","../../../../python_tools.html").text("Python Tools and Prototyping")))
    .append($('<li>').append($('<a>').attr("href","../../../../about.html").text("About")))
  )));
}
