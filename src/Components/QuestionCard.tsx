import React, { useState } from 'react';
import { constants } from 'buffer';
import { Console } from 'console';
import { questionPropsType } from './../Types/quiz_types'

const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {

    let [selectedAns , setSelectedAns ] = useState("");

    const handleSelection = (ev : any)=>{
      //  console.log(ev.target.value);
        setSelectedAns(ev.target.value);

    }

    //  console.log(question,options)
    return (
        <div className="question-container">
            <div className="question ">
                {question}

            </div>

            <form onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e,selectedAns)} >

                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opt}
                                        checked={selectedAns === opt}
                                        onChange={handleSelection} />
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