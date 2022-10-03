import { _saveQuestion } from "../utils/_DATA";

describe('saveQuestion', () => { 
    it('return as expected', async () =>{
        let question = {
            optionOneText: "random",
            optionTwoText: "not random",
            author:"me"
        }

        let formattedQuestion = await _saveQuestion(question)
        expect(formattedQuestion.optionOneText).toEqual(question.optionOneText)
        expect(formattedQuestion.optionTwoText).toEqual(question.optionTwoText)
        expect(formattedQuestion.author).toEqual(question.author)

    })
 })