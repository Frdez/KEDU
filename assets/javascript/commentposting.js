function post()
{
  //    <input type="text" name="title"> fra html
  //  var name = document.querySelector("input[name='title']");
  //  var age = document.querySelector("[name='age']");

  var titleHolder = document.querySelector("input[name='title']");
  var commentHolder = document.querySelector("input[name='commentfield']");

  localStorage.setItem("title", titleHolder.value);
  localStorage.setItem("comment", commentHolder.value);

  console.log(localStorage.title);
  //window.location.href = "forum.html";
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
