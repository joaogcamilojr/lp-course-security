import { BRAND, CONTACT, PRICING, ROUTES } from "../constants";

export const siteConfig = {
  name: BRAND.name,
  title: BRAND.title,
  description: BRAND.description,
  links: {
    whatsapp: CONTACT.whatsapp,
    enroll: ROUTES.checkout,
    waitlist: ROUTES.waitlist,
  },
};

export const heroContent = {
  status: "[ STATUS: MATRÍCULAS ABERTAS ]",
  headline:
    "Pare de escrever código vulnerável e torne-se o Dev que as empresas disputam.",
  subtext:
    "Domine a segurança em todas as fases do SDLC, do desenvolvimento ao deploy, e previna vazamentos de dados com o método DevSec Pro.",
  ctaText: "Quero Garantir Minha Vaga (Lote Promocional)",
  features: [
    { icon: "verified_user", label: "Certificado MEC" },
    { icon: "shield_with_heart", label: "Acesso Vitalício" },
    { icon: "code", label: "Projetos Práticos" },
  ],
};

export const problemsContent = {
  tag: "// Vulnerabilidade Detectada",
  title: "O Custo Invisível da Insegurança",
  items: [
    {
      icon: "report_gmailerrorred",
      title: "Vazamentos de Dados",
      description:
        "Multas pesadas da LGPD e danos irreversíveis à reputação da sua empresa ou cliente.",
    },
    {
      icon: "database_off",
      title: "Ataques Críticos",
      description:
        "SQL Injection e Broken Access Control ainda são as principais portas de entrada para hackers.",
    },
    {
      icon: "timer",
      title: "Risco de Carreira",
      description:
        "O desenvolvedor que ignora segurança está se tornando obsoleto e um risco para os times técnicos.",
    },
    {
      icon: "security_update_warning",
      title: "Insegurança em Deploy",
      description:
        "Deployar código sem scans de vulnerabilidade é como deixar a porta da frente aberta à noite.",
    },
  ],
};

export const modulesContent = {
  tag: "// O Protocolo Sentinel",
  title: "A Jornada DevSec Pro",
  description:
    "Do zero ao especialista: Um currículo desenhado para integrar segurança nativamente no seu workflow de desenvolvimento.",
  items: [
    {
      id: "01",
      category: "Foundation Layer",
      title: "Módulo 1: Fundamentos de AppSec & SDLC Seguro.",
      description:
        "Entenda como a segurança se encaixa no ciclo de vida de desenvolvimento moderno.",
    },
    {
      id: "02",
      category: "Threat Defense",
      title: "Módulo 2: Dominando o OWASP Top 10 (Ataque e Defesa).",
      description:
        "Aprenda a explorar e mitigar as 10 vulnerabilidades mais críticas da web.",
    },
    {
      id: "03",
      category: "Automation CI/CD",
      title: "Módulo 3: Segurança em CI/CD & Scan de Vulnerabilidades.",
      description:
        "Automatize ferramentas SAST, DAST e SCA no seu pipeline de deploy.",
    },
    {
      id: "04",
      category: "Identity Access",
      title: "Módulo 4: Autenticação Segura com JWT e OAuth 2.0.",
      description:
        "Implemente fluxos de autorização robustos sem comprometer a experiência.",
    },
    {
      id: "05",
      category: "Advanced Offensive",
      title: "Módulo 5: Pentest para Desenvolvedores.",
      description:
        "Pense como um atacante. Aprenda as técnicas de testes de invasão para encontrar brechas antes que outros encontrem.",
    },
  ],
};

export const instructorContent = {
  tag: "// O Especialista",
  title: "Quem vai te guiar",
  name: 'Rodrigo "Sentinel" Silva',
  role: "Arquiteto de Segurança",
  bio: "Arquiteto de Segurança com mais de 15 anos de experiência protegendo sistemas críticos em fintechs e empresas da Fortune 500.",
  quote:
    '"Meu objetivo é transformar a maneira como você escreve código. Segurança não pode ser um pensamento tardio; deve ser o alicerce de todo software de alta qualidade."',
  stats: [
    { value: "50k+", label: "Alunos Impactados" },
    { value: "15y+", label: "Experiência Real" },
  ],
  credentials: ["CISSP | CEH"],
};

export const testimonialsContent = {
  title: "Eles já elevaram seu nível técnico",
  items: [
    {
      name: "Marcos André",
      role: "Tech Lead @ Global Cloud",
      content:
        '"O módulo de CI/CD mudou completamente como meu time trabalha. Hoje, não deixamos passar uma linha de código sem scan de segurança."',
      stars: 5,
    },
    {
      name: "Julia Fontes",
      role: "Senior Dev @ Fintech X",
      content:
        '"Eu achava que sabia JWT até fazer este curso. O DevSec Pro vai fundo na implementação prática e nos ataques que ninguém te conta."',
      stars: 5,
      featured: true,
    },
    {
      name: "Ricardo Lima",
      role: "Software Architect @ Retail Cloud",
      content:
        '"O conteúdo de Pentest é insano. Me deu uma perspectiva de segurança que 99% dos desenvolvedores não têm."',
      stars: 5,
    },
  ],
};

export const pricingContent = {
  badge: "Lote de Lançamento",
  title: "Acesso Completo DevSec Pro",
  oldPrice: PRICING.oldPrice,
  installments: PRICING.installments,
  cashPrice: PRICING.cashPrice,
  benefitsLeft: [
    "Acesso a todos os 5 módulos principais",
    "Certificado de Especialista em AppSec",
    "Comunidade fechada de alunos",
  ],
  benefitsRight: [
    "BÔNUS: Guia de Auditoria Interna",
    "BÔNUS: Checklist Deploy Seguro",
    "Aulas ao vivo bimestrais",
  ],
  urgency: PRICING.urgency,
  cta: "Garantir Minha Vaga Agora",
  guarantee: "Pagamento Seguro & 7 dias de garantia incondicional",
};

export const faqContent = {
  title: "Perguntas Frequentes",
  items: [
    {
      question: "Preciso saber Java, Python ou Node?",
      answer:
        "Sim, é recomendado ter conhecimento básico em pelo menos uma dessas linguagens. No entanto, os conceitos de DevSec Pro são universais. Utilizamos exemplos poliglota para que você possa aplicar em qualquer stack tecnológica.",
    },
    {
      question: "Quanto tempo dura o acesso?",
      answer:
        "O acesso ao curso e a todas as futuras atualizações é vitalício. Você pode estudar no seu ritmo e revisar o conteúdo sempre que precisar enfrentar um novo desafio de segurança.",
    },
    {
      question: "O certificado é reconhecido?",
      answer:
        "Sim. Emitimos um certificado de conclusão com carga horária de 80 horas, reconhecido em todo o território nacional e aceito por grandes empresas como prova de especialização técnica em Segurança de Aplicações.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "O suporte é realizado diretamente por mim (Ícaro) e minha equipe de especialistas através de nossa plataforma e do canal exclusivo no Discord.",
    },
  ],
};

export const checkoutContent = {
  title: "Finalizar Inscrição | DevSec Pro",
  header: "Protocolo de Acesso: Verificação de Operador",
  subheader:
    "Preencha os dados abaixo para provisionar sua conta de elite no treinamento.",
  form: {
    personal: "Dados de Identificação",
    payment: "Processamento de Créditos",
    cta: "Ativar Protocolo de Acesso",
    security: "Conexão Criptografada SSL 256-bit",
  },
  orderSummary: {
    title: "Resumo do Pedido",
    item: "Treinamento DevSec Pro (Acesso Vitalício)",
    bonus1: "Bonus: Lab de Offensive Security",
    bonus2: "Bonus: Comunidade de Elite",
    total: "12x R$ 97,14",
  },
};

export const courseThanksContent = {
  title: "Acesso Garantido | DevSec Pro",
  header: "Protocolo Ativado com Sucesso!",
  subheader:
    "Suas credenciais de acesso foram enviadas para o e-mail cadastrado.",
  steps: [
    {
      id: "01",
      title: "Verifique o E-mail",
      desc: "Procure por 'Bem-vindo ao DevSec Pro' em sua caixa de entrada.",
      icon: "mail",
    },
    {
      id: "02",
      title: "Entre no Discord",
      desc: "Conecte-se com a rede de inteligência e especialistas.",
      icon: "groups",
    },
    {
      id: "03",
      title: "Inicie o Módulo 01",
      desc: "O briefing inicial já está disponível em sua plataforma.",
      icon: "play_circle",
    },
  ],
  cta: "Ir para a Área de Membros",
};
