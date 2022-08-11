import tw, { styled } from "twin.macro";

export const Bubble = styled.div(() => [
  tw`py-3 rounded-lg bg-blue-400 text-center text-xs md:text-lg font-semibold shadow-md
  hover:scale-110 transition duration-300 ease-in-out`,
]);
