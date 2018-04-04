import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import characters from "./characters.json";
import CardsBox from './components/CardsBox';
import Footer from './components/Footer';

class App extends Component {
  state = {
    characters: characters,
    clickedIds: [],
    userScore: 0,
    maxScore: 0
  }

  shuffleArr = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  imageClicked = (id) => {
    /* check if the clicked image id exist in Array, if yes
        - warn user..image already clicked
        - update Max score with size of Arr only if current MaxScore > previous max score
     */
    if (this.state.clickedIds.includes(id)) {
      if (this.state.maxScore < this.state.clickedIds.length) {
        console.log('inside')
        this.setState({maxScore: this.state.clickedIds.length });
      }
      alert("Try Again !!");
      this.setState({clickedIds:[]});
    } else {
      this.state.clickedIds.push(id);
      this.setState({userScore:this.state.clickedIds.length})
    }
    console.log(this.state.userScore, this.state.maxScore);
    this.setState({characters :this.shuffleArr(this.state.characters.filter((char)=>char.image))});
  }
//shuffleArr(this.state.characters.filter((char)=>char.location))
  render() {
    return (
      <Wrapper>
        {
            <NavBar />   
        }
        {   
          <Header backgroundImg="https://wallpaperbrowse.com/media/images/518071-background-hd_xO1TwRc.jpg" >
            <h1>Clicky Game !</h1>
          </Header>
        }
        {
          <CardsBox>
            {
              this.state.characters.map(character => (
                <Card
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  occupation={character.occupation}
                  location={character.location}
                  imgClicked={this.imageClicked}
                />  
                  )
                )
              }
          </CardsBox>
        }
        {   
          <Footer backgroundImg="https://wallpaperbrowse.com/media/images/518071-background-hd_xO1TwRc.jpg" >
            <h5>@Clicky Game !</h5>
          </Footer>
        }
      </Wrapper>
    )
  }
}

export default App;