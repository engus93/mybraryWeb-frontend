import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const errorMessage = "Unable to your request. Please try again";

// Book List 재사용 문구

export const bestSeller = `🏆 ${new Date().getFullYear()}년 ${new Date().getMonth() +
  1}월 베스트셀러 🏆`;
export const newBook = `🎁 ${new Date().getFullYear()}년 ${new Date().getMonth() +
  1}월 신작 🎁`;
export const cook = `🥗 오늘 뭐 먹지? 🍣`;
export const travel = `🚄 여행을 떠나요~ 🛬`;
export const humanities = `🧘🏻‍♂️ 마음의 평화 🧘🏻‍♀️`;
export const selfDevelopment = `👨🏻‍💻 어제보다는 오늘 더! 👩🏻‍💻`;
