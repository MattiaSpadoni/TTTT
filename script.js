function prova_vh(input){
				var altezza = document.getElementById("first").classList.add("vh-100");

				console.log("ho girato");
			}

			function simply_src(input){
				var src = input.id;
				if (src=="disclaimer.html"){
					var iframe_content = document.getElementById("first");
					iframe_content.classList.remove("vh-100");
					iframe_content.setAttribute("src", src);
				} else {
					var iframe_content = document.getElementById("first");
					iframe_content.classList.add("vh-100");
					iframe_content.setAttribute("src", src);
				}

			}

function change_css(input){
  				/*start changing the iframe visual appearance: using name and id of the clicked button to identify the new css and new article to load, hide the Iframe and make visible the div with the charging gif.*/
  				var css = "";
  				var src = input.id;
  				var css = input.name;
  				console.log(src, css);
  				var iframe_content = document.getElementById("first");
  				var charging = document.getElementById("charging");
  				iframe_content.style.display = "none";
  				charging.style.display = "block";
  				iframe_content.setAttribute("src", src);

  				/* start to change the CSS only after the iframe content finished loading */

  				iframe_content.onload = function(){
  					if (css == "css_futurista.css") {
  					iframe_content.contentWindow.document.getElementById("test").setAttribute("href", css);
  					setTimeout(function(){
  								iframe_content.style.display = "block";
  								iframe_content.classList.add("vh-100");;
  								charging.style.display = "none";
  							    }, 2000);
  					console.log(src, css);
  					alert(" '10 or '20 old machine detected, put on your smart contact lenses to enjoy the full style in 360°, please. Press ok to go on without them.");
  					} else {
  					iframe_content.contentWindow.document.getElementById("test").setAttribute("href", css);
  					setTimeout(function(){
  								iframe_content.style.display = "block";
  								iframe_content.classList.add("vh-100");
  								charging.style.display = "none";
  							    }, 2000);
  					setTimeout(function(){iframe_content.style.visibility = "visible";}, 2000);
  					console.log(src, css);
  					}
  				}
  			}


/*----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
BOZZE DI SCRIPT NON USATI/NON FUNZIONANTI/ALTERNATIVE A QUELLI USATI/PROVE GENERICHE
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
    var container = document.createElement("div");
    container.appendChild(array_1.item(0));
    container.appendChild(array_2.item(0));
    article.appendChild(container);

    --------------------------------------------------------

          var container = document.createElement("div");
      console.log(array_1, array_2);
      container.appendChild(array_1[counter].cloneNode(true));
      container.appendChild(array_2[counter].cloneNode(true));
      article.appendChild(container);
      console.log(counter);
  --------------------------------------------------------
    async function richiesta_array(input_1, input_2){
    var left = await fetch(input_1);
    var right = await  fetch(input_2);
    var text_left = await left.text();
    var text_right = await right.text();
    var parser = new DOMParser();
      var part_1 = parser.parseFromString(text_left, "text/html");
      var parser_2 = new DOMParser();
      var part_2 = parser_2.parseFromString(text_right, "text/html");
      console.log(part_1, part_2);
      var prova = part_1.getElementById("to_take").children;
      var prova_2 = part_2.getElementById("to_take").children;
      console.log(prova, prova_2);
      dispiega_elementi(prova, prova_2);

  }
    function dispiega_elementi(array_1, array_2){
    var article = document.getElementById("contenitore");
    var counter = -1;
    while (counter < array_1.length){
      counter++;
      var container = document.createElement("div");
      console.log(array_1, array_2);
      container.appendChild(array_1.item(counter).cloneNode(true));
      container.appendChild(array_2.item(counter).cloneNode(true));
      article.appendChild(container);
      console.log(counter);
    }
  --------------------------------------------------------
    async function richiesta_array(input_1, input_2){
    var left = await fetch(input_1);
    var right = await  fetch(input_2);
    var text_left = await left.text();
    var text_right = await right.text();
    var parser = new DOMParser();
      var part_1 = parser.parseFromString(text_left, "text/html");
      var parser_2 = new DOMParser();
      var part_2 = parser_2.parseFromString(text_right, "text/html");
      console.log(part_1, part_2);
      var prova = part_1.getElementById("to_take").children;
      var prova_2 = part_2.getElementById("to_take").children;
      console.log(prova, prova_2);
      dispiega_elementi(prova, prova_2);

  }
    function dispiega_elementi(array_1, array_2){
    var article = document.getElementById("contenitore");
    var counter = -1;
    while (array_1.length){
      counter++;
        var container = document.createElement("div");
        container.appendChild(array_1.item(0));
        container.appendChild(array_2.item(0));
        article.appendChild(container);
      console.log(counter);
    }
  }
*/