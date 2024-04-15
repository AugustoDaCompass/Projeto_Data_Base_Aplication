import React, { useEffect , useState } from "react";
import Main from "../componentes/template/Main";
import axios from "axios";
import fetchGuerreiros from './fetchGuerreiros';

const headerProps = {
    icon: 'users',
    title: 'batalha',
    subtitle: 'tela de batalha'
}

function Batalha() {
    const [guerreiros, setGuerreiros] = useState([]);
    const [guerreiroSelecionado1, setGuerreiroSelecionado1] = useState('');
    const [guerreiroSelecionado2, setGuerreiroSelecionado2] = useState('');

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

    return (
        <Main {...headerProps}>
            <div>
                <select value={guerreiroSelecionado1} onChange={handleGuerreiroChange1}>
                    <option value="">Selecione um guerreiro...</option>
                    {guerreiros.map((guerreiro, index) => (
                        <option key={index} value={guerreiro.id_guerreiro}>
                            {guerreiro.nome}
                        </option>
                    ))}
                </select>
            </div>
            <br />
            <div>
                <select value={guerreiroSelecionado2} onChange={handleGuerreiroChange2}>
                    <option value="">Selecione outro guerreiro...</option>
                    {guerreiros.map((guerreiro, index) => (
                        <option key={index} value={guerreiro.id_guerreiro}>
                            {guerreiro.nome}
                        </option>
                    ))}
                </select>
            </div>
        </Main>
    );
}

//export default Batalha;
