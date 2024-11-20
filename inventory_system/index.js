

new_btn.addEventListener("click", function(){
    
    
    if (item_form.className == "item_form_show") {item_form.className = "item_form"}
    else {item_form.className = "item_form_show"}
    
})

cancel_btn.addEventListener("click", function(){
    
    
    if (item_form.className == "item_form_show") {item_form.className = "item_form"}
    
})


document.getElementById("upload_image_btn").addEventListener("click", function() {
    document.getElementById("image_input").click();
});

document.getElementById("image_input").addEventListener("change", function(event) {
    var fileName = event.target.files[0]?.name;  
    if (fileName) {
        console.log("Selected file: " + fileName);
        var reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector("#pic img").src = e.target.result; 
        };
        reader.readAsDataURL(event.target.files[0]);
    }
});
