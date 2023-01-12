import { 
    NUM_MIN_ALTERADO, 
    NUM_MAX_ALTERADO } 
    from './actionTypes'

export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,
        payLoad: novoNumero 
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payLoad: novoNumero 
    }
}