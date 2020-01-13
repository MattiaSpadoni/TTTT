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