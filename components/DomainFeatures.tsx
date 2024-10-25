'use client';

import { Card } from "@/components/ui/card";
import { Globe, CheckCircle2, DollarSign } from 'lucide-react';

export function DomainFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <Card className="p-6 glass-card hover:shadow-lg transition-all hover:scale-105">
        <Globe className="h-12 w-12 mb-4 text-indigo-500" />
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Premium Domain
        </h3>
        <p className="text-muted-foreground">Short, memorable, and brandable domain name perfect for your business.</p>
      </Card>
      
      <Card className="p-6 glass-card hover:shadow-lg transition-all hover:scale-105">
        <CheckCircle2 className="h-12 w-12 mb-4 text-indigo-500" />
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Instant Transfer
        </h3>
        <p className="text-muted-foreground">Quick and secure domain transfer process through a trusted escrow service.</p>
      </Card>
      
      <Card className="p-6 glass-card hover:shadow-lg transition-all hover:scale-105">
        <DollarSign className="h-12 w-12 mb-4 text-indigo-500" />
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Make an Offer
        </h3>
        <p className="text-muted-foreground">Submit your offer below and we'll get back to you within 24 hours.</p>
      </Card>
    </div>
  );
}