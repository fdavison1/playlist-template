import React from 'react';
import styled from 'styled-components';
import advisory from './assets/parental-advisory.jpg'

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
display: flex;
justify-content: center;
align-items: center;
background: black;
height: 100vh;
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://cdn.shopify.com/s/files/1/0292/1398/2779/products/memorex-digital-audio-cdr-media-memorex-40x-digital-audio-music-cd-r-80min-700mb-logo-on-top-17610943103134_1200x1200.jpg?v=1593310767');
    height: 400px;
    width: 400px;
    flex-direction: column;
}
p {
    font-family: 'Gochi Hand', cursive;
    padding: 0;
    margin: 0;
    margin-top: 45px;
    margin-left: 75px;
    font-size: 7rem;
    color: purple;
}
img {
    height: 35px;
    width: 60px;
    position: relative;
    margin-top: 150px;
    margin-left: 315px;
}`

export default class Display extends React.Component{
    render(){
        return(
            <Wrapper>
                <div className="box">
                    <p>[SEP]</p>
                    <img src={advisory} alt=""/>
                </div>
            </Wrapper>
        )
    }
}