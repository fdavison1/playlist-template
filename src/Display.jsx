import React from 'react';
import styled from 'styled-components';
import advisory from './assets/parental-advisory.jpg'

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lacquer&display=swap');
display: flex;
justify-content: center;
align-items: center;
background: black;
height: 100vh;
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: 400px;
    width: 400px;
    flex-direction: column;
}
p {
    font-family: 'Lacquer', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 8.6rem;
    margin-top: 65px;
}
img {
    height: 35px;
    width: 60px;
    position: relative;
    margin-top: 110px;
    margin-left: 315px;
}`

export default class Display extends React.Component{
    render(){
        return(
            <Wrapper>
                <div className="box">
                    <p>[DEC]</p>
                    <img src={advisory} alt=""/>
                </div>
            </Wrapper>
        )
    }
}