namespace QuizApp {

    export class Quiz {
        questions: Question[];
        runningTotal: number = 0;
        gradeQuiz() {
            for (let q of this.questions) {                
                this.runningTotal += q.points;
            }            
            return this.runningTotal;
        }
    }
    class Question {
        // wA stands for wrongAnswer
        constructor(public question: string, public answers: string[],  public cAnswer: number,  public points: number ){}
    }

    let quiz = new Quiz();
    quiz.questions = [
        new Question("What color is the sky?", ["red", "blue", "yellow"], 1, 10 ),
        new Question("You like cheese?", ["yes", "no", "sometimes"], 0, 25)
    ]
    let rand = Math.floor(Math.random() * quiz.questions.length);
    let q = quiz.questions[rand];
    function qPrompt(x: Question) {
        let response = prompt(`${q.question} 
1: ${q.answers[0]} 2: ${q.answers[1]}
Choose a number:`);
        console.log(response);
    }
    qPrompt(q);
}