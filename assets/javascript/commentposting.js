
if(document.title == "Forum | KEDU")
{
  console.log("bubu");
  var newPosttitle = document.querySelector("#newestQuestion > h4");
  newPosttitle.innerHTML = localStorage.title;

  if(localStorage.title != "Noget smart tekst her")
  {
  var newPosttime = document.querySelector("#newestQuestion + p");
  newPosttime.innerHTML = "Just Now";
  }
}

if(document.title == "Question | KEDU" && localStorage.title != null)
{
  var tekstbox = document.querySelector("#tekstbox1 > p");
  tekstbox.innerHTML = "<h4>" + localStorage.title + "</h4>" + "<br>" + localStorage.question;

  if(localStorage.views == null)
  {
  localStorage.setItem("views", 1);
  }

  localStorage.setItem("views", parseInt(localStorage.getItem('views'))+1);
  console.log(localStorage.views);
  var viewCount = document.querySelector(".views > p");
  viewCount.innerHTML = localStorage.views + " " + "views"
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

function like(clicked_id)
{
  var likenumber = document.querySelector("[id=" + CSS.escape(clicked_id) + "] > p");
  //var likenumber = document.querySelector("#firstcom > p");
  if(likenumber.innerHTML != "+105")
  {
  likenumber.innerHTML = "+105";
  }
  else
  {
    downvote(clicked_id);
  }
}

function downvote(sameID)
{
  var likenumber = document.querySelector("[id=" + CSS.escape(sameID) + "] > p");
  likenumber.innerHTML = "+104";
}
