//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);

  const url = "https://api.github.com/users/MR1CC1";

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
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GitHub Infos
          </h2>
          <p className="mt-4 text-gray-500">XXX</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {infos.map((info) => (
              <div key={info.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{info.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {info.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-1 sm:gap-2 lg:gap-2">
          <img
            src={dados.avatar_url}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
