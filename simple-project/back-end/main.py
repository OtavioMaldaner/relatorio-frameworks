from fastapi import FastAPI

app = FastAPI()

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
    {"name": "André Henrique", "position": "atacante"},
]

nabas = [
    {"name": "Thiago Santos", "position": "volante"},
    {"name": "Thaciano", "position": "versátil"},
    {"name": "Kléber Gladiador", "position": "atacante"},
    {"name": "Yuri Mamute", "position": "atacante"},
    {"name": "Facundo Bertoglio", "position": "atacante"},
    {"name": "Diogo Barbosa", "position": "lateral esquerdo"},
    {"name": "Werley", "position": "zagueiro"},
    {"name": "Miralles", "position": "atacante"},
    {"name": "Marquinhos", "position": "meia atacante"},
    {"name": "Saimon", "position": "zagueiro"},
    {"name": "Cris", "position": "zagueiro"},
    {"name": "Wellinton", "position": "atacante"},
    {"name": "Pará", "position": "lateral direito"},
    {"name": "André Santos", "position": "atacante"},
    {"name": "Maxi Rodrigues", "position": "meio campo"},
    {"name": "Adriano Pagode", "position": "volante"},
    {"name": "Lucas Coelho", "position": "atacante"},
    {"name": "Bobô", "position": "atacante"},
    {"name": "Fred", "position": "zagueiro"},
    {"name": "Negueba", "position": "atacante"},
]


@app.get("/jogadores")
async def players_length():
    return len(jogadores)


@app.get("/jogadores/list")
async def players_list():
    return jogadores


@app.get("/jogadores/get/{id}")
async def get(id: int):
    return jogadores[id]


@app.get("/nabas")
async def nabas_length():
    return len(nabas)


@app.get("/nabas/list")
async def nabas_list():
    return nabas


@app.get("/nabas/get/{id}")
async def get_nabas(id: int):
    return nabas[id]
