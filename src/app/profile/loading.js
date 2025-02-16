import { FadeLoader } from "react-spinners";

export default function Loading() {
  return <FadeLoader color="#28a745" speedMultiplier={2} cssOverride={{ margin: "5% auto" }} />;
}
