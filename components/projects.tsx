import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "FPGA-Based Fast Matrix Multiplication",
      description:
        "Built a high-speed matrix multiplication system on an FPGA using optimized Verilog algorithms. Implemented UART communication for PC-FPGA data transfer and created a parallelized design for maximum efficiency on the Nexus 3 Spartan-6 FPGA.",
      tags: ["Verilog", "FPGA", "UART", "Hardware Design", "Parallel Computing"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "GAN-Based Medical Image Reconstruction",
      description: "Developed a deep learning pipeline using a Pix2Pix cGAN to denoise MRI scans from the BraTS 2020 dataset. The model achieves significant improvements in image clarity using adversarial and pixel-wise loss functions, evaluated via PSNR, LPIPS, and SSIM.",
      tags: ["Python", "PyTorch", "GANs", "U-Net", "Medical Imaging", "Computer Vision"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "Chat & File Sharing Application",
      description: "A real-time chat application with file sharing capabilities using BSD Sockets. Supports multiple users, direct messaging, and secure file transfers.",
      tags: ["C++", "Sockets", "Networking", "Real-Time"],
      codeLink: "https://github.com/Ahmad6564/chat-file-sharing-application-using-BSD-sockets",
      liveLink: null,
    },
    {
      title: "X-Rays Image Classification Using CNN",
      description: "Deep learning model for classifying X-ray images using CNNs and advanced image processing. Achieves high accuracy in identifying abnormalities in medical imaging data.",
      tags: ["Python", "TensorFlow", "CNN", "Medical AI"],
      codeLink: "https://github.com/Ahmad6564/Histopathological-Images-Analysis",
      liveLink: null,
    },
    {
      title: "Wi-Fi Enabled Occupancy Detection System",
      description: "Designed a real-time system using Wi-Fi Channel State Information (CSI) to detect room occupancy. Built ML models to classify occupancy and developed a web dashboard with FastAPI and React.",
      tags: ["Wi-Fi CSI", "Machine Learning", "FastAPI", "React", "Dashboard"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "Real-Time Object Tracking with YOLOv5 & Deep SORT",
      description: "Developed a real-time multi-object tracking system using Python and PyTorch. Integrated YOLOv5 for object detection and Deep SORT for identity-aware tracking.",
      tags: ["Python", "PyTorch", "YOLOv5", "Deep SORT", "Computer Vision"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "Photo-to-Monet Image Translation using GANs",
      description: "Implemented a CycleGAN from scratch for bidirectional image translation between photos and Monet-style paintings. Designed custom Generator and Discriminator architectures using adversarial loss and cycle consistency.",
      tags: ["Python", "PyTorch", "CycleGAN", "Image Translation", "Deep Learning"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "Astronomical Time-Series Classification",
      description: "Participated in the PLAsTiCC Kaggle competition to classify astronomical objects based on light curve data. Explored Transformer-based and RNN-based architectures for time-series classification with large-scale imbalanced datasets.",
      tags: ["Kaggle", "Time-Series", "Transformers", "RNN", "GANs", "Data Science", "Python"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management solution with SQL database backend and C++ frontend. Features book tracking, member management, borrowing system, and reporting.",
      tags: ["C++", "SQL", "Database Design", "DBMS"],
      codeLink: null,
      liveLink: null,
    },
    {
      title: "Wireless Network Routing Algorithm",
      description: "Designed and implemented custom routing algorithms for wireless networks. Optimized for network efficiency and reduced packet loss.",
      tags: ["C++", "Networking", "Algorithms"],
      codeLink: "https://github.com/Ahmad6564/Designing-topology-and-implement-routing-algorithm-of-wireless-Network.",
      liveLink: null,
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light mode, smooth scrolling, and responsive design.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      codeLink: "https://github.com/Ahmad6564/portfolio-website",
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      {project.codeLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-4 w-4" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
