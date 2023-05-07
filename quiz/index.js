var quizdata = [
    {
    question : 'which framework is related to js',
    a : '.net',
    b : 'flask',
    c : 'react',
    d : 'django',
    correct : 'c'
    },
    {
        question:'which is not a programming language?',
        a:'html',
        b:'python',
        c:'java',
        d:'js',
        correct : 'a'
    },
    {
        question:'which is not a framework',
        a:'react',
        b:'angular',
        c:'javascript',
        d:'django',
        correct : 'b'
    },
    {
        question:'CSS stand for',
        a:'cascade style state',
        b:'cascading style sheet',
        c:'cascading sheet of style',
        d:'none',
        correct : 'b'
    },
]

var quiz = document.getElementById('quizdiv')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_option')
var option_b = document.getElementById('b_option')
var option_c = document.getElementById('c_option')
var option_d = document.getElementById('d_option')
var submitbtn = document.getElementById('submit')

var currentquestion = 0
var quizScore = 0

loadquiz()

function loadquiz()
{
 deselect()

 question.innerHTML= quizdata[currentquestion].question
 option_a.innerText= quizdata[currentquestion].a
 option_b.innerHTML= quizdata[currentquestion].b
 option_c.innerText= quizdata[currentquestion].c
 option_d.innerHTML= quizdata[currentquestion].d
}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption = answer.id
        }
    })
    if(selectedoption==quizdata[currentquestion].correct)
    {
        quizScore=quizScore+1
    }
    currentquestion=currentquestion+1


    if(currentquestion==quizdata.length)
    {
document.getElementById('quizdiv').innerHTML = ` <h1> you have answered ${quizScore} correctly out of ${quizdata.length}`
    }else
    {
        loadquiz()
    }

})