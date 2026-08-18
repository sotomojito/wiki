const contentArea = document.getElementById("content")
console.log (contentArea);

const linkArticleOne = document.getElementById("link-article-one");

linkArticleOne.addEventListener("click", function () {
    contentArea.innerHTML = "<h2>Article One</h2><p>Content yeah bro</p>"
})