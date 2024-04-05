function displayPostDetails(postId, postData) {
    var ptitle = document.getElementById(postId);
    console.log(ptitle);
    var postDetails = {
        title: ptitle.textContent,
        content: postData
    };

    var detailBox = document.getElementById("postDetails");
    detailBox.innerHTML = "<h3 id='mngtitle'>" + postDetails.title + "</h3><p id='mngdetails'>" + postDetails.content + "</p>";
}

var post1 = "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m high";
var post2 = "Once towering at 7 stories, and believed to have around 1,000 chambers, the Palace of the great King Parakramabahu is a reminder of just how great the kingdom was. Built in the 12th century AD, this unique palace was also shared with his ministers, generals and servants. The prosperous kingdom, however, was subjected to constant Chola invasions in the 14th century, which in turn resulted in the kingdom to shift to the region of Ruhuna in the south of the island. This unfortunate event resulted in the magnificent palace to be plundered and razed to the ground, never to be rebuilt again. ";
var post3 = "Sandakada Pahana, also known as Moonstone, is a unique feature of the architecture of ancient Sri Lanka.It is an elaborately carved semi-circular stone slab, usually placed at the bottom of staircases and entrances. First seen in the latter stage of the Anuradhapura period, the sandakada pahana evolved through the Polonnaruwa, Gampola and Kandyan period. According to historians, the sandakada pahana symbolises the cycle of Samsāra in Buddhism.";
var post4 = "The Weijantha Prasada, a magnificent palace built with seven stories by King Parakramabahu and is said to have housed 1000 chambers. Although the initial construction may not have been able to hold such a large number of rooms, it is believed that there are possibilities that this was so considering the entirety of the palace and its extent.";

var btnA = document.getElementById("approveBtn");
var btnD = document.getElementById("declineBtn");

document.getElementById("post1").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("1", post1);
});
document.getElementById("post2").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("2", post2);
});
document.getElementById("post3").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("3", post3);
});
document.getElementById("post4").addEventListener("click", function () {
    btnA.style.display = "block";
    btnD.style.display = "block";
    displayPostDetails("4", post4);
});

document.getElementById("approveBtn").addEventListener("click", function () {
    alert("Post approved!");
});

document.getElementById("declineBtn").addEventListener("click", function () {
    alert("Post declined!");
});
