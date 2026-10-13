import {
    Circle,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      herf: "#",
      color: "hover:bg-pink-600",
    },
    {
      icon: Twitter,
      herf: "#",
      color: "hover:bg-blue-500",
    },
    {
      icon: Instagram,
      herf: "#",
      color: "hover:bg-pink-500",
    },
    {
      icon: Linkedin,
      herf: "#",
      color: "hover:bg-blue-600",
    },
  ];
  const quickLinks = [
    { lable: "Home", herf: "#" },
    { lable: "About As", herf: "#" },
    { lable: "Company", herf: "#" },
    { lable: "Services", herf: "#" },
    { lable: "Contact", herf: "#" },
  ];
  const services = [
    { label: "UI/UX Design", herf: "#" },
    { label: "Web Development", herf: "#" },
    { label: "Photography", herf: "#" },
    { label: "Digital Markting", herf: "#" },
    { label: "branding", herf: "#" },
  ];
  const contactInfo = [
    { icon: Phone, text: "+959 452965993", color: "text-pink-500" },
    { icon: Mail, text: "info@proservice.com", color: "text-yellow-500" },
    {
      icon: MapPin,
      text: "123   Lorem ipsum dolor sit amet. ",
      color: "text-pink-500",
    },
  ];
  const decorativeDots = [
    { color: "text-pink-500" },
    { color: "text-yellow-500" },
    { color: "text-green-500" },
  ];
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-14 sm:py-16 md:py-20 lg:px-20 text-white">
  <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-12 mb-8">
            <div className="space-y-6">
                <div className="flex items-center font-bold text-2xl">
                    <div className="w-10 h-10 items-center flex justify-center rounded-full border-4 border-pink-600 mr-2">
                        P
                    </div>
                    <span>
                        ro<span className="text-yellow-500">Service</span>
                    </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, molestias vero? Quo pariatur, ad nemo nam inventore necessitatibus sequi doloribus quod eligendi neque quisquam amet animi error odit labore dolor!
                </p>
                <div className="flex gap-4">
                    {socialLinks.map((social,idx) =>(
                        <a key={idx} href={social.color} className= {`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors ${social.color}`}>
                            <social.icon className="w-5 h-5"/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <h2 className="text-xl font-semibold border-pink-600 pb-2 inline-block">
                    Quick links
                </h2>
                <ul className="space-y-3">
                    {quickLinks.map((link,index) => (
                        <li key={index}>
                            <a href={link.herf} className="text-gray-300 hover:text-pink-500 transition-colors">
                                {link.lable}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                <h2 className="text-xl font-semibold border-pink-600 pb-2 inline-block">
                    Our Services
                </h2>
                <ul className="space-y-3">
                    {services.map((service,index) => (
                        <li key={index}>
                            <a href={service.herf} className="text-gray-300 hover:text-pink-500 transition-colors">
                                {service.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                <h2 className="text-xl font-semibold border-pink-600 pb-2 inline-block">
                    Contact Info
                </h2>
                <div className="space-y-3">
                    {contactInfo.map((contact,idx)=>(
                        <div key={idx} className={`flex items-center gap-3 ${contact.multiline ? 'items-start' : ''}`}>
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                                <contact.icon className={`w-5 h-5 ${contact.color}`}/>
                            </div>
                            <div>
                                <p className="text-gray-300 whitespace-pre-line">{contact.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
      <div className="flex justify-center gap-3 mb-8">
        {decorativeDots.map((item,idx)=>(
            <Circle key={idx} className={`${item.color} w-4 h-4`} />
        ))}
      </div>
      <div className="border-t border-gray-700 pt-8 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-1">
          17 10 2025  Lorem ipsum dolor sit amet.
          <Heart className="w-4 h-4 text-pink-500 fill-current"/>
        </p>
      </div>
      </div>
      <div className="absolute border-2 border-pink-500 bottom-20 left-10 w-16 h-16 rounded-full opacity-20"></div>
      <div className="absolute border-2 border-yellow-500 top-20 right-10 w-16 h-16 rounded-full opacity-20"></div>
    </footer>
  );
};

export default Footer;
