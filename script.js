// 1. مصفوفة بيانات الامتحان الكاملة
const quizData = {
    trueFalse: [
        { q: "The first step in problem solving is program design.", a: "false" },
        { q: "Two lines should come out from the decision shape in a flowchart.", a: "true" },
        { q: "The rectangle symbol is used to represent the process operation.", a: "true" },
        { q: "Algorithm is a set of procedures arranged logically for solving a specific problem.", a: "true" },
        { q: "You can use any geometric shape to represent the algorithm when drawing a flowchart.", a: "false" },
        { q: "Flowcharts can represent repetition (loop) operations.", a: "true" },
        { q: "Testing the program and debugging is the last stage of problem-solving.", a: "false" },
        { q: "VB.NET is one of the high-level programming languages.", a: "true" },
        { q: "The Compiler converts instructions from high-level language into machine language.", a: "true" },
        { q: "VB.NET is considered a machine language.", a: "false" },
        { q: "The .NET Framework includes Compilers, libraries, and a runtime environment.", a: "true" },
        { q: "The Name property is used to display text on the title bar of the form window.", a: "false" },
        { q: "The Text property is used to display text on the title bar of the form.", a: "true" },
        { q: "The value of the Name property is used in the code window to identify the object.", a: "true" },
        { q: "Some properties only show their effect at runtime, such as WindowState.", a: "true" },
        { q: "The MaximizeBox property controls whether the form's maximize box is shown or hidden.", a: "true" },
        { q: "The FormBorderStyle property controls the window border style.", a: "true" },
        { q: "The BackColor property lets you choose the background color of the form.", a: "true" },
        { q: "The RightToLeft property determines the direction of controls on the form.", a: "true" },
        { q: "You can change the Button position using the Size property.", a: "false" },
        { q: "The Multiline property allows multiple lines in a TextBox.", a: "true" },
        { q: "The Label control can be resized manually when AutoSize is set to True.", a: "false" },
        { q: "Label is used for entering text from the user at runtime.", a: "false" },
        { q: "The command button is used to execute code when clicked.", a: "true" },
        { q: "ComboBox allows the user to select one item in the smallest possible space.", a: "true" },
        { q: "The TextBox control is the only tool that has the PasswordChar property.", a: "true" },
        { q: "The Properties Window contains the control tools used in the project.", a: "false" },
        { q: "The Event Handler is a procedure that contains code executed when a specific event occurs.", a: "true" },
        { q: "Program Documentation is writing down all the steps taken to solve a problem.", a: "true" },
        { q: "Flowcharts help in facilitating the understanding and analysis of the problem.", a: "true" }
    ],
    mcq: [
        { q: "You can create desktop or web applications using:", opts: ["VB.NET language", "Properties only", "Computer memory"], a: 0 },
        { q: "The property used to set the text on the title bar:", opts: ["Name", "Text", "BackColor"], a: 1 },
        { q: "The property used as the Form's name in the code:", opts: ["Text", "Name", "FormBorderStyle"], a: 1 },
        { q: "The property controlling the minimize box is:", opts: ["MinimizeBox", "ControlBox", "WindowState"], a: 0 },
        { q: "Background color of the Form is set using:", opts: ["ForeColor", "BackColor", "Text"], a: 1 },
        { q: "You cannot change Button position using:", opts: ["Location", "Size", "Drag & Drop"], a: 1 },
        { q: "Label is auto-sized when:", opts: ["AutoSize = True", "AutoSize = False", "BorderStyle = None"], a: 0 },
        { q: "The property that specifies the max number of characters in a TextBox:", opts: ["Multiline", "MaxLength", "Name"], a: 1 },
        { q: "VB.NET is considered:", opts: ["Event Driven", "Object Oriented", "All of the above"], a: 2 },
        { q: "Which property indicates if a RadioButton is selected:", opts: ["Items", "Checked", "Text"], a: 1 },
        { q: "Double-clicking a tool in the Toolbox during design mode:", opts: ["Deletes the tool", "Makes it appear on the form", "Runs the program"], a: 1 },
        { q: "Entering data with known results to check for errors is:", opts: ["Program Testing", "Problem Definition", "Documentation"], a: 0 },
        { q: "Tool used to choose the 'Languages you master' (multiple choices):", opts: ["RadioButton", "CheckBox", "ComboBox"], a: 1 },
        { q: "Visual Basic.Net is ....... because commands run when an event occurs.", opts: ["Event Driven", "IDE", "Object Oriented"], a: 0 },
        { q: "The procedure in VB.NET ends with:", opts: ["End Class", "End Sub", "End Procedures"], a: 1 },
        { q: "The term IDE means:", opts: ["Integrated Development Environment", "Internal Data Entry"], a: 0 },
        { q: "To open the code window from the keyboard, press:", opts: ["F4", "F5", "F7"], a: 2 },
        { q: "The tool that displays a drop-down list for selection:", opts: ["ListBox", "ComboBox", "RadioButton"], a: 1 },
        { q: "To control the text shown on a command button, use:", opts: ["Font", "Text", "Name"], a: 1 },
        { q: "A situation that requires a solution or an objective to achieve is:", opts: ["Algorithm", "Flowchart", "Problem"], a: 2 },
        { q: "The tool used to contain a group of related controls is:", opts: ["GroupBox", "TextBox", "Label"], a: 0 },
        { q: "Click on a Button is considered an:", opts: ["Event", "Property", "Procedure"], a: 0 },
        { q: "To choose gender (Male or Female), we use:", opts: ["CheckBox", "RadioButton", "TextBox"], a: 1 },
        { q: "Libraries, Compilers and Runtime environment are parts of:", opts: [".Net Framework", "Windows", "CPU"], a: 0 },
        { q: "Both ListBox and ComboBox share the property:", opts: ["SelectionMode", "Items", "AutoSize"], a: 1 },
        { q: "Writing down all steps taken to solve a problem is:", opts: ["Testing", "Documentation", "Algorithm"], a: 1 },
        { q: "The properties that describe the object (size, color, etc.) are:", opts: ["Properties", "Events", "Procedures"], a: 0 },
        { q: "To control the window border style, we use:", opts: ["FormBorderStyle", "WindowState", "RightToLeft"], a: 0 },
        { q: "The stage of making sure the program is free of errors is:", opts: ["Program Testing", "Problem Definition", "Design"], a: 0 },
        { q: "The property that allows multiple lines in a TextBox is:", opts: ["MaxLength", "MultiLine", "PasswordChar"], a: 1 }
    ],
    complete: [
        { q: "A ............ is a diagram that uses standard symbols.", a: "Flowchart" },
        { q: "The ............ is a set of logically ordered procedures.", a: "Algorithm" },
        { q: "Use the ............ control to allow users to type text.", a: "TextBox" },
        { q: "The ............ property changes the text displayed.", a: "Text" },
        { q: "Press ............ to open the Code Window.", a: "F7" },
        { q: "Visual Studio is an ............ environment.", a: "IDE" },
        { q: "............ provides libraries and compilers.", a: ".Net Framework" },
        { q: "The ............ property identifies the object in code.", a: "Name" },
        { q: "............ is a control that shows a drop-down list.", a: "ComboBox" },
        { q: "The ............ symbol represents a process.", a: "Rectangle" },
        { q: "............ is used to display text user cannot edit.", a: "Label" },
        { q: "Use the ............ property to add list of strings.", a: "Items" },
        { q: "A mouse 'Click' is an example of an ............", a: "Event" },
        { q: "............ allows selecting multiple options.", a: "CheckBox" },
        { q: "A ............ is used to perform task on click.", a: "Button" },
        { q: "The ............ translates code to machine code.", a: "Compiler" },
        { q: "............ means recording all steps.", a: "Documentation" },
        { q: "Error checking happens during ............ stage.", a: "Testing" },
        { q: "............ click a tool to place it on form.", a: "Double" },
        { q: "Programming using objects is ............-oriented.", a: "Object" }
    ],
    oddOne: [
        { q: "Rectangle - Diamond - Pencil", a: "Pencil" },
        { q: "Name - Text - Click", a: "Click" },
        { q: "TextBox - Label - Compiler", a: "Compiler" },
        { q: "Button - RadioButton - BackColor", a: "BackColor" },
        { q: "F7 - F4 - Shift", a: "Shift" },
        { q: "VB.NET - Machine Language - High Level", a: "Machine Language" },
        { q: "Checked - MultiLine - MaxLength", a: "Checked" },
        { q: "Items - ComboBox - ListBox", a: "Items" },
        { q: "Properties - Events - Documentation", a: "Documentation" },
        { q: "WindowState - FormBorderStyle - ForeColor", a: "ForeColor" }
    ],
    matching: [
        { a: "Diamond Symbol", b: "Decision making (Yes/No)" },
        { a: "Name Property", b: "Identifying the object in code" },
        { a: "F7 Key", b: "Opening Code Window" },
        { a: "Compiler", b: "Translates code to machine language" },
        { a: "RadioButton", b: "Choosing only one alternative" },
        { a: "Parallelogram", b: "Input/Output operations" },
        { a: "PasswordChar", b: "Masking characters in TextBox" },
        { a: "GroupBox", b: "Grouping related controls" },
        { a: "AutoSize", b: "Adjusting Label size automatically" },
        { a: "MultiLine", b: "Allowing multiple lines of text" }
    ]
};

let studentFullName = "";

// تفعيل ميزة السحب للتايمر باستخدام jQuery UI
$(function() {
    $("#timerContainer").draggable({ containment: "window" });
});

// 2. معالجة بدء الامتحان
document.getElementById('startBtn').onclick = function() {
    const nameInput = document.getElementById('studentName');
    const nameValue = nameInput ? nameInput.value.trim() : "";
    
    if (nameValue.split(' ').filter(word => word.length > 0).length < 3) {
        Swal.fire({
            icon: 'warning',
            title: 'Full Name Required',
            text: 'Please enter your triple name to start the exam.'
        });
        return;
    }

    studentFullName = nameValue;
    initExamView();
    renderQuestions();
    startTimer();
    updateProgress();
};

function initExamView() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('examContainer').style.display = 'block';
    const nav = document.getElementById('sectionNav');
    if(nav) nav.style.display = 'block';
}

// 3. تحديث شريط التقدم والحفظ التلقائي
function updateProgress() {
    let answered = 0;
    const total = 100;
    const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    answered += checkedRadios.length;

    document.querySelectorAll('.drop-zone').forEach(zone => {
        if (zone.innerText.trim() !== "") answered++;
    });

    const counterEl = document.getElementById('questionCounter');
    if (counterEl) counterEl.innerText = `${answered} / ${total}`;
    
    saveProgress(); 
}

// 4. وظيفة تثبيت صندوق الكلمات
function togglePin(bankId, checkbox) {
    document.querySelectorAll('.drag-bank').forEach(b => b.classList.remove('pinned'));
    document.querySelectorAll('.pin-wrapper input').forEach(c => { if(c !== checkbox) c.checked = false; });

    const bank = document.getElementById(bankId);
    if (checkbox.checked) {
        bank.classList.add('pinned');
        document.body.style.paddingTop = "180px";
    } else {
        bank.classList.remove('pinned');
        document.body.style.paddingTop = "0px";
    }
}

// 5. بناء الأسئلة ديناميكياً
function renderQuestions() {
    let container = document.getElementById('questionsContent');
    let html = "";

    // الصح والخطأ
    html += `<div id="sec1" class="section-header"><h3>First: True or False (30 Qs)</h3></div>`;
    quizData.trueFalse.forEach((item, i) => {
        html += `
        <div class="card card-question">
            <p><strong>${i+1}. ${item.q}</strong></p>
            <div class="d-flex flex-column">
                <label class="option-container" onclick="selectOpt(this, 'tf${i}')">
                    True <input type="radio" name="tf${i}" value="true" onchange="updateProgress()">
                </label>
                <label class="option-container" onclick="selectOpt(this, 'tf${i}')">
                    False <input type="radio" name="tf${i}" value="false" onchange="updateProgress()">
                </label>
            </div>
        </div>`;
    });

    // الاختياري
    html += `<div id="sec2" class="section-header"><h3>Second: Multiple Choice (30 Qs)</h3></div>`;
    quizData.mcq.forEach((item, i) => {
        html += `<div class="card card-question"><p><strong>${i+31}. ${item.q}</strong></p>`;
        item.opts.forEach((opt, idx) => {
            html += `
            <label class="option-container" onclick="selectOpt(this, 'mcq${i}')">
                ${opt} <input type="radio" name="mcq${i}" value="${idx}" onchange="updateProgress()">
            </label>`;
        });
        html += `</div>`;
    });

    // التكملة
    html += `<div id="sec3" class="section-header"><h3>Third: Drag the word to Complete (20 Qs)</h3></div>`;
    let compWords = quizData.complete.map(x => x.a).sort(() => Math.random() - 0.5);
    html += `<div class="drag-bank" id="completeBank">
                <label class="pin-wrapper"><input type="checkbox" onchange="togglePin('completeBank', this)"> 📌 Pin Box</label>
                <div class="d-flex flex-wrap gap-2" id="compItemsContainer">
                    ${compWords.map(w => `<div class="draggable-item">${w}</div>`).join('')}
                </div>
             </div>`;
    quizData.complete.forEach((item, i) => {
        let qText = item.q.replace("............", `<div class="drop-zone" id="dropComp${i}"></div>`);
        html += `<div class="card card-question"><p>${i+61}. ${qText}</p></div>`;
    });

    // الكلمة المختلفة
    html += `<div id="sec4" class="section-header"><h3>Fourth: Drag the ODD word (10 Qs)</h3></div>`;
    quizData.oddOne.forEach((item, i) => {
        let words = item.q.split(' - ');
        html += `
        <div class="card card-question">
            <p><strong>${i+81}. Which word is different?</strong></p>
            <div class="d-flex gap-2 mb-3 drag-bank odd-bank-container" id="bankOdd${i}">
                ${words.map(w => `<div class="draggable-item">${w}</div>`).join('')}
            </div>
            <div class="drop-zone odd-drop-zone w-100" style="min-height:50px; border: 2px dashed #0984e3;" id="dropOdd${i}"></div>
        </div>`;
    });

    // التوصيل
    html += `<div id="sec5" class="section-header"><h3>Fifth: Drag from Column B to A (10 Qs)</h3></div>`;
    let matchWords = quizData.matching.map(x => x.b).sort(() => Math.random() - 0.5);
    html += `<div class="drag-bank" id="matchBank">
                <label class="pin-wrapper"><input type="checkbox" onchange="togglePin('matchBank', this)"> 📌 Pin Box</label>
                <div class="d-flex flex-wrap gap-2" id="matchItemsContainer">
                    ${matchWords.map(w => `<div class="draggable-item">${w}</div>`).join('')}
                </div>
             </div>`;
    quizData.matching.forEach((item, i) => {
        html += `
        <div class="card card-question">
            <div class="row align-items-center">
                <div class="col-6"><strong>${i+91}. ${item.a}</strong></div>
                <div class="col-6"><div class="drop-zone" id="dropMatch${i}"></div></div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
    initSortables();
}

// 6. تهيئة السحب والإفلات
function initSortables() {
    const transferConfig = { 
        group: 'quizTransfer', 
        animation: 150, 
        onEnd: updateProgress 
    };

    new Sortable(document.getElementById('compItemsContainer'), transferConfig);
    new Sortable(document.getElementById('matchItemsContainer'), transferConfig);

    document.querySelectorAll('.drop-zone:not(.odd-drop-zone)').forEach(el => {
        new Sortable(el, { 
            group: 'quizTransfer', 
            maxItems: 1, 
            animation: 150,
            onAdd: updateProgress,
            onRemove: updateProgress
        });
    });

    quizData.oddOne.forEach((_, i) => {
        const bank = document.getElementById(`bankOdd${i}`);
        const drop = document.getElementById(`dropOdd${i}`);
        new Sortable(bank, { group: `oddGroup${i}`, animation: 150 });
        new Sortable(drop, { 
            group: `oddGroup${i}`, 
            maxItems: 1,
            animation: 150,
            onAdd: function(evt) {
                if (drop.children.length > 1) {
                    const oldItem = (evt.item === drop.children[0]) ? drop.children[1] : drop.children[0];
                    bank.appendChild(oldItem);
                }
                updateProgress();
            },
            onRemove: updateProgress
        });
    });
}

function selectOpt(el, name) {
    document.getElementsByName(name).forEach(input => input.parentElement.classList.remove('selected'));
    el.classList.add('selected');
    const radio = el.querySelector('input');
    radio.checked = true;
    updateProgress();
}

function startTimer() {
    const timerContainer = document.getElementById('timerContainer');
    if (timerContainer) timerContainer.style.display = 'block';
    
    let timeLimit = 100 * 60;
    const interval = setInterval(() => {
        let m = Math.floor(timeLimit / 60);
        let s = timeLimit % 60;
        const timerEl = document.getElementById('timer');
        if (timerEl) timerEl.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        
        if (timeLimit <= 0) {
            clearInterval(interval);
            calculate();
        }
        timeLimit--;
    }, 1000);
}

document.getElementById('submitBtn').onclick = calculate;

function calculate() {
    let finalScore = 0;
    let reviewHtml = "";

    quizData.trueFalse.forEach((item, i) => {
        let selected = document.querySelector(`input[name="tf${i}"]:checked`)?.value;
        if (selected === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(i+1, item.q, selected || "No Answer", item.a); }
    });

    quizData.mcq.forEach((item, i) => {
        let selIdx = document.querySelector(`input[name="mcq${i}"]:checked`)?.value;
        if (parseInt(selIdx) === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(i+31, item.q, selIdx !== undefined ? item.opts[selIdx] : "No Answer", item.opts[item.a]); }
    });

    quizData.complete.forEach((item, i) => {
        let val = document.getElementById(`dropComp${i}`).innerText.trim();
        if (val === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(i+61, item.q, val || "Empty", item.a); }
    });

    quizData.oddOne.forEach((item, i) => {
        let val = document.getElementById(`dropOdd${i}`).innerText.trim();
        if (val === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(i+81, item.q, val || "Empty", item.a); }
    });

    quizData.matching.forEach((item, i) => {
        let val = document.getElementById(`dropMatch${i}`).innerText.trim();
        if (val === item.b) { finalScore++; }
        else { reviewHtml += createReviewRow(i+91, item.a, val || "Empty", item.b); }
    });

    showFinal(finalScore, reviewHtml);
}

function createReviewRow(num, q, userAns, correctAns) {
    return `
    <div class="alert alert-danger mb-3 shadow-sm text-start">
        <div class="fw-bold">Q${num}:</div>
        <div>${q}</div>
        <div class="small">Your Answer: <span class="text-danger">${userAns}</span> | Correct: <span class="text-success">${correctAns}</span></div>
    </div>`;
}

// 7. شاشة النتيجة النهائية
function showFinal(finalScore, reviewHtml) {
    localStorage.removeItem('examProgress');
    const isSuccess = finalScore >= 75;

    if (isSuccess) {
        confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 }, colors: ['#0984e3', '#00cec9', '#ffffff'] });
    }

    Swal.fire({
        title: isSuccess ? 'Excellent Performance! 🏆' : 'Keep Practicing!',
        html: `
            <div class="py-3">
                <img src="my_photo.png" style="width:110px; border-radius:50%; border:4px solid #0984e3; margin-bottom:15px;"><br>
                <h3 class="text-dark">${studentFullName}</h3>
                <h2 class="${isSuccess ? 'text-success' : 'text-danger'} fw-bold" style="font-size: 3rem;">${finalScore}/100</h2>
                <p class="text-secondary">Instructor: Eng. Mahmoud Saeed</p>
            </div>
        `,
        confirmButtonText: 'Review Mistakes',
        showDenyButton: true,
        denyButtonText: 'Restart Exam',
        allowOutsideClick: false
    }).then((res) => {
        if (res.isConfirmed) {
            document.getElementById('examContainer').style.display = 'none';
            if(document.getElementById('sectionNav')) document.getElementById('sectionNav').style.display = 'none';
            document.getElementById('reviewContainer').style.display = 'block';
            document.getElementById('reviewContent').innerHTML = reviewHtml || "<h4>Legendary! No mistakes at all! 🌟</h4>";
            window.scrollTo(0,0);
        } else if (res.isDenied) {
            location.reload();
        }
    });
}

// 8. وظائف التخزين (LocalStorage) - خارج الأقواس لتعمل دائماً
function saveProgress() {
    if (!studentFullName) return;
    const progress = {
        studentFullName: studentFullName,
        examStarted: document.getElementById('examContainer').style.display === 'block',
        radios: Array.from(document.querySelectorAll('input[type="radio"]:checked')).map(r => ({ name: r.name, value: r.value })),
        drops: Array.from(document.querySelectorAll('.drop-zone')).map(z => ({ id: z.id, html: z.innerHTML })),
        banks: {
            comp: document.getElementById('compItemsContainer')?.innerHTML,
            match: document.getElementById('matchItemsContainer')?.innerHTML,
            odds: Array.from(document.querySelectorAll('.odd-bank-container')).map(b => ({id: b.id, html: b.innerHTML}))
        }
    };
    localStorage.setItem('examProgress', JSON.stringify(progress));
}

window.onload = function() {
    const saved = localStorage.getItem('examProgress');
    if (saved) {
        const data = JSON.parse(saved);
        if (data.examStarted) {
            studentFullName = data.studentFullName;
            initExamView();
            renderQuestions();
            
            data.radios.forEach(r => {
                const input = document.querySelector(`input[name="${r.name}"][value="${r.value}"]`);
                if (input) {
                    input.checked = true;
                    input.parentElement.classList.add('selected');
                }
            });

            data.drops.forEach(d => {
                const zone = document.getElementById(d.id);
                if (zone) zone.innerHTML = d.html;
            });

            if (data.banks.comp) document.getElementById('compItemsContainer').innerHTML = data.banks.comp;
            if (data.banks.match) document.getElementById('matchItemsContainer').innerHTML = data.banks.match;
            data.banks.odds.forEach(b => {
                const bank = document.getElementById(b.id);
                if (bank) bank.innerHTML = b.html;
            });

            startTimer();
            updateProgress();
        }
    }
};