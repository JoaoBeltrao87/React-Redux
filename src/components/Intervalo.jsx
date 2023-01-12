import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

// eslint-disable-next-line import/no-anonymous-default-export
function Intervalo(props) {
    const { min, max } = props;
    return (
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo);