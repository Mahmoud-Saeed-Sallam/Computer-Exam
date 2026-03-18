// 1. مصفوفة بيانات الامتحان الكاملة (نصوص مطابقة للملف المرفق - الدروس 1 إلى 4)
const quizData = {
    trueFalse: [
        { q: "We can use applications to get help from the right organizations.", a: "true" },
        { q: "Technology makes paying bills more difficult.", a: "false" },
        { q: "A digital footprint is everything you do on the Internet; it is important to have a positive footprint.", a: "true" },
        { q: "Piracy means copying someone else's content to share it or sell it.", a: "true" },
        { q: "Synchronous communication happens in real time and needs a quick response.", a: "true" },
        { q: "It is important to mute your microphone when you are not talking during a video call.", a: "true" }
    ],
    mcq: [
        { q: "What is the main goal of using digital technology?", opts: ["To make life harder", "To make tasks easier and help people", "To waste time"], a: 1 },
        { q: "............ is the ability to use digital technology ethically, responsibly, and safely.", opts: ["Piracy", "Digital footprint", "Digital citizenship"], a: 2 },
        { q: "Illegal copying or stealing of protected content to sell it to others is called ............", opts: ["piracy", "responsibility", "citizenship"], a: 0 },
        { q: "............ communication happens in real time and needs an instant response.", opts: ["Asynchronous", "Synchronous", "Email"], a: 1 },
        { q: "The best way to send a formal message to your teacher or an official is ............", opts: ["video chats", "chat rooms", "emails"], a: 2 },
        { q: "In an email, the recipient's address is written in the ............ field.", opts: ["To", "Subject", "From"], a: 0 }
    ],
    complete: [
        { q: "Through the Internet, you can book tickets for trains and ............", a: "airplanes" },
        { q: "The things you do online that leave a trace are called digital ............", a: "footprint" },
        { q: "To have a video chat, you need a device equipped with a camera and a ............", a: "microphone" },
        { q: "During a video chat, you should ............ your microphone when someone else is talking.", a: "mute" },
        { q: "Video chats are an example of ............ communication.", a: "synchronous" },
        { q: "Sending a digital file or a recorded educational program is an example of ............ communication.", a: "asynchronous" }
    ],
    oddOne: [
        { q: "Video chats - Instant messages - Emails", a: "Emails" },
        { q: "Digital Rights - Digital Responsibilities - Piracy", a: "Piracy" },
        { q: "The 'To' box - The 'Subject' line - Camera", a: "Camera" },
        { q: "Trains - Airplanes - Cooking", a: "Cooking" },
        { q: "Strong passwords - Safe access - Weak passwords", a: "Weak passwords" },
        { q: "Muting the mic - Being properly dressed - Showing your home address", a: "Showing your home address" }
    ],
    matching: [
        { a: "Digital citizenship", b: "The ability to use digital technology ethically, responsibly, and safely" },
        { a: "Digital footprint", b: "The things you do online that leave a trace" },
        { a: "Piracy", b: "Illegal copying or stealing of protected content to sell it to others" },
        { a: "Synchronous communication", b: "Happens in real time and needs an instant response" },
        { a: "Asynchronous communication", b: "Does not require an instant response and can be replied to later" },
        { a: "Chat rooms", b: "Often used for discussing a specific school subject or idea" }
    ]
};

let studentFullName = "";

// حساب العدد الإجمالي للأسئلة بشكل ديناميكي
const totalQuestions = quizData.trueFalse.length + quizData.mcq.length + quizData.complete.length + quizData.oddOne.length + quizData.matching.length;

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
    const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    answered += checkedRadios.length;

    document.querySelectorAll('.drop-zone').forEach(zone => {
        if (zone.innerText.trim() !== "") answered++;
    });

    const counterEl = document.getElementById('questionCounter');
    // تم التعديل لعرض المجموع الديناميكي
    if (counterEl) counterEl.innerText = `${answered} / ${totalQuestions}`;
    
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
    let qNum = 1; // عداد الأسئلة الديناميكي

    // الصح والخطأ
    html += `<div id="sec1" class="section-header"><h3>First: True or False (${quizData.trueFalse.length} Qs)</h3></div>`;
    quizData.trueFalse.forEach((item, i) => {
        html += `
        <div class="card card-question">
            <p><strong>${qNum}. ${item.q}</strong></p>
            <div class="d-flex flex-column">
                <label class="option-container" onclick="selectOpt(this, 'tf${i}')">
                    True <input type="radio" name="tf${i}" value="true" onchange="updateProgress()">
                </label>
                <label class="option-container" onclick="selectOpt(this, 'tf${i}')">
                    False <input type="radio" name="tf${i}" value="false" onchange="updateProgress()">
                </label>
            </div>
        </div>`;
        qNum++;
    });

    // الاختياري
    html += `<div id="sec2" class="section-header"><h3>Second: Multiple Choice (${quizData.mcq.length} Qs)</h3></div>`;
    quizData.mcq.forEach((item, i) => {
        html += `<div class="card card-question"><p><strong>${qNum}. ${item.q}</strong></p>`;
        item.opts.forEach((opt, idx) => {
            html += `
            <label class="option-container" onclick="selectOpt(this, 'mcq${i}')">
                ${opt} <input type="radio" name="mcq${i}" value="${idx}" onchange="updateProgress()">
            </label>`;
        });
        html += `</div>`;
        qNum++;
    });

    // التكملة
    html += `<div id="sec3" class="section-header"><h3>Third: Drag the word to Complete (${quizData.complete.length} Qs)</h3></div>`;
    let compWords = quizData.complete.map(x => x.a).sort(() => Math.random() - 0.5);
    html += `<div class="drag-bank" id="completeBank">
                <label class="pin-wrapper"><input type="checkbox" onchange="togglePin('completeBank', this)"> 📌 Pin Box</label>
                <div class="d-flex flex-wrap gap-2" id="compItemsContainer">
                    ${compWords.map(w => `<div class="draggable-item">${w}</div>`).join('')}
                </div>
             </div>`;
    quizData.complete.forEach((item, i) => {
        let qText = item.q.replace("............", `<div class="drop-zone" id="dropComp${i}"></div>`);
        html += `<div class="card card-question"><p><strong>${qNum}. ${qText}</strong></p></div>`;
        qNum++;
    });

    // الكلمة المختلفة
    html += `<div id="sec4" class="section-header"><h3>Fourth: Drag the ODD word (${quizData.oddOne.length} Qs)</h3></div>`;
    quizData.oddOne.forEach((item, i) => {
        let words = item.q.split(' - ');
        html += `
        <div class="card card-question">
            <p><strong>${qNum}. Which word is different?</strong></p>
            <div class="d-flex gap-2 mb-3 drag-bank odd-bank-container" id="bankOdd${i}">
                ${words.map(w => `<div class="draggable-item">${w}</div>`).join('')}
            </div>
            <div class="drop-zone odd-drop-zone w-100" style="min-height:50px; border: 2px dashed #0984e3;" id="dropOdd${i}"></div>
        </div>`;
        qNum++;
    });

    // التوصيل
    html += `<div id="sec5" class="section-header"><h3>Fifth: Drag from Column B to A (${quizData.matching.length} Qs)</h3></div>`;
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
                <div class="col-6"><strong>${qNum}. ${item.a}</strong></div>
                <div class="col-6"><div class="drop-zone" id="dropMatch${i}"></div></div>
            </div>
        </div>`;
        qNum++;
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
    let qNum = 1; // استخدام العداد هنا أيضاً ليتطابق مع العرض

    quizData.trueFalse.forEach((item, i) => {
        let selected = document.querySelector(`input[name="tf${i}"]:checked`)?.value;
        if (selected === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(qNum, item.q, selected || "No Answer", item.a); }
        qNum++;
    });

    quizData.mcq.forEach((item, i) => {
        let selIdx = document.querySelector(`input[name="mcq${i}"]:checked`)?.value;
        if (parseInt(selIdx) === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(qNum, item.q, selIdx !== undefined ? item.opts[selIdx] : "No Answer", item.opts[item.a]); }
        qNum++;
    });

    quizData.complete.forEach((item, i) => {
        let val = document.getElementById(`dropComp${i}`).innerText.trim();
        if (val === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(qNum, item.q, val || "Empty", item.a); }
        qNum++;
    });

    quizData.oddOne.forEach((item, i) => {
        let val = document.getElementById(`dropOdd${i}`).innerText.trim();
        if (val === item.a) { finalScore++; }
        else { reviewHtml += createReviewRow(qNum, item.q, val || "Empty", item.a); }
        qNum++;
    });

    quizData.matching.forEach((item, i) => {
        let val = document.getElementById(`dropMatch${i}`).innerText.trim();
        if (val === item.b) { finalScore++; }
        else { reviewHtml += createReviewRow(qNum, item.a, val || "Empty", item.b); }
        qNum++;
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
    
    // نسبة النجاح تم تحويلها لديناميكية (75% من الإجمالي)
    const isSuccess = finalScore >= (totalQuestions * 0.75);

    if (isSuccess) {
        confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 }, colors: ['#0984e3', '#00cec9', '#ffffff'] });
    }

    Swal.fire({
        title: isSuccess ? 'Excellent Performance! 🏆' : 'Keep Practicing!',
        html: `
            <div class="py-3">
                <img src="my_photo.png" style="width:110px; border-radius:50%; border:4px solid #0984e3; margin-bottom:15px;"><br>
                <h3 class="text-dark">${studentFullName}</h3>
                <h2 class="${isSuccess ? 'text-success' : 'text-danger'} fw-bold" style="font-size: 3rem;">${finalScore}/${totalQuestions}</h2>
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

// 8. وظائف التخزين (LocalStorage)
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
