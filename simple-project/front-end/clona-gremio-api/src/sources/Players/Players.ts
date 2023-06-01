// imagens dos jogadores
import Brenno from './images/Brenno.png';
import Fabio from './images/Fabio.png';
import Geromel from './images/Geromel.png';
import Kannemann from './images/Kannemann.png'; 
import DiogoBarbosa from './images/Diogo Barbosa.png';
import Nathan from './images/Nathan.png';
import Carballo from './images/Carballo.png';
import Suarez from './images/Suarez.png';
import Ferreira from './images/Ferreira.png';
import Vina from './images/Vina.png';
import GabrielGrando from './images/Gabriel Grando.png';
import Galdino from './images/Galdino.png';
import BrunoUvini from './images/Bruno Uvini.png';
import LucasSilva from './images/Lucas Silva.png';
import Gustavinho from './images/Gustavinho.png';
import JoaoPedro from './images/Joao Pedro.png';
import Cristaldo from './images/Cristaldo.png';
import Villasanti from './images/Villasanti.png';
import Reinaldo from './images/Reinaldo.png';
import Pepe from './images/Pepe.png';
import JhonataRobert from './images/Jhonata Robert.png';
import DiegoSouza from './images/Diego Souza.png';
import Adriel from './images/Adriel.png';
import BrunoAlves from './images/Bruno Alves.png'; 
import Ronald from './images/Ronald.png';
import Nata from './images/Nata.png';
import Bitello from './images/Bitello.png';
import FelipeScheibig from './images/Felipe Scheibig.png';
import JhonataVarela from './images/Jhonata Varela.png';
import Rubens from './images/Rubens.png';
import Zinho from './images/Zinho.png';
import KauanKelvin from './images/Kauan Kelvin.png';
import GustavoMartins from './images/Gustavo Martins.png';
import Cuiabano from './images/Cuiabano.png';
import AndreHenrique from './images/André Henrique.png';

// imagens das nabas
import Thaciano from './imagensNabas/Thaciano.png';
import ThiagoSantos from './imagensNabas/Thiago Santos.png'
import Kleber from './imagensNabas/Kleber.png';
import YuriMamute from './imagensNabas/Yuri Mamute.png';
import FacundoBertoglio from './imagensNabas/Bertoglio.png';
import Werley from './imagensNabas/Werley.png';
import Miralles from './imagensNabas/Miralles.png';
import Marquinhos from './imagensNabas/Marquinhos.png';
import Saimon from './imagensNabas/Saimon.png';
import Cris from './imagensNabas/Cris.png';
import Wellinton from './imagensNabas/Wellinton.png';
import Para from './imagensNabas/Para.png';
import AndreSantos from './imagensNabas/Andre Santos.png';
import MaxiRodrigues from './imagensNabas/Maxi Rodrigues.png';
import Adriano from './imagensNabas/Adriano.png';
import LucasCoelho from './imagensNabas/Lucas Coelho.png';
import Bobo from './imagensNabas/Bobo.png';
import Fred from './imagensNabas/Fred.png';
import Negueba from './imagensNabas/Negueba.png';
import { Jogador } from '../../api/types';

export default interface APIPlayerType {
    name: string,
    position: string
}

export const Jogadores: Jogador[] = [{
    name: "Brenno",
    position: "goleiro",
    image: Brenno,
}, {
    name: "Fábio",
    position: "lateral direito",
    image: Fabio,
}, {
    name: "Geromel",
    position: "zagueiro",
    image: Geromel,
}, {
    name: "Kannemann",
    position: "zagueiro",
    image: Kannemann,
}, {
    name: "Diogo Barbosa",
    position: "lateral esquerdo",
    image: DiogoBarbosa,
},{
    name: "Nathan",
    position: "meia",
    image: Nathan,
}, {
    name: "Felipe Carballo",
    position: "meio campo",
    image: Carballo,
}, {
    name: "Luís Suárez",
    position: "atacante",
    image: Suarez,
}, {
    name: "Ferreira",
    position: "atacante",
    image: Ferreira,
}, {
    name: "Vina",
    position: "meia atacante",
    image: Vina,
}, {
    name: "Gabriel Grando",
    position: "goleiro",
    image: GabrielGrando,
}, {
    name: "Everton Galdino",
    position: "meia",
    image: Galdino,
},{
    name: "Bruno Uvini",
    position: "zagueiro",
    image: BrunoUvini,
}, {
    name: "Lucas Silva",
    position: "volante",
    image: LucasSilva,
}, {
    name: "Gustavinho",
    position: "atacante",
    image: Gustavinho,
}, {
    name: "João Pedro",
    position: "lateral direito",
    image: JoaoPedro,
}, {
    name: "Franco Cristaldo",
    position: "meia atacante",
    image: Cristaldo,
}, {
    name: "Mathías Villasanti",
    position: "volante",
    image: Villasanti
}, {
    name: "Reinaldo",
    position: "lateral esquerdo",
    image: Reinaldo,
}, {
    name: "Pepê",
    position: "meio campo",
    image: Pepe,
}, {
    name: "Jhonata Robert",
    position: "atacante",
    image: JhonataRobert,
},{
    name: "Diego Souza",
    position: "atacante",
    image: DiegoSouza,
}, {
    name: "Adriel",
    position: "goleiro",
    image: Adriel,
}, {
    name: "Bruno Alves",
    position: "zagueiro",
    image: BrunoAlves,
}, {
    name: "Ronald",
    position: "volante",
    image: Ronald,
}, {
    name: "Natã",
    position: "zagueiro",
    image: Nata,
}, {
    name: "Bitello",
    position: "meia",
    image: Bitello,
}, {
    name: "Felipe Scheibig",
    position: "goleiro",
    image: FelipeScheibig,
}, {
    name: "Jhonata Varela",
    position: "volante",
    image: JhonataVarela,
}, {
    name: "Rubens",
    position: "atacante",
    image: Rubens,
}, {
    name: "Zinho",
    position: "atacante",
    image: Zinho,
}, {
    name: "Kauan Kelvin",
    position: "meia atacante",
    image: KauanKelvin,
}, {
    name: "Gustavo Martins",
    position: "zagueiro",
    image: GustavoMartins,
}, {
    name: "Cuiabano",
    position: "lateral esquerdo",
    image: Cuiabano,
}, {
    name: "André Henrique",
    position: "atacante",
    image: AndreHenrique
}]




export const Nabas: Jogador[] = [{
    name: "Thiago Santos",
    position: "volante",
    image: ThiagoSantos,
}, {
    name: "Thaciano",
    position: "versátil",
    image: Thaciano,
}, {
    name: "Kléber Gladiador",
    position: "atacante",
    image: Kleber
}, {
    name: "Yuri Mamute",
    position: "atacante",
    image: YuriMamute
}, {
    name: "Facundo Bertoglio",
    position: "atacante",
    image: FacundoBertoglio
}, {
    name: "Diogo Barbosa",
    position: "lateral esquerdo",
    image: DiogoBarbosa,
}, {
    name: "Werley",
    position: "zagueiro",
    image: Werley 
}, {
    name: "Miralles",
    position: "atacante",
    image: Miralles
}, {
    name: "Marquinhos",
    position: "meia atacante",
    image: Marquinhos
}, {
    name: "Saimon",
    position: "zagueiro",
    image: Saimon
}, {
    name: "Cris",
    position: "zagueiro",
    image: Cris
}, {
    name: "Wellinton",
    position: "atacante",
    image: Wellinton
}, {
    name: "Pará",
    position: "lateral direito",
    image: Para
}, {
    name: "André Santos",
    position: "atacante",
    image: AndreSantos
}, {
    name: "Maxi Rodrigues",
    position: "meio campo",
    image: MaxiRodrigues
}, {
    name: "Adriano Pagode",
    position: "volante",
    image: Adriano
}, {
    name: "Lucas Coelho",
    position: "atacante",
    image: LucasCoelho
}, {
    name: "Bobô",
    position: "atacante",
    image: Bobo
}, {
    name: "Fred",
    position: "zagueiro",
    image: Fred
}, {
    name: "Negueba",
    position: "atacante",
    image: Negueba
}]