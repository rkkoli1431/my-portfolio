import { Code, Palette, Database, Server, Code2 , Globe } from 'lucide-react';
import druFruitImage from "../assets/dryfruit.png";
import hinduConnect from "../assets/hinduconnect.png";


export const skills = [
  { name: 'HTML5', icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', icon: Palette, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', icon: Code, color: 'from-yellow-500 to-orange-500' },
  { name: 'React', icon: Code, color: 'from-cyan-500 to-blue-500' },
  { name: 'Node.js', icon: Server, color: 'from-green-500 to-emerald-500' },
  { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-400' },
  { name: 'Express.js', icon: Server, color: 'from-gray-600 to-gray-400' },
  { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-400 to-blue-400' },
  { name: 'Git', icon: Code, color: 'from-orange-600 to-red-600' },
  { name: 'PHP', icon: Code2, color: 'from-purple-500 to-pink-500' },
  { name: 'REST APIs', icon: Globe, color: 'from-indigo-500 to-purple-500' },
  { name: 'MySQL', icon: Database, color: 'from-blue-600 to-cyan-600' }
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MYSQL'],
    image: druFruitImage,
    github: 'https://github.com/rkkoli1431',
    live: 'https://dryfruitbox.co.in/'
  },
  {
    title: 'Social Media Dashboard',
    description: 'An interactive dashboard for managing social media accounts with analytics, scheduling posts, and engagement tracking.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MYSQL'],
    image: hinduConnect,
    github: 'https://github.com/rkkoli1431',
    live: 'https://hinduconnect.co.in/'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking features.',
    technologies: ['React', 'Node.js', 'Express Js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    github: 'https://github.com/rkkoli1431',
    live: ''
  },

];

export const personalInfo = {
  name: 'Rahul Koli',
  title: 'Full Stack Developer',
  tagline: 'with a passion for creating exceptional web experiences',
  education: 'Masters In Computer Application',
  experience: '6 Month',
  cvLink: 'https://drive.google.com/file/d/1sC8wMoVxv_kR2G_2e5ubN7LSq2zslRV3/view?usp=drive_link',
  github: 'https://github.com/rkkoli1431',
  linkedin: 'https://www.linkedin.com/in/rahul-koli-1a6a02229/',
  email: 'rahulkoli9320@gmail.com'
};