

new_btn.addEventListener("click", function(){
    
    
    if (item_form.className == "item_form_show") {item_form.className = "item_form"}
    else {item_form.className = "item_form_show"}
    
})

cancel_btn.addEventListener("click", function(){
    
    
    if (item_form.className == "item_form_show") {item_form.className = "item_form"}
    
})

edit_cancel_btn.addEventListener("click", function(){
    
    
    if (edit_form.className == "item_form_show") {edit_form.className = "item_form"}
    
})

items = document.getElementsByClassName("item");
Array.from(items).forEach(element => {
    let button = element.querySelector("#buttons");
    element.addEventListener("mouseenter", function () {
        button.style.display = 'block';
        button.style.filter = "blur(0px)";
    });

    element.addEventListener("mouseleave", function () {
        button.style.display = 'none';
    });
});


edit_btn = document.getElementsByClassName("edit_btn");
Array.from(edit_btn).forEach(element => {
    element.addEventListener("click", () => {
        const parentDiv = element.parentElement;
        const item_cont = parentDiv.parentElement;
        const item_content = item_cont.querySelector(".item_content");

        document.getElementById('edit_id').value = item_content.children[1].querySelector("span").innerHTML;
        document.getElementById('edit_name').value = item_content.children[2].querySelector("span").innerHTML;
        document.getElementById('edit_type').value = item_content.children[3].querySelector("span").innerHTML;
        document.getElementById('edit_stock').value = item_content.children[4].querySelector("span").innerHTML;
        document.getElementById('edit_price').value = item_content.children[5].querySelector("span").innerHTML;

        if (item_form.className == "item_form_show") {item_form.className = "item_form"}

        edit_form.className = "item_form_show"

        console.log(document.getElementById('edit_id').value)
    })
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


window.onload = function() {
    fetch('db.php')
        .then(response => response.text())
        .then(data => console.log("create db successful"));


    fetch('read.php')
        .then(response => response.text())
        .then(data => console.log("read successful"));
};

