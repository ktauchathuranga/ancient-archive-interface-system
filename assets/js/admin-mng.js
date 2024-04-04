function displayPostDetails(postId) {
    var postDetails = {
        title: "Blog Post " + postId,
        content: "This is the detailed content of Blog Post " + postId + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nec justo hendrerit vestibulum."
    };

    var detailBox = document.getElementById("postDetails");
    detailBox.innerHTML = "<h3>" + postDetails.title + "</h3><p>" + postDetails.content + "</p>";
}

var btnA = document.getElementById("approveBtn");
var btnD = document.getElementById("declineBtn");

document.getElementById("post1").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails(1);
});
document.getElementById("post2").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails(2);
});
document.getElementById("post3").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails(3);
});
document.getElementById("post4").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails(4);
});

document.getElementById("approveBtn").addEventListener("click", function () {
    alert("Post approved!");
});

document.getElementById("declineBtn").addEventListener("click", function () {
    alert("Post declined!");
});
