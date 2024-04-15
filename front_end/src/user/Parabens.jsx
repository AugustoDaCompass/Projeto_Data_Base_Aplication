import React from "react";

import Main from "../componentes/template/Main";


const Parabens = () => {
    const headerProps = {
        icon: 'thumbs-up',
        title: 'Parabéns!',
        subtitle: 'Você venceu a batalha!'
    };

    return (
        <Main {...headerProps}>
            <div>
                <p>Parabéns! Você venceu a batalha!</p>
            </div>
        </Main>
    );
}

export default Parabens;