import React, { useEffect, useState } from "react";
import Main from "../componentes/template/Main";
import fetchGuerreiros from './fetchGuerreiros';
import { Navigate } from "react-router-dom";

const headerProps = {
    icon: 'users',
    title: 'batalha',
    subtitle: 'tela de batalha'
}

function Batalha() {
    const [guerreiros, setGuerreiros] = useState([]);
    const [guerreiroSelecionado1, setGuerreiroSelecionado1] = useState('');
    const [guerreiroSelecionado2, setGuerreiroSelecionado2] = useState('');
    const [redirectVitoria, setRedirectVitoria] = useState(false);
    const [redirectEmpate, setRedirectEmpate] = useState(false);
    const [redirectDerrota, setRedirectDerrota] = useState(false);

    useEffect(() => {
        async function loadGuerreiros() {
            try {
                const data = await fetchGuerreiros();
                setGuerreiros(data);
            } catch (error) {
                console.error('Erro ao buscar guerreiros:', error);
            }
        }

        loadGuerreiros();
    }, []);

    const handleGuerreiroChange1 = (event) => {
        setGuerreiroSelecionado1(event.target.value);
    };

    const handleGuerreiroChange2 = (event) => {
        setGuerreiroSelecionado2(event.target.value);
    };

    const handleBatalha = () => {
        console.log("Botão 'Iniciar Batalha' clicado!");
        if (guerreiroSelecionado1 && guerreiroSelecionado2) {
            const guerreiro1 = guerreiros.find(guerreiro => guerreiro.id_guerreiro === parseInt(guerreiroSelecionado1));
            const guerreiro2 = guerreiros.find(guerreiro => guerreiro.id_guerreiro === parseInt(guerreiroSelecionado2));

            if (guerreiro1 && guerreiro2) {
                if (guerreiro1.level > guerreiro2.level) {
                    setRedirectVitoria(true);
                } else if (guerreiro1.level === guerreiro2.level) {
                    setRedirectEmpate(true);
                } else {
                    setRedirectDerrota(true);
                }
            }
        } else {
            console.log("Por favor, selecione dois guerreiros para iniciar a batalha.");
        }
    };

    if (redirectVitoria) {
        return <Navigate to="/parabens" />;
    } else if (redirectEmpate) {
        return <Navigate to="/empate" />;
    } else if (redirectDerrota) {
        return <Navigate to="/derrota" />;
    }

    return (
        <Main {...headerProps}>
            <p>JOGADOR</p>
            <div>
                <select value={guerreiroSelecionado1} onChange={handleGuerreiroChange1}>
                    <option value="">Selecione um guerreiro...</option>
                    {guerreiros.map((guerreiro, index) => (
                        <option key={index} value={guerreiro.id_guerreiro}>
                            {guerreiro.nome} - Level: {guerreiro.level}
                        </option>
                    ))}
                </select>
            </div>
            <br />
            <p>CPU</p>
            <div>
                <select value={guerreiroSelecionado2} onChange={handleGuerreiroChange2}>
                    <option value="">Selecione outro guerreiro...</option>
                    {guerreiros.map((guerreiro, index) => (
                        <option key={index} value={guerreiro.id_guerreiro}>
                            {guerreiro.nome} - Level: {guerreiro.level}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleBatalha}>Iniciar Batalha</button>
        </Main>
    );
}

export default Batalha;

