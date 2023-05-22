//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);


  const inputUrl = "MR1CC1"

  const url = `https://api.github.com/users/${inputUrl}`;

  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setDados(data);
    };
    fetchData();
  }, []);

  const infos = [{ name: "Login", description: dados.login }];

  return (
    <div className="bg-dark">

      

      <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
      
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            GitHub Infos
          </h2>
          <p className="mt-4">XXX</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {infos.map((info) => (
              <div key={info.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium">{info.name}</dt>
                <dd className="mt-2 text-sm">
                  {info.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="avatar">
          <img
            src={dados.avatar_url}
            alt=""
            className="rounded-lg"
          />
          <input type="text" onChange={() => {
            console.log(url)
          }} name="price" id="linkGit"  class="block mt-1 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Link do Perfil do GitHub"/>
        </div>
      </div>
    </div>
  );
}

export default App;
