import { useAppSelector } from "./redux-hooks";

export const useAcc = () => {
  const { userName, img, age, profileDesc, accEmail } = useAppSelector(
    (state) => state.account
  );
  return {
    logined: !!userName,
    userName,
    img,
    age,
    profileDesc,
    accEmail,
  };
};
