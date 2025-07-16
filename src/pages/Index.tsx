import { Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import heroProfile from "@/assets/hero-profile.jpg";

const Index = () => {
  const skills = [
    "Java", "Kotlin", "JavaScript", "HTML", "CSS", 
    "ReactJS", "Spring", "SQL"
  ];

  const projects = [
    {
      title: "Tax Estimation App",
      description: "A comprehensive mobile application for calculating various tax estimations with user-friendly interface and accurate calculations.",
      technologies: ["Kotlin", "XML"],
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      codeSnippet: `class TaxCalculator {
    fun calculateIncomeTax(income: Double): Double {
        return when {
            income <= 250000 -> 0.0
            income <= 500000 -> (income - 250000) * 0.05
            else -> 12500 + (income - 500000) * 0.2
        }
    }
}`
    },
    {
      title: "Car Rental System",
      description: "Modern car rental application with real-time booking, Firebase backend, and intuitive Jetpack Compose UI.",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "SQLite"],
      icon: <Database className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      codeSnippet: `@Composable
fun CarListScreen(
    cars: List<Car>,
    onCarSelected: (Car) -> Unit
) {
    LazyColumn {
        items(cars) { car ->
            CarCard(
                car = car,
                onClick = { onCarSelected(car) }
            )
        }
    }
}`
    },
    {
      title: "News Web Portal",
      description: "Dynamic news website with real-time API integration, responsive design, and categorized news sections.",
      technologies: ["ReactJS", "API"],
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      codeSnippet: `const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews()
      .then(setNews)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="news-container">
      {loading ? <Loader /> : <NewsList news={news} />}
    </div>
  );
};`
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="section-container py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Thangapraksh</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="smooth-transition hover:text-primary">Home</a>
              <a href="#about" className="smooth-transition hover:text-primary">About</a>
              <a href="#skills" className="smooth-transition hover:text-primary">Skills</a>
              <a href="#projects" className="smooth-transition hover:text-primary">Projects</a>
              <a href="#contact" className="smooth-transition hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Hello<span className="text-primary">.</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                  I'm Thangapraksh
                </p>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                  Software Developer
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="hero-gradient text-white font-semibold px-8 py-3">
                  Get a Project
                </Button>
                <Button variant="outline" className="px-8 py-3">
                  My Resume
                </Button>
              </div>
              <div className="skill-grid mt-8">
                {skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full hero-gradient p-1">
                  <img
                    src={heroProfile}
                    alt="Thangapraksh"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Code className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Software Development</h3>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Mobile Development</h3>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <Globe className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About me</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm Thangaprakash — a Full Stack Mobile and Web Application 
                Developer. I build smooth, user-friendly apps that solve 
                real-world problems. With experience in developing multiple 
                mobile projects, I focus on creating clean, responsive, and 
                efficient solutions that deliver a great user experience.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-sm text-muted-foreground">Completed Projects</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-2">98%</h4>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary mb-2">2+</h4>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills
          </h2>
          <div className="skill-grid max-w-4xl mx-auto">
            {skills.map((skill) => (
              <span key={skill} className="tech-badge text-center">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.title} className={`project-card ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      {project.icon}
                      <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button className="hero-gradient text-white">
                        View on GitHub
                      </Button>
                      <Button variant="outline">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover hover:scale-105 smooth-transition"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a project?
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Let's talk!
              </h3>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <div className="space-y-8">
                <a 
                  href="mailto:thangapraksh@example.com" 
                  className="flex items-center justify-center space-x-4 smooth-transition hover:text-primary group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-muted-foreground">thangapraksh@example.com</p>
                  </div>
                </a>
                <a 
                  href="https://github.com/thangapraksh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-4 smooth-transition hover:text-primary group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
                  <div>
                    <h4 className="font-semibold text-lg">GitHub</h4>
                    <p className="text-muted-foreground">github.com/thangapraksh</p>
                  </div>
                </a>
                <a 
                  href="https://linkedin.com/in/thangapraksh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-4 smooth-transition hover:text-primary group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/thangapraksh</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg">Thangapraksh</h3>
              <p className="text-sm text-muted-foreground">
                Designed with love, all right reserved by Thangapraksh.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
