import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getEnv } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().trim().min(1, "Nama wajib diisi").max(100),
  email: z.string().trim().email("Email tidak valid").max(255),
  whatsapp: z.string().trim().min(8, "Nomor WhatsApp tidak valid").max(20),
  businessType: z.string().min(1, "Pilih jenis bisnis"),
  services: z.array(z.string()).min(1, "Pilih minimal satu layanan"),
  budget: z.string().min(1, "Pilih range budget"),
  message: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const serviceOptions = ["Landing Page", "Web Application", "Maintenance"];
const budgetOptions = [
  "< Rp 500.000",
  "500.000 - 1.500.000",
  "1.500.000 - 3.000.000",
  "> 3.000.000",
];

const benefits = [
  "Respons dalam 2 jam kerja",
  "Gratis project roadmap & estimasi",
  "No-obligation consultation",
];

const ConsultationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: getEnv("VITE_CONTACT_WHATSAPP_NUMBER", "62"),
      businessType: "",
      services: [],
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Terima kasih! 🎉",
      description: "Kami akan menghubungi Anda segera.",
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section-spacing">
        <div className="container-section max-w-2xl text-center">
          <div className="animate-scale-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <Check size={40} className="text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Terima Kasih!</h2>
            <p className="text-muted-foreground mb-8">
              Tim kami akan menghubungi Anda dalam 2 jam kerja.
            </p>
            <Button size="lg" asChild>
              <a
                href={`https://wa.me/${getEnv("VITE_CONTACT_WHATSAPP_NUMBER", "6281234567890")}?text=Halo%20${getEnv("VITE_APP_NAME", "SSH")}%2C%20saya%20baru%20mengisi%20form%20konsultasi`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lanjut ke WhatsApp →
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-primary font-mono mb-3">
            Konsultasi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Mulai Project Anda Sekarang
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-2 glass-card p-6 md:p-8 rounded-2xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+62 812 3456 7890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jenis Bisnis *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih jenis bisnis" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "UMKM",
                              "Organisasi",
                              "Corporate",
                              "Personal",
                            ].map((v) => (
                              <SelectItem key={v} value={v}>
                                {v}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <FormLabel>Layanan yang Dibutuhkan *</FormLabel>
                      <div className="flex flex-wrap gap-4">
                        {serviceOptions.map((svc) => (
                          <FormField
                            key={svc}
                            control={form.control}
                            name="services"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(svc)}
                                    onCheckedChange={(checked) => {
                                      const updated = checked
                                        ? [...field.value, svc]
                                        : field.value.filter(
                                            (v: string) => v !== svc,
                                          );
                                      field.onChange(updated);
                                    }}
                                  />
                                </FormControl>
                                <Label className="text-sm font-normal cursor-pointer">
                                  {svc}
                                </Label>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          {budgetOptions.map((b) => (
                            <div key={b} className="flex items-center gap-2">
                              <RadioGroupItem value={b} id={b} />
                              <Label
                                htmlFor={b}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {b}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ceritakan Kebutuhan Anda</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Deskripsikan project impian Anda..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="gap-2">
                  <Send size={18} /> Kirim Konsultasi
                </Button>
              </form>
            </Form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Yang Anda Dapatkan</h3>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-accent mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl bg-primary/5 border-primary/10">
              <p className="text-sm text-muted-foreground">
                "Kami memastikan setiap project dikerjakan dengan standar
                industri tertinggi."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
