from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import base64
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class CreditCard(BaseModel):
    number: str
    date: str
    cvc: str

class Player(BaseModel):
    name: str
    position: str
    image: str   

def encode_player_image(player: str, directory: str) -> str:
    with open(f"./{directory}/{player}.png", "rb") as player_image:
        str_image = base64.b64encode(player_image.read())
        clean_str = str_image.decode('utf-8')
        return clean_str

jogadores = [
    {"name": "Brenno", "position": "goleiro"},
    {"name": "Fábio", "position": "lateral direito"},
    {"name": "Geromel", "position": "zagueiro"},
    {"name": "Kannemann", "position": "zagueiro"},
    {"name": "Diogo Barbosa", "position": "lateral esquerdo"},
    {"name": "Nathan", "position": "meia"},
    {"name": "Felipe Carballo", "position": "meio campo"},
    {"name": "Luís Suárez", "position": "atacante"},
    {"name": "Ferreira", "position": "atacante"},
    {"name": "Vina", "position": "meia atacante"},
    {"name": "Gabriel Grando", "position": "goleiro"},
    {"name": "Everton Galdino", "position": "meia"},
    {"name": "Bruno Uvini", "position": "zagueiro"},
    {"name": "Lucas Silva", "position": "volante"},
    {"name": "Gustavinho", "position": "atacante"},
    {"name": "João Pedro", "position": "lateral direito"},
    {"name": "Franco Cristaldo", "position": "meia atacante"},
    {"name": "Mathías Villasanti", "position": "volante"},
    {"name": "Reinaldo", "position": "lateral esquerdo"},
    {"name": "Pepê", "position": "meio campo"},
    {"name": "Jhonata Robert", "position": "atacante"},
    {"name": "Diego Souza", "position": "atacante"},
    {"name": "Adriel", "position": "goleiro"},
    {"name": "Bruno Alves", "position": "zagueiro"},
    {"name": "Ronald", "position": "volante"},
    {"name": "Natã", "position": "zagueiro"},
    {"name": "Bitello", "position": "meia"},
    {"name": "Felipe Scheibig", "position": "goleiro"},
    {"name": "Jhonata Varela", "position": "volante"},
    {"name": "Rubens", "position": "atacante"},
    {"name": "Zinho", "position": "atacante"},
    {"name": "Kauan Kelvin", "position": "meia atacante"},
    {"name": "Gustavo Martins", "position": "zagueiro"},
    {"name": "Cuiabano", "position": "lateral esquerdo"},
    {"name": "Thomas Luciano", "position": "lateral direito"},
    {"name": "André Henrique", "position": "atacante"},
]

nabas = [
    {"name": "Thiago Santos", "position": "volante"},
    {"name": "Thaciano", "position": "versátil"},
    {"name": "Diogo Barbosa", "position": "lateral esquerdo"},
    {"name": "Guilherme", "position": "atacante"},
    {"name": "Rodrigo Ferreira", "position": "lateral direito"},
    {"name": "Jaminton Campaz", "position": "meia"},
    {"name": "Janderson", "position": "atacante"},
    {"name": "Ricardinho", "position": "atacante"},
    {"name": "Elias Manoel", "position": "atacante"},
    {"name": "Sarará", "position": "meio campo"},
    {"name": "Benítez", "position": "meia"},
    {"name": "Tonhão", "position": "zagueiro"},
    {"name": "Rildo", "position": "atacante"},
    {"name": "Luís Orejuela", "position": "lateral direito"},
    {"name": "Diego Churín", "position": "atacante"},
    {"name": "Douglas Costa", "position": "atacante"},
    {"name": "Alisson", "position": "atacante"},
    {"name": "Borja", "position": "atacante"},
    {"name": "Paulo Miranda", "position": "zagueiro"},
    {"name": "Everton Cenourinha", "position": "atacante"},
    {"name": "Darlan", "position": "volante"},
    {"name": "Léo Pereira", "position": "atacante"},
    {"name": "Luiz Fernando", "position": "atacante"},
    {"name": "Ruan 70k", "position": "zagueiro"},
    {"name": "Negueba", "position": "atacante"},
    {"name": "Fred", "position": "zagueiro"},
    {"name": "Bobô", "position": "atacante"},
    {"name": "Lucas Coelho", "position": "atacante"},
    {"name": "Marquinhos", "position": "meia atacante"},
    {"name": "Adriano Pagode", "position": "volante"},
    {"name": "Saimon", "position": "zagueiro"},
    {"name": "Cris", "position": "zagueiro"},
    {"name": "Wellinton", "position": "atacante"},
    {"name": "Pará", "position": "lateral direito"},
    {"name": "André Santos", "position": "atacante"},
    {"name": "Maxi Rodrigues", "position": "meio campo"},
    {"name": "Miralles", "position": "atacante"},
    {"name": "Werley", "position": "zagueiro"},
    {"name": "Facundo Bertoglio", "position": "atacante"},
    {"name": "Yuri Mamute", "position": "atacante"},
    {"name": "Kléber Gladiador", "position": "atacante"},
]

for jogador in jogadores:
    result = encode_player_image(jogador["name"], "images")
    jogador["image"] = result

for naba in nabas:
    result = encode_player_image(naba["name"], "imagensNabas")
    naba["image"] = result

@app.get("/")
async def players_length():
    return {"jogadores": len(jogadores), "nabas": len(nabas)}

@app.get("/jogadores/get/{id}")
async def get(id: int):
    return jogadores[id]

@app.get("/nabas")
async def nabas_length():
    return len(nabas)

@app.get("/nabas/get/{id}")
async def get_nabas(id: int):
    return nabas[id]
