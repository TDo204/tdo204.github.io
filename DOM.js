function showFilter() {
    const filterContent = document.getElementById("filterContent");

    if (filterContent.style.display === "none") {
        filterContent.style.display = "block";
    } 
    else {
        filterContent.style.display = "none";
    }
}

function showAddNew() {
    const newContent = document.getElementById("newContent");

    if (newContent.style.display === "flex") {
        newContent.style.display = "none";
    } 
    else {
        newContent.style.display = "flex";
    }
}

function addNewArticle() {
    const inputHeader = document.getElementById("inputHeader").value;

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    const inputArticle = document.getElementById("inputArticle").value;

    const articleList = document.getElementById("articleList");

    let newArticle = document.createElement("article");
    let markerType = "";

    if (opinionRadio.checked) {
        newArticle.classList.add("opinion");
        markerType = "Opinion";
    }
    else if (recipeRadio.checked) {
        newArticle.classList.add("recipe");
        markerType = "Recipe";
    }
    else if (lifeRadio.checked) {
        newArticle.classList.add("update");
        markerType = "Update";
    }

    newArticle.innerHTML = `
        <span class="marker">${markerType}</span>
        <h2>${inputHeader}</h2>
        <p>${inputArticle}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    articleList.append(newArticle);
}

function filterArticles() {
    const opinionCheckbox = document.getElementById("opinionCheckbox");
    const recipeCheckbox = document.getElementById("recipeCheckbox");
    const updateCheckbox = document.getElementById("updateCheckbox");

    const articleList = document.querySelectorAll("#articleList article");

    articleList.forEach(article => {

        if (opinionCheckbox.checked && article.classList.contains("opinion") || 
            recipeCheckbox.checked && article.classList.contains("recipe") || 
            updateCheckbox.checked && article.classList.contains("update")) 
        {
            article.style.display = "block";
        }
        else {
            article.style.display = "none";
        }

    });
}