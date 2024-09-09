let dados = [
  {   
      titulo : 'Vasco da Gama',
      descricao : 'O Vasco da Gama é um dos clubes de futebol mais tradicionais e populares do Brasil. Fundado em 1898, no Rio de Janeiro, o Vasco se tornou um símbolo de luta e resistência, representando as classes trabalhadoras.',
      link_wiki : 'https://pt.wikipedia.org/wiki/Club_de_Regatas_Vasco_da_Gama',
      link_siteofc : 'https://vasco.com.br/',
      link_insta : 'https://www.instagram.com/vascodagama/',
      estado: 'Rio de Janeiro',
      tags: 'Campeão Brasileiro Copa do Brasil Campeão da Libertadores Campeonato Carioca'
  },
  {
      titulo: 'Esporte Clube Bahia',
      descricao: 'O Esporte Clube Bahia é um dos clubes de futebol mais tradicionais do Brasil, com uma rica história e uma apaixonada torcida. Fundado em 1895, em Salvador, o Bahia se tornou um dos principais representantes do futebol baiano e brasileiro.',
      link_wiki: 'https://pt.wikipedia.org/wiki/Esporte_Clube_Bahia',
      link_siteofc: 'https://www.esporteclubebahia.com.br/',
      link_insta: 'https://www.instagram.com/ecbahia/',
      estado: 'Bahia',
      tags: 'Campeão Brasileiro Copa do Nordeste Campeonato Baiano'
  },
  {
      titulo: 'Botafogo de Futebol e Regatas',
      descricao: 'O Botafogo de Futebol e Regatas é um dos principais clubes de futebol do Brasil. Fundado em 1904, no Rio de Janeiro, o Botafogo possui uma grande torcida e uma rica história, marcada por títulos e grandes jogadores.',
      link_wiki: 'https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas',
      link_siteofc: 'https://www.botafogo.com.br/',
      link_insta: 'https://www.instagram.com/botafogo/',
      estado: 'Rio de Janeiro',
      tags: 'Campeão Brasileiro Copa Conmebol Campeonato Carioca'
  },
  {
    titulo: 'Sport Club Corinthians Paulista',
    descricao: 'Fundado em 1910, o Corinthians é um dos clubes mais populares do Brasil, com uma das maiores torcidas do país e uma história rica de conquistas.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista',
    link_siteofc: 'https://www.corinthians.com.br/',
    link_insta: 'https://www.instagram.com/corinthians/',
    estado: 'São Paulo',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeão Mundial Campeonato Paulista'
},
{
    titulo: 'São Paulo Futebol Clube',
    descricao: 'Fundado em 1930, o São Paulo é um dos maiores clubes de futebol do Brasil, com uma história de grandes conquistas nacionais e internacionais.',
    link_wiki: 'https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_Futebol_Clube',
    link_siteofc: 'https://www.saopaulofc.net/',
    link_insta: 'https://www.instagram.com/saopaulofc/',
    estado: 'São Paulo',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeão Mundial Campeonato Paulista'
},
{
    titulo: 'Clube de Regatas do Flamengo',
    descricao: 'O Flamengo é um dos clubes mais populares e bem-sucedidos do Brasil, com uma imensa torcida e uma rica história de títulos.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo',
    link_siteofc: 'https://www.flamengo.com.br/',
    link_insta: 'https://www.instagram.com/flamengo/',
    estado: 'Rio de Janeiro',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeão Mundial Campeonato Carioca'
},
{
    titulo: 'Clube Atlético Mineiro',
    descricao: 'O Clube Atlético Mineiro, também conhecido como Galo, é um dos maiores clubes de futebol do Brasil, com uma rica história de títulos.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Clube_Atl%C3%A9tico_Mineiro',
    link_siteofc: 'https://www.atletico.com.br/',
    link_insta: 'https://www.instagram.com/atletico/',
    estado: 'Minas Gerais',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeonato Mineiro'
},
{
    titulo: 'Cruzeiro Esporte Clube',
    descricao: 'Fundado em 1921, o Cruzeiro é um dos maiores clubes de Minas Gerais, com uma história de grandes conquistas no cenário nacional e internacional.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Cruzeiro_Esporte_Clube',
    link_siteofc: 'https://www.cruzeiro.com.br/',
    link_insta: 'https://www.instagram.com/cruzeiro/',
    estado: 'Minas Gerais',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeonato Mineiro'
},
{
    titulo: 'Grêmio Foot-Ball Porto Alegrense',
    descricao: 'Fundado em 1903, o Grêmio é um dos clubes mais tradicionais do Brasil, com uma história de grandes conquistas no cenário nacional e internacional.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Gr%C3%AAmio_Foot-Ball_Porto_Alegrense',
    link_siteofc: 'https://www.gremio.net/',
    link_insta: 'https://www.instagram.com/gremio/',
    estado: 'Rio Grande do Sul',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeão Mundial Gaucho Gaúcho'
},
{
    titulo: 'Sport Club Internacional',
    descricao: 'O Sport Club Internacional, fundado em 1909, é um dos clubes mais tradicionais do Brasil, com uma rica história de conquistas nacionais e internacionais.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Sport_Club_Internacional',
    link_siteofc: 'https://www.internacional.com.br/',
    link_insta: 'https://www.instagram.com/internacional/',
    estado: 'Rio Grande do Sul',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeão Mundial Gaucho Gaúcho'
},
{
    titulo: 'Sociedade Esportiva Palmeiras',
    descricao: 'Fundado em 1914, o Palmeiras é um dos maiores clubes de futebol do Brasil, com uma história rica de títulos nacionais e internacionais.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Sociedade_Esportiva_Palmeiras',
    link_siteofc: 'https://www.palmeiras.com.br/',
    link_insta: 'https://www.instagram.com/palmeiras/',
    estado: 'São Paulo',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeonato Paulista'
},
{
    titulo: 'Santos Futebol Clube',
    descricao: 'O Santos, fundado em 1912, é um dos clubes mais tradicionais e bem-sucedidos do Brasil, reconhecido por revelar grandes jogadores e por suas conquistas.',
    link_wiki: 'https://pt.wikipedia.org/wiki/Santos_Futebol_Clube',
    link_siteofc: 'https://www.santosfc.com.br/',
    link_insta: 'https://www.instagram.com/santosfc/',
    estado: 'São Paulo',
    tags: 'Campeão Brasileiro Copa do Brasil Campeão Libertadores Campeonato Paulista'
},
{
  titulo: 'Athletico Paranaense',
  descricao: 'O Club Athletico Paranaense, fundado em 1924, é um dos maiores clubes do Paraná e do Brasil, com conquistas nacionais e internacionais importantes.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Club_Athletico_Paranaense',
  link_siteofc: 'https://www.athletico.com.br/',
  link_insta: 'https://www.instagram.com/athleticoparanaense/',
  estado: 'Paraná',
  tags: 'Campeão Brasileiro Copa do Brasil Copa Sul-Americana'
},
{
  titulo: 'Fortaleza Esporte Clube',
  descricao: 'Fundado em 1918, o Fortaleza é um dos maiores clubes do Nordeste, com uma torcida apaixonada e conquistas recentes em competições nacionais e regionais.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Fortaleza_Esporte_Clube',
  link_siteofc: 'https://fortaleza1918.com.br/',
  link_insta: 'https://www.instagram.com/fortalezaec/',
  estado: 'Ceará',
  tags: 'Copa do Nordeste Campeonato Cearense Campeão Brasileiro Série B'
},
{
  titulo: 'Cuiabá Esporte Clube',
  descricao: 'Fundado em 2001, o Cuiabá Esporte Clube é uma equipe em ascensão no futebol brasileiro, se destacando nos últimos anos com sua permanência na Série A.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Cuiab%C3%A1_Esporte_Clube',
  link_siteofc: 'https://cuiabaesporteclube.com.br/',
  link_insta: 'https://www.instagram.com/cuiabaec/',
  estado: 'Mato Grosso',
  tags: 'Campeonato Mato-Grossense'
},
{
  titulo: 'Fluminense Football Club',
  descricao: 'Fundado em 1902, o Fluminense é um dos clubes mais tradicionais do Brasil, com uma história rica de conquistas nacionais e internacionais.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Fluminense_Football_Club',
  link_siteofc: 'https://www.fluminense.com.br/',
  link_insta: 'https://www.instagram.com/fluminensefc/',
  estado: 'Rio de Janeiro',
  tags: 'Campeão Brasileiro Copa do Brasil Copa Rio Campeonato Carioca'
},
{
  titulo: 'Red Bull Bragantino',
  descricao: 'O Red Bull Bragantino, anteriormente conhecido como Clube Atlético Bragantino, foi fundado em 1928 e é uma equipe em crescimento no cenário nacional, especialmente após sua parceria com a Red Bull.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Red_Bull_Bragantino',
  link_siteofc: 'https://www.redbullbragantino.com.br/',
  link_insta: 'https://www.instagram.com/redbullbragantino/',
  estado: 'São Paulo',
  tags: 'Campeão Brasileiro Série B Campeonato Paulista'
},
{
  titulo: 'Esporte Clube Vitória',
  descricao: 'O Esporte Clube Vitória, fundado em 1899, é um dos clubes mais tradicionais do futebol baiano, com diversas conquistas estaduais e uma torcida apaixonada.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Esporte_Clube_Vit%C3%B3ria',
  link_siteofc: 'https://ecvitoria.com.br/',
  link_insta: 'https://www.instagram.com/ecvitoriaoficial/',
  estado: 'Bahia',
  tags: 'Campeonato Baiano Campeão Brasileiro Série B Copa do Nordeste'
},
{
  titulo: 'Esporte Clube Juventude',
  descricao: 'Fundado em 1913, o Juventude é um clube tradicional do Rio Grande do Sul. É conhecido por suas campanhas na Série A e por conquistar a Copa do Brasil em 1999.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Esporte_Clube_Juventude',
  link_siteofc: 'https://www.juventude.com.br/',
  link_insta: 'https://www.instagram.com/juventudeoficial/',
  estado: 'Rio Grande do Sul',
  tags: 'Campeão Brasileiro Série B Copa do Brasil Campeonato Gaúcho'
},
{
  titulo: 'Criciúma Esporte Clube',
  descricao: 'Fundado em 1947, o Criciúma Esporte Clube é um dos clubes mais tradicionais de Santa Catarina. É conhecido por suas conquistas nacionais, incluindo a Copa do Brasil de 1991.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Crici%C3%BAma_Esporte_Clube',
  link_siteofc: 'https://www.criciumaec.com.br/',
  link_insta: 'https://www.instagram.com/criciumaec/',
  estado: 'Santa Catarina',
  tags: 'Copa do Brasil Campeão Brasileiro Série B Campeonato Catarinense'
},
{
  titulo: 'Atlético Clube Goianiense',
  descricao: 'O Atlético Goianiense, fundado em 1937, é um dos clubes mais tradicionais de Goiás. O Dragão já conquistou títulos nacionais, como a Série B, e tem uma torcida fiel no centro-oeste do Brasil.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Atl%C3%A9tico_Clube_Goianiense',
  link_siteofc: 'https://www.atleticogoianiense.com.br/',
  link_insta: 'https://www.instagram.com/acgoianiense/',
  estado: 'Goiás',
  tags: 'Campeão Brasileiro Série B Campeonato Goiano'
},
{
  titulo: 'Goiás Esporte Clube',
  descricao: 'O Goiás Esporte Clube, fundado em 1943, é o clube mais tradicional do estado de Goiás, com uma história de conquistas no cenário regional e nacional.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Goi%C3%A1s_Esporte_Clube',
  link_siteofc: 'https://www.goiasec.com.br/',
  link_insta: 'https://www.instagram.com/goiasoficial/',
  estado: 'Goiás',
  tags: 'Campeão Brasileiro Série B Copa Verde Campeonato Goiano'
},
{
  titulo: 'Coritiba Foot Ball Club',
  descricao: 'Fundado em 1909, o Coritiba é um dos clubes mais tradicionais do Paraná, com uma rica história de títulos regionais e nacionais.',
  link_wiki: 'https://pt.wikipedia.org/wiki/Coritiba_Foot_Ball_Club',
  link_siteofc: 'https://www.coritiba.com.br/',
  link_insta: 'https://www.instagram.com/coritiba/',
  estado: 'Paraná',
  tags: 'Campeão Brasileiro Copa do Brasil Campeonato Paranaense'
},

];
