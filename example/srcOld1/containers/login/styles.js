import styled from "styled-components";
import tw from "twin.macro";

export const RootContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginContainer = styled.div.attrs({
  className: " w-full h-full flex flex-col items-center justify-center p-8",
})`
  background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14bugatti-divo-99leadgallery-1535035005.jpg");
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.17);

  .title {
    ${tw`text-white`}
  }
  .subtitle {
    ${tw`text-yellow-600 mb-8 text-xl font-bold`}
  }
  .btn-login {
    ${tw`rounded-md bg-yellow-400 text-black border-black font-bold text-xl hover:text-yellow-400 hover:bg-black hover:border-yellow-400 flex justify-center items-center`}
  }
`;

export const WithVerticalMargin = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;
