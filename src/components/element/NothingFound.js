import Image from "next/image";

export default function NothingFound() {
  return (
    <div style={{ margin: "0 auto" }}>
      <Image src="/images/nothings_found.webp" alt="notfoundData" width={400} height={220} />
    </div>
  );
}
