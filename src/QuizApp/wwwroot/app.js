var QuizApp;
(function (QuizApp) {
    var Quiz = (function () {
        function Quiz() {
            this.runningTotal = 0;
        }
        Quiz.prototype.gradeQuiz = function () {
            for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
                var q_1 = _a[_i];
                this.runningTotal += q_1.points;
            }
            return this.runningTotal;
        };
        return Quiz;
    }());
    QuizApp.Quiz = Quiz;
    var Question = (function () {
        // wA stands for wrongAnswer
        function Question(question, answers, cAnswer, points) {
            this.question = question;
            this.answers = answers;
            this.cAnswer = cAnswer;
            this.points = points;
        }
        return Question;
    }());
    var quiz = new Quiz();
    quiz.questions = [
        new Question("What color is the sky?", ["red", "blue", "yellow"], 1, 10),
        new Question("You like cheese?", ["yes", "no", "sometimes"], 0, 25)
    ];
    var rand = Math.floor(Math.random() * quiz.questions.length);
    var q = quiz.questions[rand];
    function qPrompt(x) {
        var response = prompt(q.question + " \n1: " + q.answers[0] + " 2: " + q.answers[1] + "\nChoose a number:");
        console.log(response);
    }
    qPrompt(q);
})(QuizApp || (QuizApp = {}));
//# sourceMappingURL=app.js.map