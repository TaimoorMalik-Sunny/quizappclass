import { Quiz, QuetionType } from './../Types/quiz_types';

const shuffleArray = (array: any[])=>
[...array].sort(() => Math.random() - 0.5)
export const getQuizDetails = async (totalQuestions: number, level: string): Promise<QuetionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();

    const quiz:QuetionType[] = results.map((questionobj: Quiz)=>{
        return{
            question: questionobj.question,
            answer: questionobj.correct_answer,  
            option: shuffleArray(questionobj.incorrect_answers.concat(questionobj.correct_answer)),
            correct_answer :questionobj.correct_answer
        }


    })
    return quiz;

}



// export const getQuizDetails = async(totalQuestions: number, level: string)=>{

//     const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
//     let results = await res.json();
//     console.log(results);


// }