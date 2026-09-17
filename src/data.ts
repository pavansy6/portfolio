export const profile = {
  name: "Pavan Yadav",
  role: "AI Engineer",
  title: "Specialist, Data Analytics at SighBear Technologies",
  location: "Mumbai, India",
  email: "pavansy2006@gmail.com",
  phone: "+91-8291598541",
  github: "https://github.com/pavansy6",
  linkedin: "https://linkedin.com/in/pavansyadav",
};

export const experience = [
  {
    index: "01",
    company: "SighBear Technologies",
    role: "Specialist, Data Analytics",
    period: "Apr 2026 - Present",
    location: "Mumbai, India",
    summary:
      "Production LLM systems on private infrastructure: multi-skill assistants, agentic workflows, and finance intelligence over structured + unstructured enterprise data.",
    points: [
      "Engineered an on-premises multi-skill LLM assistant on locally hosted models: RAG with hybrid retrieval (FAISS + BM25) and agent-based workflows across cybersecurity, finance, and data-engineering use cases.",
      "Designed autonomous AI workflows where LLMs reason over enterprise context, orchestrate task-specific actions, and fuse structured and unstructured data into production applications.",
      "Built a finance data-intelligence workflow for natural-language querying over structured audit records, combining semantic retrieval with enterprise data processing to automate monthly reconciliation.",
      "Own reusable AI APIs and microservices (LLMs + retrieval + enterprise data), including deployment, CI/CD, security, and GitHub repository controls.",
    ],
    stack: ["Python", "FastAPI", "RAG", "FAISS", "BM25", "AI Agents", "Microservices", "CI/CD", "Docker"],
  },
  {
    index: "02",
    company: "Marsh McLennan",
    role: "Data Science Intern",
    period: "Feb 2025 - Feb 2026",
    location: "Mumbai, India",
    summary:
      "Insurance and risk-advisory data at enterprise scale: taxonomies, automation, and NLP dedup that measurably cut processing time.",
    points: [
      "Analyzed insurance and risk-advisory data from diverse enterprise sources, applying classification to build data taxonomies and improve categorization accuracy.",
      "Automated complex processing workflows with Python and Pandas, cutting processing time and unblocking faster cross-functional decisions.",
      "Applied NLP to build an entity-deduplication dictionary for ransomware and organization names, reducing false positives and lifting data quality.",
      "Migrated legacy SQL Server pipelines to Databricks and optimized large-scale processing with vectorized operations, reducing execution time by over 98%.",
    ],
    stack: ["Python", "Pandas", "SQL Server", "Databricks", "NLP", "Classification"],
  },
];

export const projects = [
  {
    index: "01",
    title: "Enterprise RAG Engine: Hybrid AI Search",
    date: "May 2026",
    tagline: "Modular RAG for enterprise knowledge retrieval with transparent, cited answers.",
    description:
      "Parses PDF/DOCX into embeddings, retrieves with dense + sparse hybrid search fused by RRF, and generates source-grounded answers through local or cloud LLMs.",
    architecture: ["Ingest PDF/DOCX", "SentenceTransformers", "ChromaDB + BM25", "RRF fusion", "FastAPI + LLM", "Cited answers"],
    bullets: [
      "Hybrid retrieval (dense vectors + BM25 via Reciprocal Rank Fusion) for materially better contextual relevance.",
      "FastAPI backend with REST endpoints for semantic search, source-grounded generation, and citations; pluggable local/cloud LLM backends.",
    ],
    stack: ["Python", "FastAPI", "ChromaDB", "LangChain", "Streamlit", "SentenceTransformers", "BM25", "RRF"],
    github: "https://github.com/pavansy6",
    demo: null as string | null,
  },
  {
    index: "02",
    title: "Customer Churn & Retention API",
    date: "Nov 2025",
    tagline: "Production-style ML inference service, containerized and experiment-tracked.",
    description:
      "End-to-end churn prediction with a Logistic Regression pipeline, MLflow tracking, and a Dockerized FastAPI service exposing real-time REST endpoints.",
    architecture: ["Features + SQL", "Logistic Regression", "MLflow tracking", "FastAPI", "Docker", "REST inference"],
    bullets: [
      "Full pipeline: training, evaluation, and experiment tracking in MLflow.",
      "Dockerized inference service built for production-style integration, not a notebook demo.",
    ],
    stack: ["Python", "SQL", "FastAPI", "Scikit-Learn", "MLflow", "Docker"],
    github: "https://github.com/pavansy6/customer-churn-and-retention",
    demo: null as string | null,
  },
];

export const skillGroups = [
  {
    title: "Programming & APIs",
    items: ["Python", "SQL", "FastAPI", "REST APIs", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Agentic AI & GenAI",
    items: ["Agentic AI", "AI Agents", "Autonomous Systems", "LLMs", "RAG", "LangChain", "LLM Orchestration", "Tool Calling", "Prompt Engineering"],
  },
  {
    title: "Cloud & AI Platforms",
    items: ["Microsoft Foundry", "Azure AI Services", "Azure OpenAI", "Azure ML", "Microsoft Azure", "AWS", "Databricks"],
  },
  {
    title: "Retrieval & Knowledge",
    items: ["Knowledge Graphs", "Semantic Search", "Embeddings", "Hybrid Search", "BM25", "Dense Retrieval", "RRF", "FAISS", "ChromaDB", "Pinecone", "Vector DBs"],
  },
  {
    title: "ML, MLOps & Architecture",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "MLflow", "DVC", "CI/CD", "Docker", "Kubernetes", "Microservices", "Event-Driven Architecture"],
  },
];

export const education = [
  {
    school: "SDBI - School of Data Science & Business Intelligence",
    program: "B.Sc., Data Science and Business Analytics",
    period: "Aug 2023 - Mar 2026",
    location: "Mumbai, Maharashtra",
    badge: "8.5 / 10 CGPA",
  },
  {
    school: "Holy Family High School",
    program: "Higher Secondary Education",
    period: "Aug 2021 - Mar 2023",
    location: "Andheri, Mumbai",
    badge: null as string | null,
  },
  {
    school: "St. Xavier's High School",
    program: "Primary & Secondary Education",
    period: "2008 - 2021",
    location: "Andheri, Mumbai",
    badge: null as string | null,
  },
];

export const marqueeItems = [
  "Python", "FastAPI", "LangChain", "RAG", "Hybrid Search", "FAISS", "Azure OpenAI",
  "Databricks", "Docker", "Kubernetes", "MLflow", "PyTorch", "Agents", "SQL",
];
