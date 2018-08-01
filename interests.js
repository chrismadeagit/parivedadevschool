var obj = {
    button: document.getElementById("learnmore"),
    onClick: function () {
        //this.onClick = location.href='http://google.com';
        // this.onClick=location.href='home.html';
        // this.onClick=
        //document.getElementById("my card")

    }


};
obj.button.addEventListener("click", obj.onClick);

obj.button.addEventListener("click", function(){obj.onClick()});

// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }