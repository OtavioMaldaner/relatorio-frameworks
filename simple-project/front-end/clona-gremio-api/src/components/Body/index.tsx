import './style.scss'
import { useState } from 'react';
import { Jogador, Jogadores, Nabas } from '../../sources/Players/Players';
import ProjectDescription from '../ProjectDescription';
const Body = () => {
    type credit_card = {
        number: string;
        cvc: string;
        date: string;
    }
    const [creditCard, setCreditCard] = useState<credit_card>({
        number: '',
        cvc: '',
        date: ''
    });
    const [toShow, setToShow] = useState<boolean>(false);
    const [player, setPlayer] = useState<Jogador>({
        name: '',
        position: '',
        image:''
    });
    const points = (creditCard: string) => {
        creditCard = creditCard.replace(/[^0-9]/g, '');
    let out = '';
    let valids = 0;//número de caracteres válidos até o momento.
    for(let i = 0;i < creditCard.length; i++){
        let caract = creditCard[i];
        switch(valids){
            case 4:
            case 9:
            case 14:
                //adicionar ponto
                if(caract != '.') caract = `.${caract}`;
                valids += 2;
                break;
            default:
                valids += 1;
                break;
        }
        out = `${out}${caract}`;
    }
    return out;
    }
    const result = (): boolean => {
        if (creditCard.cvc != '' || creditCard.date != '' || creditCard.number != '') {
            let now = new Date();
            let year = now.getFullYear();
            if (creditCard.cvc.length < 3 || creditCard.number.length < 19 || Number(creditCard.date.substring(0, 4)) < year) {
                setToShow(true);
                let number = Math.floor(Math.random() * Nabas.length);
                setPlayer({
                    name: Nabas[number].name,
                    position: Nabas[number].position,
                    image: Nabas[number].image
                })
                setCreditCard({
                    number: '',
                    cvc: '',
                    date: ''
                });
            } else {
                /*A conta criada é para gerar um resultado bem aleatório, mas de modo que caso a pessoa insira os mesmos dados o resultado seja o mesmo.
                A função consiste em dividir os números do cartão em quatro unidades e somar todas elas. Após isto, serão somados os números finais do ano
                de vencimento do cartão e dividir a soma total pelo código de segurança. Para não haver tanta repetição de resultados, multiplicaremos o resultado por 1000,
                e pegar o resto da divisão pelo tamanho do array de objetos jogadores.*/
                setToShow(true);
                let creditCardNumber = creditCard.number.split(".");
                let sumCreditCard = Number(creditCardNumber[0]) + Number(creditCardNumber[1]) + Number(creditCardNumber[2]) + Number(creditCardNumber[3]);
                let date = Number(creditCard.date.substring(2, 4));
                let sum = sumCreditCard + date;
                let divide = Math.round(sum / Number(creditCard.cvc));
                let multiply = divide * 1000;
                let rest = Math.round(multiply % Jogadores.length);
                setPlayer({
                    name: Jogadores[rest].name,
                    position: Jogadores[rest].position,
                    image: Jogadores[rest].image,
                })
                setCreditCard({
                    number: '',
                    cvc: '',
                    date: ''
                });
            }
            return true;
        } else {
            alert('Preencha os campos para fazer o teste!')
            return false;
        }
    }
    return(
        <div className="container">
            <div className='all'>
                <div className="body">
                    <div className="body-title">
                        <h1>Dados do cartão:</h1>
                    </div>
                    <input type="text" id="name" value={creditCard.number} required placeholder="Número do cartão..." maxLength={19} onChange={(e)=> {
                        setCreditCard({
                            ...creditCard, 
                            number: points(e.target.value)
                        })
                    }}></input>
                    <input type="text" id="number" value={creditCard.cvc} required maxLength={3} placeholder="Os três números atrás..." onChange={(e)=> {
                        setCreditCard({
                            ...creditCard, 
                            cvc: e.target.value
                        })
                    }}></input>
                    <input type="month" value={creditCard.date} id="date" required onChange={(e)=> {
                        setCreditCard({
                            ...creditCard, 
                            date: e.target.value
                        })
                    }}></input>
                    <div>
                        <button className="button" onClick={result}>Resultado</button>
                    </div>
                </div>
                <div className={!toShow ? 'description' : ''}>
                    {!toShow &&
                        <ProjectDescription />
                    }
                    {toShow &&
                        <section className='mainPlayerPart'>
                            <h2>Segundo os nossos cálculos, você é o {player.position} {player.name}</h2>
                            <img className='playerImage' src={player.image} alt={player.name} />
                            <div>
                                <button className="button" onClick={((e) => {
                                    setToShow(false);
                                    setPlayer({
                                        image: '',
                                        name: '',
                                        position: ''
                                    })
                                })}>Tentar novamente</button>
                            </div>
                        </section>
                    }
                </div>
            </div>
        </div>
    );
}
export default Body;