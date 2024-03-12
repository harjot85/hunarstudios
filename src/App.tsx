import Logo from "../public/HunarLogoJPG.jpg";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={Logo} />
      </div>
      <div>
        <p className="text-slate-700"><i>Website coming soon</i></p>
        <a href="https://www.instagram.com/hunarstudios_" className="text-yellow-700 hover:underline">Follow me on Instagram</a>
      </div>
    </>
  );
}

export default App;
