import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  margin: 0px;
  max-width: 100%;
  background-color: #F1F3F6;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const BoxLogo = styled.div`
  font-size: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Rubik;
  font-style: italic;
  font-weight: bold;
  line-height: 57px;
  justify-content: center;
  text-align: center;
    p.title {
        position: absolute;
        top: 82px;
        background: -webkit-linear-gradient(#D5E6FF, #0D66EB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 2px #F1F3F6;
    }
    p.shadow {
        margin-top: 85px;
        color: #75ACFF;
        -webkit-text-stroke: 5px #87ABE1;
    }

  @media (min-width: 1024px) {
    
  }
`;

export const BoxIllustration = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
    img {
       width: 100%;
       height: 400px;
        }
  @media (max-width: 1054px) {
  }
`;

export const BoxIHue = styled.div`
  justify-content: center;
  width: 100%;
  height: 400px;
  position: absolute;
  background: #F1F3F6;
  mix-blend-mode: hue;
  @media (min-width: 1024px) {
    
  }
`;

export const Text = styled.p`
  color: #77787B;
  margin-top: 5px;
  padding: 8px 29px 32px 29px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  @media (min-width: 1024px) {
    
  }
`;

export const Button = styled.button`
  margin-bottom: 83px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000001;
  width: 311px;
  height: 53px;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  background: #F1F3F6;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 26.5px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
  @media (min-width: 1024px) {
    
  }
`;