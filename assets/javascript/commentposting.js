
if(document.title == "Forum | KEDU")
{
  console.log("bubu");
  var newPosttitle = document.querySelector("#newestQuestion > h4");
  newPosttitle.innerHTML = localStorage.title;

  var newPosttime = document.querySelector("#newestQuestion > p");
  newPosttime.innerHTML = "Just Now";

}

function post()
{
  //    <input type="text" name="title"> fra html
  //  var name = document.querySelector("input[name='title']");
  //  var age = document.querySelector("[name='age']");

  var titleHolder = document.querySelector("input[name='Title']");
  var commentHolder = document.querySelector("[name='ask']");
  var tagHolder = document.querySelector("input[name='tags']");

  localStorage.setItem("title", titleHolder.value);
  localStorage.setItem("question", commentHolder.value);
  localStorage.setItem("tags", tagHolder.value);

  window.location.href = "../forum.html";
}

function upvote()
{
  var upvoteNumber = document.getElementsByClassName('score');
  upvoteNumber[0].innerHTML = "667";
}

function downvote()
{
  var upvoteNumber = document.getElementsByClassName('score');
  upvoteNumber[0].innerHTML = "665";
}
