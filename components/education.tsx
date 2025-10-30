import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Bachelor's Degree */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Computer Engineering</h3>
                    <p className="text-muted-foreground">National University of Sciences and Technology, Islamabad</p>
                    <p className="text-sm text-muted-foreground">2021 - 2025</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Final year Computer Engineering student with a focus on embedded systems, machine learning, and artificial intelligence. Maintained a strong academic record while participating in various research projects and technical competitions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Digital System Design</Badge>
                    <Badge variant="secondary">Computer System Architecture</Badge>
                    <Badge variant="secondary">Digital Signal Processing</Badge>
                    <Badge variant="secondary">Data Structure</Badge>
                    <Badge variant="secondary">Artificial Intelligence</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">Software Engineering</Badge>
                    <Badge variant="secondary">Computer Networks</Badge>
                    <Badge variant="secondary">Digital Image Processing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pre-Engineering */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Pre-Engineering</h3>
                    <p className="text-muted-foreground">Govt Islamic College Civil Lines, Lahore</p>
                    <p className="text-sm text-muted-foreground">2018 - 2020</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Completed pre-engineering with distinction, focusing on mathematics, physics, and chemistry. Participated in various science and mathematics competitions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Mathematics</Badge>
                    <Badge variant="secondary">Physics</Badge>
                    <Badge variant="secondary">Chemistry</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <div className="mt-16" id="certifications">
              <div className="space-y-4 text-center mb-8">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Certifications</h3>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Professional certifications and specialized training
                </p>
              </div>

              <div className="space-y-6">
                {/* IBM GenAI Engineering */}
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2">IBM GenAI Engineering with PyTorch, LangChain & Hugging Face</h4>
                        <p className="text-sm text-muted-foreground mb-2">Coursera | IBM</p>
                        <p className="text-muted-foreground mb-4 text-sm">
                          Comprehensive specialization covering generative AI engineering, including PyTorch, LangChain, Hugging Face, transformers architecture, LLMs, and RAG applications. 16-course program completed in approximately 6 months.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">Generative AI</Badge>
                          <Badge variant="outline" className="text-xs">PyTorch</Badge>
                          <Badge variant="outline" className="text-xs">LangChain</Badge>
                          <Badge variant="outline" className="text-xs">Hugging Face</Badge>
                          <Badge variant="outline" className="text-xs">Transformers</Badge>
                          <Badge variant="outline" className="text-xs">LLMs</Badge>
                          <Badge variant="outline" className="text-xs">RAG</Badge>
                          <Badge variant="outline" className="text-xs">Fine-Tuning</Badge>
                          <Badge variant="outline" className="text-xs">Prompt Engineering</Badge>
                          <Badge variant="outline" className="text-xs">NLP</Badge>
                        </div>
                        <a 
                          href="https://www.coursera.org/account/accomplishments/specialization/certificate/NPW9BPVZS4MO"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          View Certificate
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Deep Learning Specialization */}
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2">Deep Learning Specialization</h4>
                        <p className="text-sm text-muted-foreground mb-2">Coursera | deeplearning.ai</p>
                        <p className="text-muted-foreground mb-4 text-sm">
                          Comprehensive five-course specialization by Andrew Ng covering the foundations of deep learning, neural networks, and AI applications.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">Neural Networks</Badge>
                          <Badge variant="outline" className="text-xs">ANN</Badge>
                          <Badge variant="outline" className="text-xs">Multi Layer Perceptrons</Badge>
                          <Badge variant="outline" className="text-xs">Backpropagation</Badge>
                          <Badge variant="outline" className="text-xs">Transformers</Badge>
                          <Badge variant="outline" className="text-xs">LSTM</Badge>
                          <Badge variant="outline" className="text-xs">CNNs</Badge>
                          <Badge variant="outline" className="text-xs">RNNs</Badge>
                          <Badge variant="outline" className="text-xs">Computer Vision</Badge>
                          <Badge variant="outline" className="text-xs">NLP</Badge>
                        </div>
                        <a 
                          href="https://www.coursera.org/account/accomplishments/certificate/NHJC6MTD89F4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          View Certificate
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
