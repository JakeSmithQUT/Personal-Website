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

function showTab(language, element) {
    var contents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';  // Hide all tab contents
    }
    document.getElementById(language).style.display = 'block';  // Show the selected tab content
  
    var tabs = document.querySelectorAll('.tabs button');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');  // Remove active class from all tabs
    }
    element.classList.add('active');  // Add active class to the clicked tab
  }
  