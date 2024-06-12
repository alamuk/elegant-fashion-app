import { SpinnerContainer, SpinnerOverlay } from "./Spinner.style";

// export function Spinner() {
//   return <div></div>;
// }

export const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
