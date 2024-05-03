import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js";
import {styles} from "./home.style.js";
import Despesa from "../../components/despesa.jsx";


//function home () {}
const Home = (props) => {

    const [total, setTotal] = useState(0);
    const [despesas, setDespesas] = useState([]);
    const OpenDespesa = (id) => {
        props.navigation.navigate("despesas")
    };

    const ListarDespesas = () => {
        //simula o acesso a API
        const dados = [
            {id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500},
            {id: 2, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", categoria: "Casa", descricao: "Condomínio", valor: 620},
            {id: 3, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", categoria: "Lazer", descricao: "Sorvete no parque", valor: 17.50},
            {id: 4, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Walmart", valor: 375},
            {id: 5, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", categoria: "Educação", descricao: "Faculdade", valor: 490},
            {id: 6, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Passagem Aérea", valor: 610},
            {id: 7, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Churrasco", valor: 144.30},
            {id: 8, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Hotel", valor: 330}
        ];

        //calcula a soma das despesas
        let soma = 0;
        for ( var i = 0; i < dados.length; i++)
            soma = soma + dados[i].valor;

            
        setTotal(soma);
        setDespesas(dados);
    };

    useEffect(() => {
        ListarDespesas();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={icons.logo} style={styles.logo} />



            <View style={styles.dashboard}>
                <View>
                    <Text style={styles.dashboardValor}> R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</Text>
                    <Text style={styles.dashboardText}>Total de Gastos</Text>
                </View>
                <Image style={styles.dashboardImg} source={icons.money}/>
            </View>

            <View>
                <Text style={styles.despesasTitulo}>Despesas</Text>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                {
                    despesas.map((desp) => {
                        return <Despesa key={desp.id} id={desp.id} icon={desp.icon} 
                        categoria={desp.categoria} descricao={desp.descricao} valor={desp.valor} OnClick={OpenDespesa} />
                    })
                }
                 
                    </ScrollView>
                </View>
            </View>

            <TouchableOpacity style={styles.btnAdd} onPress={() => OpenDespesa(0)}>

                <Image source={icons.add} style={styles.btnAddImage}/>
            </TouchableOpacity>
        </View>
        
    )
}

export default Home;