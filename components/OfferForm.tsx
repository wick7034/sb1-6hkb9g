'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, DollarSign, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface OfferFormProps {
  domainPrice?: number;
}

export function OfferForm({ domainPrice }: OfferFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    offer: domainPrice?.toString() || '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Offer Submitted!",
      description: "We'll get back to you shortly about your offer.",
    });
    setFormData({
      email: '',
      phone: '',
      offer: domainPrice?.toString() || '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="max-w-xl mx-auto p-8 glass-card">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
        Make an Offer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="pl-10"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <DollarSign className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="number"
            name="offer"
            placeholder="Your Offer (USD)"
            value={formData.offer}
            onChange={handleChange}
            required
            className="pl-10"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Textarea
            name="message"
            placeholder="Your Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="pl-10 min-h-[100px]"
          />
        </div>

        <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white">
          Submit Offer <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
}