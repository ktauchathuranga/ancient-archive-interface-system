function displayPostDetails(postId, postData, name, email) {
    var ptitle = document.getElementById(postId);
    POSTID = postId;
    console.log(ptitle);
    var postDetails = {
        title: ptitle.textContent,
        content: postData
    };

    var detailBox = document.getElementById("postDetails");
    detailBox.innerHTML = "<h3 id='mngtitle'>" + postDetails.title + "</h3><p id='mngdetails'>" + postDetails.content + "</p><div class='userdetail'><hr><h4>User Detils</h4><p><ul><li>Name: " + name + "</li><li>Email: " + email + "</li></ul></p></div>";
}

var post1 = "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m high";
var post2 = "Once towering at 7 stories, and believed to have around 1,000 chambers, the Palace of the great King Parakramabahu is a reminder of just how great the kingdom was. Built in the 12th century AD, this unique palace was also shared with his ministers, generals and servants. The prosperous kingdom, however, was subjected to constant Chola invasions in the 14th century, which in turn resulted in the kingdom to shift to the region of Ruhuna in the south of the island. This unfortunate event resulted in the magnificent palace to be plundered and razed to the ground, never to be rebuilt again. ";
var post3 = "Sandakada Pahana, also known as Moonstone, is a unique feature of the architecture of ancient Sri Lanka.It is an elaborately carved semi-circular stone slab, usually placed at the bottom of staircases and entrances. First seen in the latter stage of the Anuradhapura period, the sandakada pahana evolved through the Polonnaruwa, Gampola and Kandyan period. According to historians, the sandakada pahana symbolises the cycle of Samsāra in Buddhism.";
var post4 = "The Weijantha Prasada, a magnificent palace built with seven stories by King Parakramabahu and is said to have housed 1000 chambers. Although the initial construction may not have been able to hold such a large number of rooms, it is believed that there are possibilities that this was so considering the entirety of the palace and its extent.";

var post1Email = "abc@def.ghi";
var post2Email = "iam@here4.you";
var post3Email = "itsme@recodnize.me";
var post4Email = "come@tome.qucik";

var post1Name = "Jeron Malcom";
var post2Name = "Gem Stone";
var post3Name = "Andrew Staff";
var post4Name = "Not Elon";

var btnA = document.getElementById("approveBtn");
var btnD = document.getElementById("declineBtn");

var POSTID = 0;

document.getElementById("post1").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("1", post1, post1Name, post1Email);
});
document.getElementById("post2").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("2", post2, post2Name, post2Email);
});
document.getElementById("post3").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("3", post3, post3Name, post3Email);
});
document.getElementById("post4").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("4", post4, post4Name, post4Email);
});

document.getElementById("approveBtn").addEventListener("click", function () {
    var postElement = document.getElementById("post" + POSTID);
    postElement.style.display = "none";

    $("#approveBtn").hide();
    $("#declineBtn").hide();

    var detailBox = $("#postDetails");
        detailBox.html("<h3 id='appr' class='res'>APPROVED</h3>");
        setTimeout(function() {
            $("#appr").fadeOut(500, function() {
                detailBox.html("Click on post to see the options.");
            });
        }, 1000);
    
});

document.getElementById("declineBtn").addEventListener("click", function () {
    var postElement = document.getElementById("post" + POSTID);
    postElement.style.display = "none";

    $("#approveBtn").hide();
    $("#declineBtn").hide();

    var detailBox = $("#postDetails");
        detailBox.html("<h3 id='decl' class='res'>DECLINED</h3>");
        setTimeout(function() {
            $("#decl").fadeOut(500, function() {
                detailBox.html("Click on post to see the options.");
            });
        }, 1000);
});


