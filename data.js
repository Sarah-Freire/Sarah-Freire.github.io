// Todo o conteúdo do site fica aqui, em português (pt) e inglês (en).
// index.html e main.js não precisam ser alterados para trocar textos ou casos.
// Campos vazios ("") não aparecem no site. Use *asteriscos* para destacar uma palavra.

window.PORTFOLIO = {
  // Dados que não mudam com o idioma.
  comum: {
    nome: "Sarah Freire",
    nomeCompleto: "Sarah Peixoto Rodrigues Freire",
    foto: "foto-sarah.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/sarah-freiree/",
      github: "https://github.com/Sarah-Freire",
      email: "", // ex.: "voce@exemplo.com" (fica visível publicamente)
      cv: "", // ex.: "cv-sarah-freire.pdf" (coloque o PDF na mesma pasta)
    },
    credenciais: ["MIT", "Hospital Israelita Albert Einstein", "ISARIC · Oxford", "IESE Business School", "CNPEM", "ICN2 · Barcelona"],
    // Projetos com código aberto no GitHub (seção "Projetos"). Textos em pt e en.
    // Etiquetas podem ser um texto único ou ["português", "inglês"].
    projetos: [
      {
        repo: "Sarah-Freire/GP-comparative-analysis", ano: "2024",
        tags: ["Python", "GPyTorch", "Pyro", "Optuna", "SHAP", "CodeCarbon"],
        pt: { titulo: "IA para cardiopatia com pegada de carbono", texto: "Pipeline em seis etapas: análise exploratória, três implementações de Processos Gaussianos, otimização com Optuna, 16 modelos alternativos, SHAP e medição de emissões.", autoria: "Líder do projeto, com Alice V. K. Ferreira" },
        en: { titulo: "Heart disease AI with a carbon footprint", texto: "Six-stage pipeline: exploratory analysis, three Gaussian Process implementations, Optuna tuning, 16 alternative models, SHAP and emissions tracking.", autoria: "Project lead, with Alice V. K. Ferreira" },
      },
      {
        repo: "Sarah-Freire/Trabalho-RNAG", ano: "2023",
        tags: [["Algoritmos genéticos", "Genetic algorithms"], ["Otimização", "Optimization"], "pandas"],
        pt: { titulo: "Nutrella: dietas por algoritmo genético", texto: "Monta dietas com alimentos brasileiros, maximizando o valor nutricional dentro do limite calórico calculado pela equação de Harris-Benedict.", autoria: "Equipe de 4 pessoas" },
        en: { titulo: "Nutrella: diets by genetic algorithm", texto: "Builds diets from Brazilian foods, maximizing nutritional value within the calorie limit given by the Harris-Benedict equation.", autoria: "Team of 4" },
      },
      {
        repo: "Sarah-Freire/Estudo-do-diabetes", ano: "2022",
        tags: ["scikit-learn", ["Regressão", "Regression"], "Clustering", "PCA"],
        pt: { titulo: "Diabetes na América do Sul", texto: "Regressão, PCA e clustering para estudar a prevalência de diabetes no Brasil, no Chile e na Argentina com dados do Banco Mundial e da FAO.", autoria: "Equipe de 4 pessoas" },
        en: { titulo: "Diabetes in South America", texto: "Regression, PCA and clustering to study diabetes prevalence in Brazil, Chile and Argentina using World Bank and FAO data.", autoria: "Team of 4" },
      },
      {
        repo: "Sarah-Freire/RNAG", ano: "2023",
        tags: ["Python", ["Redes neurais", "Neural networks"], "DEAP"],
        pt: { titulo: "Redes neurais do zero", texto: "Rede neural com grafo computacional e retropropagação implementados à mão, e experimentos com algoritmos genéticos, como o problema do caixeiro viajante.", autoria: "Individual" },
        en: { titulo: "Neural networks from scratch", texto: "A neural network with a hand-built computational graph and backpropagation, plus genetic algorithm experiments such as the traveling salesman problem.", autoria: "Individual" },
      },
      {
        repo: "viyuetuki/CineticaQuimica", ano: "2023",
        tags: [["Simulação", "Simulation"], "Python", "Matplotlib"],
        pt: { titulo: "Simulações de cinética química", texto: "Simulações de colisão de partículas para estudar a ordem de reação, com curvas de concentração e ajustes de primeira e segunda ordem.", autoria: "Dupla" },
        en: { titulo: "Chemical kinetics simulations", texto: "Particle collision simulations to study reaction order, with concentration curves and first- and second-order fits.", autoria: "Pair project" },
      },
    ],
    // Dados reais do TCC (execuções em CPU, medidas com CodeCarbon).
    // [nome em português, nome em inglês, grupo, acurácia, gramas de CO₂eq]
    grafico: {
      repo: "https://github.com/Sarah-Freire/GP-comparative-analysis",
      destaques: [3, 9], // índices dos pontos com rótulo fixo
      pontos: [
        ["Processo Gaussiano (scikit-learn)", "Gaussian Process (scikit-learn)", "gp", 0.852, 0.08469],
        ["Processo Gaussiano (GPyTorch)", "Gaussian Process (GPyTorch)", "gp", 0.842, 0.02604],
        ["Processo Gaussiano (Pyro)", "Gaussian Process (Pyro)", "gp", 0.731, 0.04994],
        ["Processo Gaussiano otimizado", "Tuned Gaussian Process", "gp", 0.852, 32.415],
        ["Processo Gaussiano otimizado (GPyTorch)", "Tuned Gaussian Process (GPyTorch)", "gp", 0.849, 5.1184],
        ["k-NN", "k-NN", "alt", 0.805, 0.001367],
        ["k-NN otimizado", "Tuned k-NN", "alt", 0.828, 0.02453],
        ["Radius Neighbors", "Radius Neighbors", "alt", 0.552, 0.001045],
        ["Radius Neighbors otimizado", "Tuned Radius Neighbors", "alt", 0.808, 0.04775],
        ["Regressão logística", "Logistic regression", "alt", 0.845, 0.001272],
        ["Regressão logística otimizada", "Tuned logistic regression", "alt", 0.841, 0.2060],
        ["Árvore de decisão", "Decision tree", "alt", 0.747, 0.001141],
        ["Árvore de decisão otimizada", "Tuned decision tree", "alt", 0.798, 0.1997],
        ["Floresta aleatória", "Random forest", "alt", 0.808, 0.009021],
        ["Floresta aleatória otimizada", "Tuned random forest", "alt", 0.815, 1.7566],
        ["SVM (SVC)", "SVM (SVC)", "alt", 0.831, 0.001759],
        ["SVM (SVC) otimizado", "Tuned SVM (SVC)", "alt", 0.838, 0.1923],
        ["SVM (NuSVC)", "SVM (NuSVC)", "alt", 0.828, 0.001613],
        ["SVM (NuSVC) otimizado", "Tuned SVM (NuSVC)", "alt", 0.848, 0.1647],
        ["SVM linear", "Linear SVM", "alt", 0.845, 0.001017],
        ["SVM linear otimizado", "Tuned linear SVM", "alt", 0.851, 0.3173],
      ],
    },
  },

  pt: {
    locale: "pt-BR",
    descricao: "Sarah Freire: dados, inovação em saúde e estratégia.",
    trocar: ["EN", "View in English"],
    nav: [["#trago", "O que eu trago"], ["#casos", "Casos"], ["#projetos", "Projetos"], ["#sobre", "Sobre"], ["#contato", "Contato"]],
    tese: "Transformo dados complexos em *decisões* claras.",
    lede:
      "Cientista de dados e mestranda no Einstein com a USP. Uno rigor técnico, visão de negócio e " +
      "conhecimento do setor de saúde, com resultados reconhecidos pelo MIT e pela rede IESE.",
    verCasos: "Ver casos",
    legendaFoto: "São Paulo, Brasil",
    credLabel: "Experiências com",

    trago: {
      eyebrow: "O que eu trago",
      titulo: "Quatro competências que raramente aparecem juntas",
      itens: [
        ["Rigor analítico", "Estatística, machine learning e modelagem preditiva aplicados a dados clínicos reais, do TCC ao mestrado no Einstein.", "Média 9,21 no bacharelado · Bolsista CAPES"],
        ["Visão de negócio", "Análise de mercado, viabilidade financeira e go-to-market construídos sob prazo e apresentados a executivos.", "3 de 5 desafios corporativos vencidos (Microsoft, Accenture, Swee)"],
        ["Conhecimento de saúde", "Entendo o contexto clínico, a privacidade dos dados e a jornada do paciente, o que acelera qualquer projeto no setor.", "2º lugar no MIT-Einstein Datathon · 3º no MIT Hacking Medicine"],
        ["Liderança de equipes", "Coordeno pessoas de áreas e países diferentes até a entrega, com comunicação clara em português, inglês e francês.", "Grande Prêmio iGEM como líder de área · Mentora de 8 participantes"],
      ],
    },

    casos: {
      eyebrow: "Casos",
      titulo: "Três problemas, três formas de gerar valor com dados",
      rotulos: { desafio: "Desafio", fiz: "O que fiz", resultado: "Resultado", porque: "O que isso mostra" },
      lista: [
        {
          titulo: "Quanto custa um ponto de acurácia?",
          meta: ["TCC · Ilum Escola de Ciência", "2024"],
          premio: "Menção Honrosa, Prêmio Paulo Gontijo",
          desafio: "Modelos de IA para diagnóstico são comparados pela acurácia, mas cada um tem um custo de energia e carbono. Qual deles realmente vale a pena?",
          fiz: "Liderei, com Alice Vitti Kageyama Ferreira, a comparação de 21 configurações de modelos para classificar doença arterial coronariana, medindo acurácia e emissões e explicando as previsões com SHAP.",
          resultado: "A regressão logística ficou a 0,7 ponto percentual do melhor modelo emitindo cerca de 25 mil vezes menos CO₂.",
          porque: "Sei avaliar custo e benefício com dados, em vez de escolher automaticamente a opção mais sofisticada.",
          link: "Ver código e análise",
          visual: "grafico",
        },
        {
          titulo: "Dados de saúde que circulam sem expor pacientes",
          meta: ["MIT-Einstein Datathon in Healthcare", "Set 2025"],
          premio: "2º lugar",
          desafio: "Dados de saúde pública são essenciais para pesquisa e gestão, mas compartilhá-los sem proteção coloca pacientes em risco.",
          fiz: "Em equipe, desenvolvemos uma solução digital de segurança e anonimização desses dados, apresentada a avaliadores do MIT e do Hospital Israelita Albert Einstein.",
          resultado: "2º lugar entre as equipes do datathon.",
          porque: "Sei transformar um problema de privacidade em proposta de produto, uma habilidade central em inovação em saúde.",
          visual: "numero",
          numero: "2º",
          numeroTexto: "lugar no MIT-Einstein Datathon",
          numeroItens: ["Segurança e anonimização de dados", "Solução digital desenvolvida em equipe", "São Paulo · 2025"],
        },
        {
          titulo: "Recomendações para empresas reais, com prazo curto",
          meta: ["AESE e ISE Business School (rede IESE)", "2025 e 2026"],
          premio: "3 de 5 desafios vencidos",
          desafio: "Empresas como Microsoft e Accenture propuseram desafios reais de negócio a equipes internacionais, com pouco tempo para análise.",
          fiz: "Construí recomendações com colegas de Portugal, Itália e Brasil. Na Women in Business Case Competition, desenvolvi análise de mercado, viabilidade financeira e plano de go-to-market, com pitch para executivos seniores.",
          resultado: "Equipe vencedora de 3 dos 5 desafios corporativos da AESE. Em 2026, fui selecionada para mentorar duas equipes da competição.",
          porque: "Estruturo problemas ambíguos e chego a uma recomendação que a liderança consegue aprovar.",
          visual: "numero",
          numero: "3/5",
          numeroTexto: "desafios corporativos vencidos",
          numeroItens: ["Microsoft · Accenture · Swee", "Equipe de três países", "Mentora de 8 participantes em 2026"],
        },
      ],
    },

    outros: {
      titulo: "Outros destaques",
      itens: [
        ["3º lugar em IA generativa", "MIT Hacking Medicine, com solução para doença hepática (MASH)"],
        ["Grande Prêmio iGEM Design League", "Como líder de Human Practices da equipe do CNPEM"],
        ["Pesquisa em Barcelona", "Machine learning para detectar metais pesados na água, no ICN2"],
        ["Rede com mais de 164 membros", "Criei o canal de oportunidades entre estudantes e ex-alunos da Ilum"],
      ],
    },

    projetos: {
      eyebrow: "Projetos",
      titulo: "Código aberto que você pode explorar",
      abrir: "Ver no GitHub",
      todos: "Ver todos os repositórios no GitHub",
    },

    sobre: {
      eyebrow: "Sobre",
      texto: [
        "Comecei pela ciência: medalhas em olimpíadas de matemática e astronomia, o bacharelado em Ciência e " +
          "Tecnologia na Ilum (CNPEM) e, hoje, o mestrado em Ciências da Saúde no Einstein, onde uso machine " +
          "learning para apoiar decisões clínicas em obesidade.",
        "No caminho, percebi que um bom modelo só gera impacto quando vira decisão. Por isso fui buscar " +
          "competições de negócios na rede IESE, datathons com o MIT e o Einstein e um estágio em ciência de " +
          "dados em um projeto internacional de pesquisa clínica.",
        "Agora quero levar essa combinação para projetos estratégicos, especialmente em saúde.",
      ],
      fatos: [
        ["Hoje", "Mestrado em Ciências da Saúde, Einstein / INOVA USP · Bolsista CAPES"],
        ["Estágio", "Ciência de dados em pesquisa clínica internacional, ISARIC (Oxford / PUC-Rio)"],
        ["Formação", "Ciência e Tecnologia, Ilum / CNPEM"],
        ["Idiomas", "Português, inglês (C1, TOEFL 105), francês"],
      ],
    },

    penso: {
      eyebrow: "Como eu trabalho",
      titulo: "Toda previsão vem com incerteza. Decidir bem é saber o tamanho dela.",
      legenda: "Clique para adicionar dados e veja a incerteza encolher.",
      recomecar: "Recomeçar",
      canvas: "previsão ± 2σ · {n} observações",
      aria: "Regressão por Processo Gaussiano: a linha é a previsão e a faixa sombreada mostra a incerteza. Clique para adicionar observações.",
      principios: [
        ["Estruturo antes de calcular", "Divido o problema em perguntas que os dados conseguem responder, como nos casos da rede IESE."],
        ["Quantifico o trade-off", "Precisão, custo e risco entram na mesma conta, como no TCC."],
        ["Termino com uma recomendação", "Uma análise só está pronta quando vira uma decisão que alguém pode aprovar."],
      ],
    },

    pesquisa: {
      eyebrow: "Pesquisa atual",
      status: "Em preparação para publicação",
      titulo: "Machine learning para apoiar decisões clínicas em obesidade",
      onde: "Mestrado · CSBL, Einstein / INOVA USP",
      texto: "Uso ciência de dados em grandes bases clínicas e machine learning para apoiar a tomada de decisão no cuidado da obesidade. Os resultados serão compartilhados aqui depois da publicação.",
    },

    contato: {
      eyebrow: "Contato",
      titulo: "Vamos conversar?",
      texto: "Busco oportunidades em analytics, consultoria e inovação em saúde. Se o seu time precisa de alguém que conecte dados, saúde e negócio, vou gostar de conversar.",
    },

    grafico: {
      titulo: "Acurácia × carbono emitido em 21 configurações",
      legenda: ["Processos Gaussianos", "Outros modelos"],
      eixoX: "CO₂ por execução (escala log) →",
      eixoY: "Acurácia ↑",
      tabela: "Ver os dados em tabela",
      colunas: ["Modelo", "Acurácia", "CO₂"],
      curtos: ["PG otimizado", "Reg. logística"],
      fonte: "Fonte: repositório GP-comparative-analysis. Uma execução por configuração, em CPU, medida com CodeCarbon.",
    },
  },

  en: {
    locale: "en-US",
    descricao: "Sarah Freire: data, healthcare innovation and strategy.",
    trocar: ["PT", "Ver em português"],
    nav: [["#trago", "What I bring"], ["#casos", "Cases"], ["#projetos", "Projects"], ["#sobre", "About"], ["#contato", "Contact"]],
    tese: "I turn complex data into clear *decisions*.",
    lede:
      "Data scientist and master's student at Einstein and the University of São Paulo. I combine technical " +
      "rigor, business sense and healthcare knowledge, with results recognized by MIT and the IESE network.",
    verCasos: "See cases",
    legendaFoto: "São Paulo, Brazil",
    credLabel: "Experience with",

    trago: {
      eyebrow: "What I bring",
      titulo: "Four skills that rarely come together",
      itens: [
        ["Analytical rigor", "Statistics, machine learning and predictive modeling applied to real clinical data, from my thesis to my master's at Einstein.", "GPA 9.21/10 · CAPES scholarship"],
        ["Business sense", "Market analysis, financial feasibility and go-to-market plans built under tight deadlines and presented to executives.", "Won 3 of 5 corporate challenges (Microsoft, Accenture, Swee)"],
        ["Healthcare knowledge", "I understand clinical context, data privacy and the patient journey, which speeds up any project in the sector.", "2nd place, MIT-Einstein Datathon · 3rd, MIT Hacking Medicine"],
        ["Team leadership", "I coordinate people across disciplines and countries through delivery, communicating clearly in Portuguese, English and French.", "iGEM Grand Prize as division lead · Mentor to 8 participants"],
      ],
    },

    casos: {
      eyebrow: "Cases",
      titulo: "Three problems, three ways to create value with data",
      rotulos: { desafio: "Challenge", fiz: "What I did", resultado: "Result", porque: "What it shows" },
      lista: [
        {
          titulo: "What does one point of accuracy cost?",
          meta: ["Bachelor's thesis · Ilum School of Science", "2024"],
          premio: "Honorable Mention, Paulo Gontijo Award",
          desafio: "AI models for diagnosis are compared by accuracy, but each one carries an energy and carbon cost. Which one is actually worth it?",
          fiz: "Together with Alice Vitti Kageyama Ferreira, I led a comparison of 21 model configurations for classifying coronary artery disease, measuring accuracy and emissions and explaining predictions with SHAP.",
          resultado: "Logistic regression came within 0.7 percentage points of the best model while emitting about 25,000 times less CO₂.",
          porque: "I weigh costs and benefits with data instead of defaulting to the most sophisticated option.",
          link: "See code and analysis",
          visual: "grafico",
        },
        {
          titulo: "Health data that can be shared without exposing patients",
          meta: ["MIT-Einstein Datathon in Healthcare", "Sep 2025"],
          premio: "2nd place",
          desafio: "Public health data is essential for research and management, but sharing it without protection puts patients at risk.",
          fiz: "As a team, we built a digital solution for securing and anonymizing this data, presented to judges from MIT and Hospital Israelita Albert Einstein.",
          resultado: "2nd place among the datathon teams.",
          porque: "I can turn a privacy problem into a product proposal, a core skill in healthcare innovation.",
          visual: "numero",
          numero: "2nd",
          numeroTexto: "place at the MIT-Einstein Datathon",
          numeroItens: ["Data security and anonymization", "Digital solution built as a team", "São Paulo · 2025"],
        },
        {
          titulo: "Recommendations for real companies, on a short deadline",
          meta: ["AESE and ISE Business School (IESE network)", "2025 and 2026"],
          premio: "Won 3 of 5 challenges",
          desafio: "Companies such as Microsoft and Accenture set real business challenges for international teams, with little time for analysis.",
          fiz: "I built recommendations with peers from Portugal, Italy and Brazil. At the Women in Business Case Competition, I developed market analysis, financial feasibility and a go-to-market plan, pitched to senior executives.",
          resultado: "Our team won 3 of the 5 corporate challenges at AESE. In 2026, I was selected to mentor two teams in the competition.",
          porque: "I structure ambiguous problems and reach a recommendation that leadership can approve.",
          visual: "numero",
          numero: "3/5",
          numeroTexto: "corporate challenges won",
          numeroItens: ["Microsoft · Accenture · Swee", "Team from three countries", "Mentor to 8 participants in 2026"],
        },
      ],
    },

    outros: {
      titulo: "Other highlights",
      itens: [
        ["3rd place in generative AI", "MIT Hacking Medicine, with a solution for liver disease (MASH)"],
        ["iGEM Design League Grand Prize", "As Human Practices lead for the CNPEM team"],
        ["Research in Barcelona", "Machine learning to detect heavy metals in water, at ICN2"],
        ["Network of 164+ members", "Created an opportunity channel for Ilum students and alumni"],
      ],
    },

    projetos: {
      eyebrow: "Projects",
      titulo: "Open-source work you can explore",
      abrir: "View on GitHub",
      todos: "See all repositories on GitHub",
    },

    sobre: {
      eyebrow: "About",
      texto: [
        "I started in science: medals in math and astronomy olympiads, a bachelor's in Science and Technology " +
          "at Ilum (CNPEM) and now a master's in Health Sciences at Einstein, where I use machine learning to " +
          "support clinical decisions in obesity care.",
        "Along the way, I learned that a good model only has impact when it becomes a decision. That is why I " +
          "joined business case competitions in the IESE network, datathons with MIT and Einstein, and a data " +
          "science internship in an international clinical research project.",
        "Now I want to bring this combination to strategic projects, especially in healthcare.",
      ],
      fatos: [
        ["Now", "Master's in Health Sciences, Einstein / INOVA USP · CAPES scholar"],
        ["Internship", "Data science in international clinical research, ISARIC (Oxford / PUC-Rio)"],
        ["Education", "B.Sc. Science and Technology, Ilum / CNPEM"],
        ["Languages", "Portuguese, English (C1, TOEFL 105), French"],
      ],
    },

    penso: {
      eyebrow: "How I work",
      titulo: "Every prediction comes with uncertainty. Deciding well means knowing how much.",
      legenda: "Click to add data and watch the uncertainty shrink.",
      recomecar: "Reset",
      canvas: "prediction ± 2σ · {n} observations",
      aria: "Gaussian Process regression: the line is the prediction and the shaded band shows uncertainty. Click to add observations.",
      principios: [
        ["Structure before calculating", "I break the problem into questions data can answer, as in the IESE case competitions."],
        ["Quantify the trade-off", "Accuracy, cost and risk go into the same equation, as in my thesis."],
        ["End with a recommendation", "An analysis is finished only when it becomes a decision someone can approve."],
      ],
    },

    pesquisa: {
      eyebrow: "Current research",
      status: "Manuscript in preparation",
      titulo: "Machine learning to support clinical decisions in obesity",
      onde: "Master's · CSBL, Einstein / INOVA USP",
      texto: "I apply data science to large clinical datasets and machine learning to support decision-making in obesity care. Results will be shared here after publication.",
    },

    contato: {
      eyebrow: "Contact",
      titulo: "Let's talk.",
      texto: "I'm looking for opportunities in analytics, consulting and healthcare innovation. If your team needs someone who connects data, healthcare and business, I'd love to talk.",
    },

    grafico: {
      titulo: "Accuracy × carbon emitted across 21 configurations",
      legenda: ["Gaussian Processes", "Other models"],
      eixoX: "CO₂ per run (log scale) →",
      eixoY: "Accuracy ↑",
      tabela: "View data as a table",
      colunas: ["Model", "Accuracy", "CO₂"],
      curtos: ["Tuned GP", "Logistic reg."],
      fonte: "Source: GP-comparative-analysis repository. One run per configuration, on CPU, measured with CodeCarbon.",
    },
  },
};
