function createMultiChoiseQuetion(id, question, degree, answer1, answer2, answer3, answer4) {
    var row = document.createElement("div");
    row.classList.add("row");

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-12", "question-container", "container-fluid");

    var questionDivRow = document.createElement("div");
    questionDivRow.classList.add("row");

    var questionName = document.createElement("p");
    questionName.classList.add("question-name");
    questionName.innerText = question;

    var questiondegree = document.createElement("span");
    questiondegree.classList.add("degree");
    questiondegree.innerText = degree;
    //q1
    var questionDivinputGroup1 = document.createElement("div");
    questionDivinputGroup1.classList.add("input-group");

    var questionDivinputGroup1prepend = document.createElement("div");
    questionDivinputGroup1prepend.classList.add("input-group-prepend");

    var questionDivinputGroup1text = document.createElement("div");
    questionDivinputGroup1text.classList.add("input-group-text");

    var rdio1 = document.createElement("input");
    rdio1.setAttribute("type", "radio");
    rdio1.setAttribute("name", "answerq" + id);
    rdio1.setAttribute("value", answer1);
    rdio1.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup1text.appendChild(rdio1);
    questionDivinputGroup1prepend.appendChild(questionDivinputGroup1text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer1;

    questionDivinputGroup1.appendChild(questionDivinputGroup1prepend);
    questionDivinputGroup1.appendChild(answerValue);
    //q2
    var questionDivinputGroup2 = document.createElement("div");
    questionDivinputGroup2.classList.add("input-group");

    var questionDivinputGroup2prepend = document.createElement("div");
    questionDivinputGroup2prepend.classList.add("input-group-prepend");

    var questionDivinputGroup2text = document.createElement("div");
    questionDivinputGroup2text.classList.add("input-group-text");

    var rdio2 = document.createElement("input");
    rdio2.setAttribute("type", "radio");
    rdio2.setAttribute("name", "answerq" + id);
    rdio2.setAttribute("value", answer2);
    rdio2.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup2text.appendChild(rdio2);
    questionDivinputGroup2prepend.appendChild(questionDivinputGroup2text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer2;

    questionDivinputGroup2.appendChild(questionDivinputGroup2prepend);
    questionDivinputGroup2.appendChild(answerValue);
    //q3

    var questionDivinputGroup3 = document.createElement("div");
    questionDivinputGroup3.classList.add("input-group");

    var questionDivinputGroup3prepend = document.createElement("div");
    questionDivinputGroup3prepend.classList.add("input-group-prepend");

    var questionDivinputGroup3text = document.createElement("div");
    questionDivinputGroup3text.classList.add("input-group-text");

    var rdio3 = document.createElement("input");
    rdio3.setAttribute("type", "radio");
    rdio3.setAttribute("name", "answerq" + id);
    rdio3.setAttribute("value", answer3);
    rdio3.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup3text.appendChild(rdio3);
    questionDivinputGroup3prepend.appendChild(questionDivinputGroup3text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer3;

    questionDivinputGroup3.appendChild(questionDivinputGroup3prepend);
    questionDivinputGroup3.appendChild(answerValue);
    //q4

    var questionDivinputGroup4 = document.createElement("div");
    questionDivinputGroup4.classList.add("input-group");

    var questionDivinputGroup4prepend = document.createElement("div");
    questionDivinputGroup4prepend.classList.add("input-group-prepend");

    var questionDivinputGroup4text = document.createElement("div");
    questionDivinputGroup4text.classList.add("input-group-text");

    var rdio4 = document.createElement("input");
    rdio4.setAttribute("type", "radio");
    rdio4.setAttribute("name", "answerq" + id);
    rdio4.setAttribute("value", answer4);
    rdio4.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup4text.appendChild(rdio4);
    questionDivinputGroup4prepend.appendChild(questionDivinputGroup4text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer4;

    questionDivinputGroup4.appendChild(questionDivinputGroup4prepend);
    questionDivinputGroup4.appendChild(answerValue);

    questionDivRow.appendChild(questionName);
    questionDivRow.appendChild(questiondegree);
    questionDivRow.appendChild(questionDivinputGroup1);
    questionDivRow.appendChild(questionDivinputGroup2);
    questionDivRow.appendChild(questionDivinputGroup3);
    questionDivRow.appendChild(questionDivinputGroup4);

    questionDiv.appendChild(questionDivRow);
    row.appendChild(questionDiv);

    document.getElementById("exambody").appendChild(row);
}

function createMultiAnswerQuetion(id, question, degree, answer1, answer2, answer3, answer4) {
    var row = document.createElement("div");
    row.classList.add("row");

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-12", "question-container", "container-fluid");

    var questionDivRow = document.createElement("div");
    questionDivRow.classList.add("row");

    var questionName = document.createElement("p");
    questionName.classList.add("question-name");
    questionName.innerText = question;

    var questiondegree = document.createElement("span");
    questiondegree.classList.add("degree");
    questiondegree.innerText = degree;
    //q1
    var questionDivinputGroup1 = document.createElement("div");
    questionDivinputGroup1.classList.add("input-group");

    var questionDivinputGroup1prepend = document.createElement("div");
    questionDivinputGroup1prepend.classList.add("input-group-prepend");

    var questionDivinputGroup1text = document.createElement("div");
    questionDivinputGroup1text.classList.add("input-group-text");

    var rdio1 = document.createElement("input");
    rdio1.setAttribute("type", "checkbox");
    rdio1.setAttribute("name", "answerq" + id);
    rdio1.setAttribute("value", answer1);
    rdio1.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup1text.appendChild(rdio1);
    questionDivinputGroup1prepend.appendChild(questionDivinputGroup1text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer1;

    questionDivinputGroup1.appendChild(questionDivinputGroup1prepend);
    questionDivinputGroup1.appendChild(answerValue);
    //q2
    var questionDivinputGroup2 = document.createElement("div");
    questionDivinputGroup2.classList.add("input-group");

    var questionDivinputGroup2prepend = document.createElement("div");
    questionDivinputGroup2prepend.classList.add("input-group-prepend");

    var questionDivinputGroup2text = document.createElement("div");
    questionDivinputGroup2text.classList.add("input-group-text");

    var rdio2 = document.createElement("input");
    rdio2.setAttribute("type", "checkbox");
    rdio2.setAttribute("name", "answerq" + id);
    rdio2.setAttribute("value", answer2);
    rdio2.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup2text.appendChild(rdio2);
    questionDivinputGroup2prepend.appendChild(questionDivinputGroup2text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer2;

    questionDivinputGroup2.appendChild(questionDivinputGroup2prepend);
    questionDivinputGroup2.appendChild(answerValue);
    //q3

    var questionDivinputGroup3 = document.createElement("div");
    questionDivinputGroup3.classList.add("input-group");

    var questionDivinputGroup3prepend = document.createElement("div");
    questionDivinputGroup3prepend.classList.add("input-group-prepend");

    var questionDivinputGroup3text = document.createElement("div");
    questionDivinputGroup3text.classList.add("input-group-text");

    var rdio3 = document.createElement("input");
    rdio3.setAttribute("type", "checkbox");
    rdio3.setAttribute("name", "answerq" + id);
    rdio3.setAttribute("value", answer3);
    rdio3.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup3text.appendChild(rdio3);
    questionDivinputGroup3prepend.appendChild(questionDivinputGroup3text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer3;

    questionDivinputGroup3.appendChild(questionDivinputGroup3prepend);
    questionDivinputGroup3.appendChild(answerValue);
    //q4

    var questionDivinputGroup4 = document.createElement("div");
    questionDivinputGroup4.classList.add("input-group");

    var questionDivinputGroup4prepend = document.createElement("div");
    questionDivinputGroup4prepend.classList.add("input-group-prepend");

    var questionDivinputGroup4text = document.createElement("div");
    questionDivinputGroup4text.classList.add("input-group-text");

    var rdio4 = document.createElement("input");
    rdio4.setAttribute("type", "checkbox");
    rdio4.setAttribute("name", "answerq" + id);
    rdio4.setAttribute("value", answer4);
    rdio4.setAttribute("aria-label", "Radio button for following answer inpu");
    questionDivinputGroup4text.appendChild(rdio4);
    questionDivinputGroup4prepend.appendChild(questionDivinputGroup4text);

    var answerValue = document.createElement("p");
    answerValue.classList.add("ans-1");
    answerValue.innerText = answer4;

    questionDivinputGroup4.appendChild(questionDivinputGroup4prepend);
    questionDivinputGroup4.appendChild(answerValue);

    questionDivRow.appendChild(questionName);
    questionDivRow.appendChild(questiondegree);
    questionDivRow.appendChild(questionDivinputGroup1);
    questionDivRow.appendChild(questionDivinputGroup2);
    questionDivRow.appendChild(questionDivinputGroup3);
    questionDivRow.appendChild(questionDivinputGroup4);

    questionDiv.appendChild(questionDivRow);
    row.appendChild(questionDiv);

    document.getElementById("exambody").appendChild(row);
}

function createShortAnswer(id, question, degree) {
    var row = document.createElement("div");
    row.classList.add("row");

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-12", "question-container", "container-fluid");

    var questionDivRow = document.createElement("div");
    questionDivRow.classList.add("row");

    var questionName = document.createElement("p");
    questionName.classList.add("question-name");
    questionName.innerText = question;

    var questiondegree = document.createElement("span");
    questiondegree.classList.add("degree");
    questiondegree.innerText = degree;

    var questionDivinputGroup1 = document.createElement("div");
    questionDivinputGroup1.classList.add("input-group", "mb-3");

    var questionDivinputGroup1prepend = document.createElement("div");
    questionDivinputGroup1prepend.classList.add("input-group-prepend");

    var questionDivinputGroup1text = document.createElement("span");
    questionDivinputGroup1text.classList.add("input-group-text");
    questionDivinputGroup1text.id = "inputGroup-sizing-default";
    questionDivinputGroup1text.innerHTML = "Answer";

    var textarea = document.createElement("textarea");
    textarea.classList.add("ans-area");
    textarea.setAttribute("rows", "3");
    textarea.setAttribute("name", "answerq" + id);
    questionDivinputGroup1prepend.appendChild(questionDivinputGroup1text);


    questionDivinputGroup1.appendChild(questionDivinputGroup1prepend);
    questionDivinputGroup1.appendChild(textarea);

    questionDivRow.appendChild(questionName);
    questionDivRow.appendChild(questiondegree);
    questionDivRow.appendChild(questionDivinputGroup1);

    questionDiv.appendChild(questionDivRow);
    row.appendChild(questionDiv);

    document.getElementById("exambody").appendChild(row);
}

function createCompleteQuestion(id, question, degree) {
    var row = document.createElement("div");
    row.classList.add("row");

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-12", "question-container", "container-fluid");

    var questionDivRow = document.createElement("div");
    questionDivRow.classList.add("row");


    var questionDivinputGroup1 = document.createElement("div");
    questionDivinputGroup1.classList.add("input-group", "complete-div");

    var questionDivinputGroup1prepend = document.createElement("div");
    questionDivinputGroup1prepend.classList.add("input-group-prepend");

    var questionDivinputGroup1text = document.createElement("span");
    questionDivinputGroup1text.classList.add("input-group-text");
    questionDivinputGroup1text.id = "inputGroup-sizing-default";
    questionDivinputGroup1text.innerHTML = "Complete:";

    var questiondegree = document.createElement("span");
    questiondegree.classList.add("degree");
    questiondegree.innerText = degree;

    questionDivinputGroup1prepend.appendChild(questionDivinputGroup1text);
    questionDivinputGroup1.appendChild(questionDivinputGroup1prepend);

    var a = question.trim().split("?");
    var str = question.trim();
    var indices = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "?") indices.push(i);
    }
    var strings = [];
    for (var a = 0; a < indices.length; a++) {

        if (a === 0) {
            strings.push(question.slice(0, indices[a]));
        }
        strings.push("?");
        strings.push(question.slice(indices[a], indices[a + 1]).replace("?", ""));

    }
    var filtered = strings.filter(function(el) {
        return el != "";
    });
    var answerNum = 1;
    for (var a = 0; a < filtered.length; a++) {
        if (filtered[a] === "?") {
            var inputanswer = document.createElement("input");
            inputanswer.classList.add("form-control");
            inputanswer.setAttribute("type", "text");
            inputanswer.setAttribute("name", "answerq" + id + "num" + answerNum);
            answerNum++;
            inputanswer.setAttribute("placeholder", "ans");
            questionDivinputGroup1.appendChild(inputanswer);
        } else {
            var inputquestion = document.createElement("span");
            inputquestion.classList.add("input-group-text");
            inputquestion.innerText = filtered[a];
            questionDivinputGroup1.appendChild(inputquestion);
        }
    }

    questionDivRow.appendChild(questiondegree);
    questionDivRow.appendChild(questionDivinputGroup1);

    questionDiv.appendChild(questionDivRow);
    row.appendChild(questionDiv);

    document.getElementById("exambody").appendChild(row);
}
createCompleteQuestion(1, "?Wich is Computer Componant?and it can be?", "6 degree")
createCompleteQuestion(2, "Wich is Computer Componant?and it can be?", "6 degree")
createCompleteQuestion(3, "Wich is Computer Componant?and it can be?aaxax?", "6 degree")
createMultiChoiseQuetion(4, "Wich isnt Computer Componant?", "5 degree", "a1", "a2", "a3", "a4");
createMultiAnswerQuetion(5, "Wich isnt Computer Componant?", "5 degree", "a1", "a2", "a3", "a4");
createShortAnswer(6, "Wich is Computer Componant?", "5 degree");