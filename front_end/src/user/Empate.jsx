// Empate.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../componentes/template/Main';

const headerProps = {
    icon: 'handshake',
    title: 'Empate!',
    subtitle: 'A batalha terminou em empate.'
};

const Empate = () => {
    return (
        <Main {...headerProps}>
            <div className="display-4">A batalha terminou em empate.</div>
            <hr />
            <p className="mb-0">Não houve vencedores nem perdedores.</p>
            <Link to="/batalha" className="btn btn-primary">
                <i className="bi bi-hand-thumbs-up"></i>
                Nova Batalha
            </Link>
        </Main>
    );
};

export default Empate;