var navigationButton = document.getElementById("navigation-button");
navigationButton.addEventListener("click", togglePanel);

var navigationPanel = document.getElementById("navigation-panel");
var contentDiv = document.getElementById("contentDiv");

function getHomePage() {
    window.location = '../../templets/index.html';
}

function togglePanel() {
    var listOfcss = navigationPanel.classList;
    var istOfContentcss = contentDiv.classList;
    var allDivs = document.getElementsByClassName("navigation-panel-content");
    if (listOfcss.contains("col-sm-3")) {
        listOfcss.remove("col-sm-3");
        listOfcss.add("col-sm-1");
        istOfContentcss.remove("col-sm-9");
        istOfContentcss.add("col-sm-11");
        for (var a = 0; a < allDivs.length; a++) {
            allDivs[a].hidden = true;
        }
    } else {
        listOfcss.add("col-sm-3");
        listOfcss.remove("col-sm-1");
        istOfContentcss.add("col-sm-9");
        istOfContentcss.remove("col-sm-11");
        for (var a = 0; a < allDivs.length; a++) {
            allDivs[a].hidden = false;
        }
    }
}

function showClose(div) {
    div.children[0].children[0].style.display = 'block';
}

function hideClose(div) {
    div.children[0].children[0].style.display = 'none';
}

function closeParent(div) {
    div.parentNode.parentNode.remove();

}

function creatNewElements(divs) {
    divs = divs.parentNode.parentNode;

    var mainDiv = document.createElement("div");
    mainDiv.classList.add("container-fluid", "cat-container");
    mainDiv.addEventListener("mouseover", (function() { return showClose(this) }));
    mainDiv.addEventListener("mouseout", (function() { return hideClose(this) }));


    var closeIcon = document.createElement("i");
    closeIcon.id = "newElement";
    closeIcon.classList.add("fas", "fa-times-circle", "ml-sm-auto", "mr-sm-auto", "close-icon");
    closeIcon.addEventListener("click", (function() { return closeParent(this) }));
    mainDiv.appendChild(closeIcon);

    for (var a = 0; a < Object.entries(QuestionTypes).length; a++) {
        var categoryDiv = document.createElement("div");
        categoryDiv.id = QuestionTypes["q" + (a + 1)]["fun"];
        categoryDiv.addEventListener("click", (function() { return creatQuestionWithType(this, this.id); }));
        categoryDiv.classList.add("col-sm-3", "cat-icon", a);
        if (a % 4 == 0 || a == 0) {
            var mainRowDiv = document.createElement("div");
            mainRowDiv.classList.add("col-sm-8", "ml-sm-auto", "mr-sm-auto");
            if (a == 0) { mainRowDiv.appendChild(closeIcon); }
            var rowDiv = document.createElement("div");
            rowDiv.classList.add("row", "cat-row");
            categoryDiv.classList.add("col-sm-offset-2");
        }
        var questionIcon = document.createElement("i");
        questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
        categoryDiv.appendChild(questionIcon);
        var questionName = document.createElement("p");
        questionName.classList.add("cat-icon-text");
        questionName.innerHTML = QuestionTypes["q" + (a + 1)]["name"];
        categoryDiv.appendChild(questionName);
        rowDiv.appendChild(categoryDiv);
        mainRowDiv.appendChild(rowDiv);
        mainDiv.appendChild(mainRowDiv);
    }
    divs.insertBefore(mainDiv, divs.children[divs.children.length - 2]);

}
var QuestionTypes = {
    q1: { name: "Multi Choice Question", fun: "multi" },
    q2: { name: "Short Answers", fun: "short" },
    q3: { name: "Complete Syntax", fun: "complete" },
    q4: { name: "Multi Answer Question", fun: "multiAnswers" },
    q5: { name: "Draw", fun: "draw" },
    q6: { name: "Math", fun: "math" },
    q7: { name: "UnKnown", fun: "UnKnown" },
    q8: { name: "UnKnown", fun: "UnKnown" }
}

var questionId = 0;

function creatQuestionWithType(div, question) {
    var parent = div.parentNode.parentNode.parentNode.parentNode;
    console.log(parent)
    var divIndex = Array.prototype.indexOf.call(parent.children, div.parentNode.parentNode.parentNode);
    var questionContent;
    questionId++;
    switch (question) {
        case "multi":
            questionContent = getMultiQuetionDiv(divIndex, questionId);
            console.log(questionId);
            break;
        case "short":
            questionContent = getShortQuetionDiv(divIndex, questionId);
            break;
        case "complete":
            questionContent = getCompeletQuestionDiv(divIndex, questionId);
            break;
        case "multiAnswers":
            questionContent = getMultiAnswerDiv(divIndex, questionId);
            break;


    }

    parent.replaceChild(questionContent, parent.children[divIndex]);
}

function responseInput(input) {
    input.style.width = ((input.value.length + 10) * 8) + 'px'
}
$(document).ready(function() {


    $('[data-toggle="floatLabel"]').attr('data-value', $(this).val()).on('keyup change', function() {
        $(this).attr('data-value', $(this).val());
    });
});

function submitting() {
    $("#exampleModalCenter").modal()

}


function save() {
    console.log("save" + document.getElementById("time").value);
    document.getElementById("contentDiv").submit();
    $("#exampleModalCenter").modal("hide");
}