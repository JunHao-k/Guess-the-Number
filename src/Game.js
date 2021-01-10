/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

import React from 'react'

class Game extends React.Component{
    state = {
        inputNum: '',
        ans: 0,
        displayResult: '',
        guessHist: [],
        count: 0
    }
    
    componentDidMount = () => {
        this.getRandnum();
    }



    playerNum = async (event) => {
        await this.setState({
            inputNum: event.target.value
        })
    }

    getRandnum = () => {
        let randomNumber = Math.floor(Math.random()*100) + 1
        this.setState({
            ans: randomNumber
        })
    }

    getResult = () => {
        let statement = '';
        if(this.state.inputNum > this.state.ans){
            statement = "Your guess is too high!"
        }
        else if(this.state.inputNum < this.state.ans){
            statement = "Your guess is too low!"
        }
        else{
            statement = "Awesome job, you got it!"
        }
        this.setState({
            displayResult: statement,  
        })

    }

    saveGuesshist = () => {
        let list_clone = [];
        list_clone = [...this.state.guessHist]
        list_clone.push('You guessed ' + this.state.inputNum);

        this.setState({
            guessHist: list_clone,
            count: this.state.count++
        })
    }

    playGame = () => {
        this.getResult();
        this.saveGuesshist();
    }

    initGame = () => {
        this.getRandnum();
        this.setState({
            guessHist: [],
            inputNum: 0,
            displayResult: ''
        })

    }

    showMessage() {
        if ((this.state.displayResult === "Your guess is too high!") || (this.state.displayResult === "Your guess is too low!")) {
            return <div class="result">{this.state.displayResult}</div>;
        } 
        else if((this.state.displayResult === "Awesome job, you got it!")){
          return <div class="resultCorrect">{this.state.displayResult}</div>;
        }
        else{
            return null;
        }
      }
    
    showList() {
        let list = [];
        
        for(let b = this.state.guessHist.length - 1; b >= 0; b--){
            list.push(
                <div id = 'guessHist'>
                    <ul id = 'guessList'>
                        <li>{this.state.guessHist[b]}</li>
                    </ul>
                </div> 
            )
        }
    return list
    }

    //this.state.message ? (
    //   <div class="alert">{this.state.message}</div>
    //   ) : null
    render(){
        return(
            <div class = 'main'>
                <h1 class = 'banner'>
                    <label>1.2.3</label>
                    <br/>
                    <label>終極密碼</label>
                    <br/>
                    
                </h1>
                
                <input type = 'number' id = 'textbox' value = {this.state.inputNum} placeholder = 'What is you guess?' onChange = {this.playerNum}/>
                <br/>
                
                <div class = 'buttons'>
                    <br/>
                    <button id = 'check' onClick = {this.playGame}> Check Me </button>
                    <button id = 'restart' onClick = {this.initGame}> Restart </button>
                </div>

                <br/>
                
                {this.showMessage()}
               
                
                <br/>
               
                {this.showList()}
               {/*<div id = 'guessHist'>
                    <ul id = 'guessList'>
                        <li>
                            {this.state.guessHist[1]}
                        </li>
                    </ul>
                </div>*/}

                
                
                
            </div>
        )
    }
}

export default Game