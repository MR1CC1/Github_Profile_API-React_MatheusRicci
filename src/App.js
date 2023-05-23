import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  const [valorInput, setValorInput] = useState('');
  const [inputUrl, setInputUrl] = useState('MR1CC1');
  
  const url = `https://api.github.com/users/${inputUrl}`;
  
  const handleChange = (e) => {
    setValorInput(e.target.value);
    setInputUrl(e.target.value)
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setDados(data);
    };
    fetchData();
  }, [url]);

  const infos = [
    {
      name: "ID",
      description: dados.id === null || "" ? "Nenhum Dado!" : dados.id,
    },
    {
      name: "Login",
      description: dados.login === null || "" ? "Nenhum Dado!" : dados.login,
    },
    {
      name: "Repositórios Públicos",
      description:
        dados.public_repos === null || "" ? "Nenhum Dado!" : dados.public_repos,
    },
    {
      name: "Empresa",
      description:
        dados.company === null || "" ? "Nenhum Dado!" : dados.company,
    },
    {
      name: "Local",
      description:
        dados.location === null || "" ? "Nenhum Dado!" : dados.location,
    },
    {
      name: "Blog",
      description: dados.blog === null || " " ? "Nenhum Dado!" : dados.blog,
    },
    {
      name: "Seguidores",
      description:
        dados.followers === null || "" ? "Nenhum Dado!" : dados.followers,
    },
    {
      name: "Seguindo",
      description:
        dados.following === null || "" ? "Nenhum Dado!" : dados.following,
    },
    {
      name: "Data de Criação",
      description:
        dados.created_at === null || "" ? "Nenhum Dado!" : dados.created_at,
    },
    {
      name: "Twitter",
      description:
        dados.witter_username === null || " "
          ? "Nenhum Dado!"
          : dados.witter_username,
    },
  ];

  return (
    <div className="bg-dark">
      <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <p style={{textAlign: 'center'}} className="mb-2">GitHub Infos</p>
            <p><a style={{textDecoration: 'underline' }} href="https://www.linkedin.com/in/matheus-ricci-228a06182/">Linkedin Matheus Ricci</a></p>
          </h2>
          <p style={{textAlign: 'center'}} className="mt-4 text-2xl">{dados.name}</p>
          <p className="mt-4">{dados.bio}</p>
          <p className="mt-5" style={{textAlign: 'center'}}><a style={{textDecoration: 'underline' }} href={dados.html_url}>Acessar Perfil no GitHub</a></p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {infos.map((info) => (
              <div key={info.name} className="border-t border-gray-200 pt-2">
                <dt className="font-medium">{info.name}</dt>
                <dd className="mt-2 text-sm">{info.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8 avatar">
          <img src={dados.avatar_url} alt="" className="rounded-lg" />
          <input
            type="text"
            value={valorInput}
            onChange={handleChange}
            name="price"
            id="linkGit"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Nome de Login - Exemplo: MR1CC1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
