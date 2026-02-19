import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Github, Twitter, Linkedin, Mail, Send } from "lucide-react";
import { WSection, WBox, Annotation } from "../components/WireframeComponents";

export const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    toast.success("Message sent! (Mock)");
    reset();
  };

  return (
    <WSection id="contact" title="CONTACT">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Column */}
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Get In Touch</h2>
          <p className="font-mono text-gray-500 mb-8">
            Ready to start a project? Our 12 specialists are here to help.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
              <WBox className="bg-transparent border-black">
                <input
                  {...register("name", { required: true })}
                  className="w-full p-3 bg-transparent outline-none focus:bg-gray-50 transition-colors placeholder:text-gray-400 font-mono"
                  placeholder="Your Name"
                />
              </WBox>
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
              <WBox className="bg-transparent border-black">
                <input
                  {...register("email", { required: true })}
                  className="w-full p-3 bg-transparent outline-none focus:bg-gray-50 transition-colors placeholder:text-gray-400 font-mono"
                  placeholder="g6@example.com"
                  type="email"
                />
              </WBox>
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
              <WBox className="bg-transparent border-black">
                <textarea
                  {...register("message", { required: true })}
                  className="w-full p-3 bg-transparent outline-none focus:bg-gray-50 transition-colors h-32 resize-none placeholder:text-gray-400 font-mono"
                  placeholder="How can we be of service..."
                />
              </WBox>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all flex items-center justify-center gap-2 group"
            >
              Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col justify-center space-y-8 relative">
          <Annotation text="Animated hover states for social links" position="top-10 right-0" rotate="rotate-3" />
          {[
            { name: "GitHub", icon: Github, link: "#" },
            { name: "Twitter", icon: Twitter, link: "#" },
            { name: "LinkedIn", icon: Linkedin, link: "#" },
            { name: "Email", icon: Mail, link: "mailto:hello@example.com" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="flex items-center gap-4 group p-4 border border-dashed border-transparent hover:border-black transition-all"
            >
              <div className="p-3 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                <social.icon size={24} />
              </div>
              <span className="text-xl font-bold font-mono group-hover:translate-x-2 transition-transform">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </WSection>
  );
};
