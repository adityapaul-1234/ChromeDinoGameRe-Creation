width = screen.width;
height_1 = screen.height;
height = height_1 - 100;
html_code = "<iframe id = 'iframe_1' src='https://scratch.mit.edu/projects/708779222/embed' allowtransparency='true' width='" + width + "px' height='" + height + "px' frameborder='0' scrolling='no' allowfullscreen></iframe>"
document.getElementById("div").innerHTML = html_code;
