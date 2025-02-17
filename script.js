function showPopup() {
  var popup = document.getElementById("mypopup");
  popup.classList.toggle("show");
}

function showEmailform() {
    var popup = document.getElementById("myPopupEmail");
    popup.classList.toggle("show");
  }
 function Submitemail() {
    var popup = document.getElementById("submitemail")   
 }

function changebackground() {
   document.body.style.background = 'pink';
}

let pressedKeys = "";

        // Function to show the popup
        function showPopupeaster() {
            document.getElementById("eastereggpopup").style.display = "block";
        }

        // Function to close the popup
        function closePopup() {
            document.getElementById("eastereggpopup").style.display = "none";
        }

        // Event listener for keydown event
        document.addEventListener("keydown", function(event) {
            pressedKeys += event.key;

            // If the pressed keys exceed 4 characters, reset
            if (pressedKeys.length > 4) {
                pressedKeys = pressedKeys.slice(1);
            }

            // Check if the last 4 characters match "1337"
            if (pressedKeys === "1337") {
                showPopupeaster();
            }
          
          });