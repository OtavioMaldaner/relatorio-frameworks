import './style.scss';
const Header = () => {
    return(
        <div className="header">
            <div className="header-title">
                <h1>Descubra qual jogador do Grêmio você é</h1>
            </div>
            <div className="header-subtitle">
                <h3>Insira os dados para descobrir o jogador do Grêmio que você é:</h3>
            </div>
            <div className="header-alert">
                <p><strong>Lembrando: </strong>Os dados enviados não precsiam ser dados reais. Este site foi feito somente para fins de entretenimento e os dados inseridos não serão armazenados!</p>
            </div>
        </div>
    );
}
export default Header;