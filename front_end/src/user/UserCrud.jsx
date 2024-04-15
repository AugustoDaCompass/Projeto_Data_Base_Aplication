import React, { useState } from "react";
import Main from "../componentes/template/Main";
import axios from "axios";

const headerProps = {
    icon: 'users',
    title: 'Guerreiros',
    subtitle: 'Cadastro de Guerreiros'
}

function AdicionarUsuario() {
    const [nome, setNome] = useState("");
    const [habilidade, setHabilidade] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Faz a solicitação POST para adicionar o usuário
            await axios.post('http://localhost:5000/users', { nome, habilidade });

            // Limpa os campos do formulário após a adição bem-sucedida
            setNome("");
            setHabilidade("");

            alert('Usuário adicionado com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar usuário:', error);
            alert('Erro ao adicionar usuário. Consulte o console para mais detalhes.');
        }
    };

    return (
        <Main {...headerProps}>
            <h2>Adicionar Guerreiro</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <br />
                <label>Habilidade:</label>
                <input type="text" value={habilidade} onChange={(e) => setHabilidade(e.target.value)} />
                <br />
                <button type="submit">Adicionar Usuário</button>
            </form>
        </Main>
    );
}

export default AdicionarUsuario;
