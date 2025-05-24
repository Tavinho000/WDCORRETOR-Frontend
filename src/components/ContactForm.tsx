import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = document.createElement("form");
    form.action = "https://formsubmit.co/davidwesleiadv@gmail.com";
    form.method = "POST";
    form.style.display = "none";

    const appendField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    appendField("Nome", formData.name);
    appendField("Email", formData.email);
    appendField("Telefone", formData.phone);
    appendField("Mensagem", formData.message);
    appendField("_captcha", "false");
    appendField("_next", window.location.href); // permanece na página

    document.body.appendChild(form);
    form.submit();

    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome completo
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>

      <div>
        <Button 
          type="submit" 
          className="w-full bg-rural-green hover:bg-green-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </div>
    </form>
  );
}
