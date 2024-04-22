import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../componentes/template/Main';

const headerProps = {
    icon: 'thumbs-down',
    title: 'Derrota!',
    subtitle: 'Você perdeu a batalha.'
};

const Derrota = () => {
    return (
        <Main {...headerProps}>
            <div className="display-4">Você perdeu a batalha.</div>
            <hr />
            <p className="mb-0">Melhore suas habilidades e tente novamente!</p>
            <Link to="/batalha" className="btn btn-primary">
                <i className="bi bi-hand-thumbs-up"></i>
                Nova Batalha
            </Link>
        </Main>
    );
};

export default Derrota;