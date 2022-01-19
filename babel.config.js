module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            runtime: 'automatic'
            // com o runtime automatic não será necessário colocar no index.jsx 
            // import React from 'react';
        }]
    ]
}
