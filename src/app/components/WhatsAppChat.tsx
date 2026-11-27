"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppChatProps {
  phoneNumber?: string;
  defaultMessage?: string;
  businessName?: string;
}

export default function WhatsAppChat({
  phoneNumber = "5585987654321", // Substitua pelo seu número
  defaultMessage = "Olá! Gostaria de mais informações sobre os produtos.",
  businessName = "Rede ServPro"
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handlePhoneCall = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:contato@servpro.com.br', '_blank');
  };

  return (
    <>
      {/* Botão Flutuante Principal */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200"
            >
              {/* Header */}
              <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{businessName}</h3>
                    <p className="text-green-100 text-sm">Online agora</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Olá! 👋 Como podemos te ajudar hoje?
                  </p>
                  
                  {/* Message Input */}
                  <div className="space-y-3">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="w-full p-3 border border-gray-200 rounded-lg resize-none text-sm"
                      rows={3}
                    />
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar no WhatsApp
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handlePhoneCall}
                          className="flex-1 text-xs"
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          Ligar
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleEmail}
                          className="flex-1 text-xs"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
