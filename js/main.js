document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            this.classList.toggle("active"); // Toggle the active class
            while(content && !content.classList.contains("collapsible")) {
                if (content.style.display === "none") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
                content = content.nextElementSibling;
            }
        });
    }
});
