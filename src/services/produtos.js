import { http } from './config'

export default{

    listar:() => {
        return http.get('produtos')
    },

    salvar:(produto) =>{
        return http.post('produto', produto)
    }

}