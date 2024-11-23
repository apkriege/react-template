import reactLogo from "../assets/react.svg";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center text-gray-100">
      <div className="flex">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react mb-4" alt="React logo" width="75px" />
        </a>
      </div>
      <h1 className="text-3xl">Star Wars React Example</h1>
    </div>
  );
}
