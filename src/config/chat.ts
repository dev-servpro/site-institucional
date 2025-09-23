// Configurações do Chat
export const chatConfig = {
  // WhatsApp
  whatsapp: {
    phoneNumber: "5585987654321", // Substitua pelo seu número (formato: 55 + DDD + número)
    defaultMessage: "Olá! Gostaria de mais informações sobre os produtos da Rede ServPro.",
    businessName: "Rede ServPro",
    businessHours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
  },

  // Live Chat
  liveChat: {
    enabled: true,
    autoGreeting: true,
    showQuickReplies: true,
    typingDelay: 1500, // milissegundos
    businessEmail: "contato@servpro.com.br"
  },

  // Estilo e Comportamento
  appearance: {
    position: "bottom-right" as const,
    theme: "primary" as const,
    showAfterDelay: 2000, // milissegundos
    hideOnMobile: false,
    hideOnPages: ["/admin", "/dashboard"] // páginas onde o chat não aparece
  }
};

// Mensagens automáticas do bot
export const botMessages = {
  greeting: "Olá! 👋 Bem-vindo à Rede ServPro! Como posso te ajudar hoje?",
  
  responses: {
    products: "Temos uma ampla variedade de produtos! 🛍️ Você pode ver nosso catálogo completo em: /produtos. Qual categoria te interessa mais?",
    budget: "Claro! 💰 Para solicitar um orçamento personalizado, preciso de algumas informações. Posso te conectar com um de nossos vendedores especializados.",
    installation: "Oferecemos serviços de instalação profissional! 🔧 Nossos técnicos são certificados e garantem a melhor qualidade. Quer agendar uma visita?",
    contact: "Perfeito! 👨‍💼 Vou conectar você com um de nossos atendentes especializados. Aguarde um momento...",
    default: "Entendi! 😊 Para te ajudar melhor, posso conectar você com um de nossos especialistas. Ou prefere que eu te ajude com alguma informação específica?"
  },

  quickReplies: [
    "Ver produtos",
    "Falar com atendente", 
    "Solicitar orçamento",
    "Informações sobre instalação",
    "Horário de funcionamento",
    "Localização das lojas"
  ]
};

// Configurações para diferentes tipos de chat
export const chatProviders = {
  whatsapp: {
    name: "WhatsApp Business",
    icon: "📱",
    description: "Chat direto via WhatsApp"
  },
  
  livechat: {
    name: "Live Chat",
    icon: "💬", 
    description: "Chat ao vivo com atendentes"
  },

  tawkto: {
    name: "Tawk.to",
    icon: "🎯",
    description: "Chat profissional gratuito",
    setupUrl: "https://www.tawk.to"
  },

  intercom: {
    name: "Intercom",
    icon: "🚀",
    description: "Plataforma de chat avançada",
    setupUrl: "https://www.intercom.com"
  }
};
