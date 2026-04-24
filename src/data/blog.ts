export interface Post {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage: string;
  author: {
    name: string;
    image: string;
  };
  categories: string[];
  body: any; // Simplified for local
}

export const BLOG_POSTS: Post[] = [
  {
    id: "post-01",
    title: "The Era of Autonomous Enterprise Agents",
    slug: "autonomous-enterprise-agents",
    publishedAt: "2024-04-20T10:00:00Z",
    excerpt: "How autonomous AI agents are moving beyond simple chatbots to become the core reasoning engines of modern business infrastructure.",
    mainImage: "/images/autonomous-reasoning-core.png",
    author: {
      name: "Ahmed Al-Saied",
      image: "/images/avatars/ahmed.png"
    },
    categories: ["AI STRATEGY", "AUTONOMOUS AGENTS"],
    body: [
      { type: "p", text: "The transition from traditional software to AI-native systems is not just an upgrade; it's a paradigm shift. At APEX Experts, we are seeing a massive move toward autonomous agents that can reason, plan, and execute complex workflows without constant human intervention." },
      { type: "h2", text: "Beyond the Chatbot" },
      { type: "p", text: "While the world was focused on ChatGPT, the real innovation was happening in the background: Agentic Workflows. These systems don't just answer questions; they solve problems. They connect to your database, analyze your sales trends, and suggest inventory adjustments before you even realize there's a shortage." },
      { type: "h2", text: "Technical Mastery at Scale" },
      { type: "p", text: "Engineering these systems requires a deep understanding of both LLM limitations and database precision. You cannot build a reliable agent on a shaky data foundation." }
    ]
  },
  {
    id: "post-02",
    title: "Oracle APEX & AI: The New Power Couple",
    slug: "oracle-apex-ai-integration",
    publishedAt: "2024-04-18T14:30:00Z",
    excerpt: "Exploring how the latest AI integrations in Oracle APEX are revolutionizing enterprise application development speed and precision.",
    mainImage: "/images/apex-ai-workflow.png",
    author: {
      name: "Amr Mohamed",
      image: "/images/avatars/Amr.png"
    },
    categories: ["ORACLE APEX", "ENTERPRISE DATA"],
    body: [
      { type: "p", text: "Oracle APEX has always been the gold standard for data-centric apps. Now, with the injection of AI capabilities, we are reaching 'Decision Velocity' that was previously impossible." }
    ]
  },
  {
    id: "post-03",
    title: "Data Sovereignty in the Age of LLMs",
    slug: "data-sovereignty-llm",
    publishedAt: "2024-04-15T09:15:00Z",
    excerpt: "A deep dive into maintaining control over your enterprise data while leveraging the power of large language models.",
    mainImage: "/images/agentic-workflow.png",
    author: {
      name: "Reham Samer",
      image: "/images/avatars/reham.png"
    },
    categories: ["SECURITY", "DATA ENGINEERING"],
    body: [
      { type: "p", text: "Privacy is not an option; it's a requirement. As we build more advanced AI systems, the question of who owns the training data and where it lives becomes critical." }
    ]
  },
  {
    id: "post-04",
    title: "Cognitive Data Synthesis: The Next Frontier",
    slug: "cognitive-data-synthesis",
    publishedAt: "2024-04-12T11:00:00Z",
    excerpt: "How we are combining structured database precision with neural reasoning to create the world's first truly cognitive data layers.",
    mainImage: "/images/cognitive-data-synthesis-core.png",
    author: {
      name: "Ahmed Al-Saied",
      image: "/images/avatars/ahmed.png"
    },
    categories: ["DATA ENGINEERING", "NEURAL SYSTEMS"],
    body: [
      { type: "p", text: "At APEX Experts, we believe that data without reasoning is just noise. The next generation of enterprise architecture will not just store data; it will understand it. We are developing cognitive synthesis layers that sit directly on top of Oracle Database, providing real-time semantic understanding of every transaction." },
      { type: "h2", text: "The Neural Database" },
      { type: "p", text: "By leveraging vector embeddings inside the database kernel, we enable lightning-fast semantic search and relationship discovery that was previously impossible. This allows enterprise systems to answer complex 'Why' questions, not just 'What' questions." }
    ]
  },
  {
    id: "post-05",
    title: "Securing the Agentic Enterprise",
    slug: "securing-agentic-enterprise",
    publishedAt: "2024-04-10T16:45:00Z",
    excerpt: "A technical deep dive into the security protocols required to deploy autonomous AI agents in high-stakes corporate environments.",
    mainImage: "/images/agentic-workflow.png",
    author: {
      name: "Reham Samer",
      image: "/images/avatars/reham.png"
    },
    categories: ["SECURITY", "AI GOVERNANCE"],
    body: [
      { type: "p", text: "Autonomy brings risk. When an AI agent has the power to execute database writes or trigger API calls, security cannot be an afterthought. We've developed the 'Apex Guard' protocol—a multi-layered validation system that ensures every agentic action is verified, audited, and compliant." },
      { type: "h2", text: "Zero-Trust Agentic Workflows" },
      { type: "p", text: "Our security model assumes every agent is a potential vector for misalignment. By enforcing strict role-based access control (RBAC) at the prompt level, we ensure that agents can only operate within their predefined boundaries." }
    ]
  }
];
