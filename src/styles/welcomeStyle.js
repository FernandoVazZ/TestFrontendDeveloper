import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  max-width: 100%;
  background-color: #F1F3F6;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const BoxLogo = styled.div`
  font-size: 48px;
  min-width: 100%;
  font-family: Rubik;
  font-style: italic;
  font-weight: bold;
  line-height: 57px;
  justify-content: center;
  text-align: center;
    p.title {
        min-width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 82px;
        background: -webkit-linear-gradient(#D5E6FF, #0D66EB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 2px #F1F3F6;
    }
    p.shadow {
        min-width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 85px;
        color: #75ACFF;
        -webkit-text-stroke: 5px #87ABE1;
    }

  @media (min-width: 1024px) {
    
  }
`;

export const BoxIllustration = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 150px;
    img {
       width: 100%;
       height: 80%;
        }
  @media (min-width: 1024px) {
    
  }
`;

export const BoxIHue = styled.div`
  justify-content: center;
  width: 80%;
  height: 90%;;
  position: absolute;
  background: #F1F3F6;
  mix-blend-mode: hue;
  @media (min-width: 1024px) {
    
  }
`;

export const Text = styled.p`
  color: #77787B;
  position: absolute;
  width: 317px;
  height: 104px;
  left: 29px;
  top: 540px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  @media (min-width: 1024px) {
    
  }
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000001;
  position: absolute;
  width: 311px;
  height: 53px;
  left: 32px;
  top: 676px;
  background: #F1F3F6;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 26.5px;
  margin-bottom: 83px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
  @media (min-width: 1024px) {
    
  }
`;