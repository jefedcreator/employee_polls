import { render, screen, fireEvent } from '@testing-library/react'
import App from './components/App';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from './store'
import { _saveQuestion, _saveQuestionAnswer } from "./utils/_DATA";
import Login from './components/Login';
import Poll from './components/Poll';

describe('saveQuestion', () => { 
  it('should resolve formatted questions', async () =>{
      let question = {
          optionOneText: "random",
          optionTwoText: "not random",
          author:"me"
      }

      let formattedQuestion = await _saveQuestion(question)
      
      expect(formattedQuestion.optionOne.text).toEqual(question.optionOneText)
      expect(formattedQuestion.optionTwo.text).toEqual(question.optionTwoText)
      expect(formattedQuestion.author).toEqual(question.author)

  })

  it('should reject invalid formatted questions', async () =>{
      let question = {
          optionOneText: undefined,
          optionTwoText: "not random",
          author:"me"
      }
      
      await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")

  })
})

describe('saveQuestionAnswer',() =>{
  it('should resolve formatted question and answer', async ()=>{
    let answer = {
      authedUser:"zoshikanlu",
      id: "xj352vofupe1dqz9emx13r",
      voteId: 1,
    }

    let { authedUser, id, voteId } = answer

    let formatQuestionAnswer = await _saveQuestionAnswer(authedUser, id, voteId)
    expect(formatQuestionAnswer).toEqual(true)
  })

  it('should reject invalid formatted question and answer', async ()=>{
    let answer = {
      authedUser:undefined,
      id: undefined,
      voteId: 1,
    }

    let { authedUser, id, voteId } = answer

    await expect(_saveQuestionAnswer(authedUser, id, voteId)).rejects.toEqual("Please provide authedUser, qid, and answer")
  })
})

describe('Login', () => { 
  it('should test login component', () =>{
    let component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </MemoryRouter>
    )
    expect(component).toMatchSnapshot()
  })
  it('should have all expected fields', () =>{
    let component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </MemoryRouter>
    )
    
    let usernameInput = component.getByTestId('username-input')
    let passwordInput = component.getByTestId('password-input')

    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })
  it('should test login upon click event', () =>{
    let component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Login/>
      </Provider>
    </MemoryRouter>
    )
    let usernameInput = component.getByTestId('username-input')
    let passwordInput = component.getByTestId('password-input')
    let loginButton = component.getByTestId('submit-button')
   
    fireEvent.change(usernameInput, {target : { value : 'sarahedo', name : 'username'}})
    fireEvent.change(passwordInput, {target : { value : 'password123', name : 'password'}})
    fireEvent.click(loginButton);
  })
})

describe('Create Poll', () => { 
  it('should test crete poll component', () =>{
    let component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Poll/>
      </Provider>
    </MemoryRouter>
    )
    expect(component).toMatchSnapshot()
  })
  it('should have all expected fields', () =>{
    let component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Poll/>
      </Provider>
    </MemoryRouter>
    )
    
    let firstOption = component.getByTestId('firstoption-input')
    let secondOption = component.getByTestId('secondoption-input')

    expect(firstOption).toBeInTheDocument()
    expect(secondOption).toBeInTheDocument()
  })
  it('should create poll upon click event', () =>{
    let component = render(
    <MemoryRouter>
      <Provider store={store}>
        <Poll/>
      </Provider>
    </MemoryRouter>
    )
    let firstOption = component.getByTestId('firstoption-input')
    let secondOption = component.getByTestId('secondoption-input')
    let loginButton = component.getByTestId('submit-button')
   
    fireEvent.change(firstOption, {target : { value : 'option one'}})
    fireEvent.change(secondOption, {target : { value : 'option two'}})
    fireEvent.click(loginButton);
  })
})
