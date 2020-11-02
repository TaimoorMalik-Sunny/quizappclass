import React from 'react';
import { constants } from 'buffer';
import { Console } from 'console';
import { questionPropsType } from './../Types/quiz_types'

const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    //  console.log(question,options)
    return (
        <div className="question-container">
            <div className="question ">
                {question}

            </div>

            <form onSubmit={callback}>

                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        value={opt} />
                                    {opt}
                                </label>
                            </div>

                        )
                    })
                }
                <input type="submit"></input>

            </form>
        </div>
    )

}

export default QuestionCard;