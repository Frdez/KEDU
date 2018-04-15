
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

function like()
{
  var likenumber = document.querySelector("#firstcom > p");
  if(likenumber.innerHTML != "+105")
  {
  likenumber.innerHTML = "+105";
  }
  else
  {
    downvote();
  }
}

function downvote()
{
  var likenumber = document.querySelector("#firstcom > p");
  likenumber.innerHTML = "+104";
}
