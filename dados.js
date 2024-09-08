let estados = [
    {
        titulo: "Roraima",
        descricao: "Roraima é um estado brasileiro localizado na Região Norte, conhecido por ser o mais setentrional do país. Sua capital é Boa Vista, e suas fronteiras se estendem por Venezuela e Guiana.",
        link: "https://pt.wikipedia.org/wiki/Roraima",
        tags: "norte"
    },
    {
        titulo: "Tocantins",
        descricao: "Tocantins é um estado brasileiro localizado na Região Norte, conhecido por suas belezas naturais e pela produção de grãos. Sua capital é Palmas.",
        link: "https://pt.wikipedia.org/wiki/Tocantins",
        tags: "norte"
    },
    {
        titulo: "Rio Grande do Norte",
        descricao: "O Rio Grande do Norte é um estado brasileiro localizado na Região Nordeste, famoso por suas praias paradisíacas e pelo polo tecnológico de Natal. Sua capital é Natal.",
        link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Norte",
        tags: "nordeste rn"
    },
    {
        titulo: "Minas Gerais",
        descricao: "Minas Gerais é um estado brasileiro localizado na Região Sudeste, conhecido por sua rica história, cultura e produção mineral. Sua capital é Belo Horizonte.",
        link: "https://pt.wikipedia.org/wiki/Minas_Gerais",
        tags: "sudeste mg"
    },
    {
        titulo: "Bahia",
        descricao: "A Bahia é um estado brasileiro localizado na Região Nordeste, conhecido por sua diversidade cultural, culinária rica e pelo Carnaval de Salvador. Sua capital é Salvador.",
        link: "https://pt.wikipedia.org/wiki/Bahia",
        tags: "nordeste baia"
    },
    {
        titulo: "Rio de Janeiro",
        descricao: "O Rio de Janeiro é um estado brasileiro localizado na Região Sudeste, famoso por suas paisagens exuberantes, como o Cristo Redentor e o Pão de Açúcar. Sua capital é Rio de Janeiro.",
        link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        tags: "sudeste"
    },
    {
        titulo: "Amazonas",
        descricao: "O Amazonas é o maior estado brasileiro em extensão territorial e o que possui a maior biodiversidade do planeta. Sua capital é Manaus.",
        link: "https://pt.wikipedia.org/wiki/Amazonas",
        tags: "norte"
    },
    {
        titulo: "São Paulo",
        descricao: "São Paulo é o estado mais rico e populoso do Brasil, um importante centro industrial e financeiro. Sua capital é São Paulo.",
        link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo",
        tags: "sudeste sao paulo sp"
    },
    {
        titulo: "Acre",
        descricao: "Acre é um estado localizado na Região Norte, conhecido por sua grande área de floresta amazônica. Sua capital é Rio Branco.",
        link: "https://pt.wikipedia.org/wiki/Acre",
        tags: "norte"
    },
    {
        titulo: "Alagoas",
        descricao: "Alagoas é um estado brasileiro localizado na Região Nordeste, famoso por suas praias de águas cristalinas e lagoas. Sua capital é Maceió.",
        link: "https://pt.wikipedia.org/wiki/Alagoas",
        tags: "nordeste"
    },
    {
        titulo: "Amapá",
        descricao: "Amapá é um estado localizado no extremo norte do Brasil, conhecido por suas áreas de preservação ambiental. Sua capital é Macapá.",
        link: "https://pt.wikipedia.org/wiki/Amap%C3%A1",
        tags: "norte amapa"
    },
    {
        titulo: "Ceará",
        descricao: "O Ceará é um estado brasileiro localizado na Região Nordeste, famoso por suas praias e pelo turismo. Sua capital é Fortaleza.",
        link: "https://pt.wikipedia.org/wiki/Cear%C3%A1",
        tags: "nordeste ceara"
    },
    {
        titulo: "Distrito Federal",
        descricao: "O Distrito Federal é uma unidade federativa onde está localizada a capital do Brasil, Brasília, o centro do poder político do país.",
        link: "https://pt.wikipedia.org/wiki/Distrito_Federal_(Brasil)",
        tags: "centro-oeste df"
    },
    {
        titulo: "Espírito Santo",
        descricao: "O Espírito Santo é um estado brasileiro localizado na Região Sudeste, conhecido por suas praias e montanhas. Sua capital é Vitória.",
        link: "https://pt.wikipedia.org/wiki/Esp%C3%ADrito_Santo_(estado)",
        tags: "sudeste espirito santo es"
    },
    {
        titulo: "Goiás",
        descricao: "Goiás é um estado brasileiro localizado na Região Centro-Oeste, conhecido por sua agricultura e por ser parte da Região do Cerrado. Sua capital é Goiânia.",
        link: "https://pt.wikipedia.org/wiki/Goi%C3%A1s",
        tags: "centro-oeste goias"
    },
    {
        titulo: "Maranhão",
        descricao: "O Maranhão é um estado brasileiro localizado na Região Nordeste, famoso por suas riquezas naturais e culturais. Sua capital é São Luís.",
        link: "https://pt.wikipedia.org/wiki/Maranh%C3%A3o",
        tags: "nordeste maranhao"
    },
    {
        titulo: "Mato Grosso",
        descricao: "Mato Grosso é um estado brasileiro localizado na Região Centro-Oeste, conhecido por suas áreas de pantanal e agricultura. Sua capital é Cuiabá.",
        link: "https://pt.wikipedia.org/wiki/Mato_Grosso",
        tags: "centro-oeste mt"
    },
    {
        titulo: "Mato Grosso do Sul",
        descricao: "Mato Grosso do Sul é um estado brasileiro localizado na Região Centro-Oeste, famoso pelo turismo no Pantanal. Sua capital é Campo Grande.",
        link: "https://pt.wikipedia.org/wiki/Mato_Grosso_do_Sul",
        tags: "centro-oeste ms"
    },
    {
        titulo: "Pará",
        descricao: "Pará é um estado brasileiro localizado na Região Norte, conhecido por sua vasta área amazônica e pelo rio Amazonas. Sua capital é Belém.",
        link: "https://pt.wikipedia.org/wiki/Par%C3%A1",
        tags: "norte para"
    },
    {
        titulo: "Paraíba",
        descricao: "A Paraíba é um estado brasileiro localizado na Região Nordeste, conhecido por suas praias e pelas falésias de Cabo Branco. Sua capital é João Pessoa.",
        link: "https://pt.wikipedia.org/wiki/Para%C3%ADba",
        tags: "nordeste paraiba pb"
    },
    {
        titulo: "Paraná",
        descricao: "O Paraná é um estado brasileiro localizado na Região Sul, conhecido por suas cidades industrializadas e pela Cataratas do Iguaçu. Sua capital é Curitiba.",
        link: "https://pt.wikipedia.org/wiki/Paran%C3%A1",
        tags: "sul parana"
    },
    {
        titulo: "Pernambuco",
        descricao: "Pernambuco é um estado brasileiro localizado na Região Nordeste, famoso por suas manifestações culturais, como o frevo e o maracatu. Sua capital é Recife.",
        link: "https://pt.wikipedia.org/wiki/Pernambuco",
        tags: "nordeste"
    },
    {
        titulo: "Piauí",
        descricao: "O Piauí é um estado brasileiro localizado na Região Nordeste, conhecido por seu litoral pequeno e sua produção agrícola. Sua capital é Teresina.",
        link: "https://pt.wikipedia.org/wiki/Piau%C3%AD",
        tags: "nordeste piaui"
    },
    {
        titulo: "Rio Grande do Sul",
        descricao: "O Rio Grande do Sul é o estado mais meridional do Brasil, conhecido pela cultura gaúcha e pelos vinhedos da Serra Gaúcha. Sua capital é Porto Alegre.",
        link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul",
        tags: "sul rs"
    },
    {
        titulo: "Rondônia",
        descricao: "Rondônia é um estado brasileiro localizado na Região Norte, conhecido por sua biodiversidade e pela produção de café. Sua capital é Porto Velho.",
        link: "https://pt.wikipedia.org/wiki/Rond%C3%B4nia",
        tags: "norte rondonia"
    },
    {
        titulo: "Santa Catarina",
        descricao: "Santa Catarina é um estado brasileiro localizado na Região Sul, famoso por suas praias, montanhas e pela cultura de origem alemã. Sua capital é Florianópolis.",
        link: "https://pt.wikipedia.org/wiki/Santa_Catarina",
        tags: "sul"
    },
    {
        titulo: "Sergipe",
        descricao: "Sergipe é o menor estado brasileiro, localizado na Região Nordeste, conhecido por suas praias e pelo rio São Francisco. Sua capital é Aracaju.",
        link: "https://pt.wikipedia.org/wiki/Sergipe",
        tags: "nordeste"
    }
];
