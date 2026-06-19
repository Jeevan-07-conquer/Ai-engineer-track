import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle, Circle, BookOpen, Code, Trophy, ChevronRight } from 'lucide-react';

const curriculum = [
  {
    month: 1,
    title: "Python Pro & LLM Foundations",
    description: "Master advanced Python (Async, Pydantic) and understand raw LLM API calls.",
    weeks: [
      { theme: "Advanced Python for AI", tasks: ["Master Object-Oriented Programming (OOP)", "Learn Type Hinting & Pydantic for validation", "Implement Asyncio for concurrent API calls", "Build custom decorators for retry logic", "Understand Python memory management", "Set up a virtual environment properly", "Mini-Project: Async Web Scraper"] },
      { theme: "OpenAI API Deep Dive", tasks: ["Generate and secure OpenAI API keys", "Write ChatCompletion scripts", "Master System, User, and Assistant roles", "Experiment with Temperature & Top_p", "Implement token counting (tiktoken)", "Handle API Rate Limits gracefully", "Mini-Project: CLI Chatbot with memory"] },
      { theme: "Anthropic & Local LLMs", tasks: ["Set up Anthropic API (Claude 3.5 Sonnet)", "Compare XML prompting vs JSON", "Install Ollama for local model inference", "Pull and run Llama-3 locally", "Connect Python script to local Ollama", "Compare latency Local vs Cloud", "Mini-Project: Local vs Cloud Evaluator"] },
      { theme: "Structured Outputs", tasks: ["Force LLMs to output strict JSON", "Use Pydantic models for response structures", "Handle JSON parsing errors", "Implement Instructor library", "Extract entities from unstructured text", "Build a data extraction pipeline", "Month 1 Review & GitHub Commit"] }
    ]
  },
  {
    month: 2,
    title: "Tools, Routing & Core RAG",
    description: "Teach LLMs to use tools and give them memory through Vector Databases.",
    weeks: [
      { theme: "Function Calling (Tools)", tasks: ["Understand OpenAI Tool Calling schema", "Build a 'Calculator' python function", "Connect Calculator function to an LLM", "Build a 'Web Search' tool (Tavily)", "Handle parallel tool calls", "Force the LLM to use a specific tool", "Mini-Project: LLM Math & Search Assistant"] },
      { theme: "Vector DBs & Embeddings", tasks: ["Understand Vector Embeddings", "Generate embeddings for a text document", "Calculate Cosine Similarity in Python", "Set up ChromaDB/Pinecone", "Store documents and metadata", "Perform semantic search", "Mini-Project: Document Search Engine"] },
      { theme: "Building RAG from Scratch", tasks: ["Chunk a large PDF intelligently", "Embed and store chunks in Vector DB", "Build a retrieval function", "Construct a RAG prompt with context", "Pass RAG prompt to LLM for answer", "Implement basic citations", "Mini-Project: Chat with PDF (No frameworks)"] },
      { theme: "Advanced RAG & Evaluation", tasks: ["Implement Multi-Query variations", "Learn Hybrid Search (Keyword + Semantic)", "Implement GraphRAG basics", "Introduce Ragas framework for RAG evaluation", "Evaluate Faithfulness & Answer Relevance", "Optimize chunk overlap", "Month 2 Review & GitHub Commit"] }
    ]
  },
  {
    month: 3,
    title: "Frameworks & Algorithmic Prompting",
    description: "Transition to LangChain, LlamaIndex, and the advanced DSPy framework.",
    weeks: [
      { theme: "LangChain Core", tasks: ["Understand LCEL (Expression Language)", "Build basic Prompt->LLM->Parser chains", "Implement ConversationBufferMemory", "Use LangChain document loaders", "Integrate LangChain with Vector DBs", "Chain multiple LLM calls", "Mini-Project: LangChain Q&A Bot"] },
      { theme: "The ReAct Architecture", tasks: ["Understand Reason + Act paradigm", "Build a ReAct loop manually", "Use LangChain's create_react_agent", "Provide multiple tools to ReAct", "Debug agent reasoning traces", "Handle 'Agent gets stuck' errors", "Mini-Project: Autonomous Researcher"] },
      { theme: "LlamaIndex Essentials", tasks: ["Understand LlamaIndex vs LangChain", "Build a VectorStoreIndex", "Implement a Sub-Question Query Engine", "Build a Router Engine", "Implement Semantic Routing", "Compare RAG performance", "Mini-Project: Multi-Document RAG"] },
      { theme: "DSPy: Algorithmic Prompting", tasks: ["Understand DSPy philosophy vs Manual Prompting", "Define DSPy Signatures and Modules", "Compile a pipeline using DSPy Teleprompters", "Use BootstrapFewShot for auto-prompting", "Evaluate DSPy pipeline accuracy", "Compare DSPy outputs to raw LangChain", "Month 3 Review & GitHub Commit"] }
    ]
  },
  {
    month: 4,
    title: "Multi-Agent Systems: CrewAI",
    description: "Build teams of AI agents that collaborate to solve problems.",
    weeks: [
      { theme: "CrewAI Fundamentals", tasks: ["Define Roles, Goals, and Backstories", "Create specific Tasks with expected outputs", "Form a Crew and execute sequentially", "Debug agent interactions", "Pass data between agents", "Handle CrewAI context windows", "Mini-Project: Tech News Blogging Crew"] },
      { theme: "Tools & Delegation", tasks: ["Assign custom tools to agents", "Use CrewAI built-in tools", "Enable agent delegation", "Prevent infinite delegation loops", "Implement human-in-the-loop review", "Customize agent LLMs", "Mini-Project: Market Research Crew"] },
      { theme: "Hierarchical Processes", tasks: ["Understand Hierarchical vs Sequential", "Appoint a Manager Agent", "Observe Manager delegation", "Tune Manager temperature", "Handle task failure/reassignment", "Scale to a 5-agent crew", "Mini-Project: Software Dev Crew"] },
      { theme: "Productionizing CrewAI", tasks: ["Extract outputs into structured JSON", "Run Crews asynchronously", "Implement memory in CrewAI", "Handle API rate limits", "Deploy Crew script as a basic API", "Evaluate Crew output quality", "Month 4 Review & GitHub Commit"] }
    ]
  },
  {
    month: 5,
    title: "Stateful Agents: LangGraph Basics",
    description: "Learn the industry standard for production-grade, controllable agents.",
    weeks: [
      { theme: "Graphs and State", tasks: ["Understand Directed Acyclic Graphs (DAGs)", "Define TypedDict for LangGraph State", "Create basic Nodes (Python functions)", "Create Edges connecting Nodes", "Compile and run a StateGraph", "Visualize the graph", "Mini-Project: State Machine Workflow"] },
      { theme: "Conditional Routing", tasks: ["Understand Conditional Edges", "Build a 'Router' node", "Implement fallback nodes for errors", "Create cycles for iterative refinement", "Pass Message objects in State", "Build a conversational loop", "Mini-Project: Support Ticket Router"] },
      { theme: "Memory (Checkpointers)", tasks: ["Understand Checkpointers for persistence", "Implement MemorySaver", "Implement SqliteSaver for disk", "Resume graph execution", "Access graph state history (Time travel)", "Modify past state and re-execute", "Mini-Project: Agent with Long-Term Memory"] },
      { theme: "Human-in-the-Loop", tasks: ["Add 'interrupt_before' breakpoint", "Pause graph to await user input", "Resume graph after approval", "Modify state manually", "Build a UI workflow for review", "Implement dynamic breakpoints", "Month 5 Review & GitHub Commit"] }
    ]
  },
  {
    month: 6,
    title: "Advanced LangGraph & AutoGen",
    description: "Master Microsoft AutoGen and complex LangGraph architectures.",
    weeks: [
      { theme: "AutoGen Foundations", tasks: ["Understand ConversableAgent", "Set up a 2-agent conversation", "Configure UserProxyAgent", "Implement termination conditions", "Review conversation history", "Compare AutoGen to CrewAI", "Mini-Project: Debate Agents"] },
      { theme: "Code Execution (AutoGen)", tasks: ["Set up Docker for safe execution", "Enable LocalCommandLineCodeExecutor", "Agent writes code to solve math", "Agent executes the written code", "Handle execution errors", "Restrict execution environments", "Mini-Project: Autonomous Data Analyst"] },
      { theme: "Advanced LangGraph Architectures", tasks: ["Implement Plan-and-Execute", "Build a Supervisor Agent", "Implement parallel node execution", "Build a Map-Reduce workflow", "Implement self-reflection (Critique)", "Build looping 'Web Researcher'", "Mini-Project: Multi-Agent Research System"] },
      { theme: "Streaming and UX", tasks: ["Understand LLM token streaming", "Stream tokens from LangGraph nodes", "Stream complex state updates", "Build terminal UI to render streams", "Handle interrupted streams", "Compare streaming approaches", "Month 6 Review & GitHub Commit"] }
    ]
  },
  {
    month: 7,
    title: "Backend APIs & Full-Stack AI",
    description: "Wrap your agents in robust FastAPIs and connect them to web interfaces.",
    weeks: [
      { theme: "FastAPI for AI", tasks: ["Build a basic FastAPI server", "Create endpoints for agent runs", "Handle BackgroundTasks", "Implement Pydantic API payloads", "Add CORS middleware", "Secure endpoints with API keys", "Mini-Project: Agentic Backend API"] },
      { theme: "WebSockets & Streaming", tasks: ["Understand WebSockets vs HTTP", "Implement WebSocket endpoint", "Stream LangGraph state over WebSockets", "Stream raw tokens", "Handle client disconnections cleanly", "Build a generic streaming client", "Mini-Project: Streaming Chat API"] },
      { theme: "Frontend Integration", tasks: ["Set up a Next.js/React project", "Build a chat UI component", "Connect UI to FastAPI HTTP", "Connect UI to WebSocket", "Render Markdown and Code Blocks", "Handle loading states", "Mini-Project: Full-Stack Agent Interface"] },
      { theme: "Database & Users", tasks: ["Integrate PostgreSQL (SQLAlchemy)", "Store conversation history", "Implement JWT Authentication", "Associate agent runs with users", "Paginate conversation history", "Implement rate limiting", "Month 7 Review & GitHub Commit"] }
    ]
  },
  {
    month: 8,
    title: "Enterprise MLOps & Evaluation",
    description: "Deploy reliably, host models efficiently, and evaluate agent accuracy mathematically.",
    weeks: [
      { theme: "Docker & CI/CD", tasks: ["Write Dockerfile for Python Agent", "Optimize image size (multi-stage)", "Use Docker Compose (App+DB+Redis)", "Test containers locally", "Set up GitHub Actions", "Automate Docker build/push", "Mini-Project: Automated Pipeline"] },
      { theme: "Inference Optimization (vLLM)", tasks: ["Understand vLLM and PagedAttention", "Deploy an open-source model via vLLM", "Test batched inference speeds", "Understand Quantization (AWQ/GPTQ)", "Compare vLLM vs Ollama in production", "Set up an OpenAI-compatible vLLM server", "Mini-Project: High-Speed Model Host"] },
      { theme: "Enterprise Evaluation", tasks: ["Integrate DeepEval framework", "Write unit tests for LLM outputs", "Evaluate Agent Hallucinations", "Evaluate Contextual Precision/Recall", "Set up continuous testing in CI/CD", "Log evaluation scores to LangSmith", "Mini-Project: CI/CD Evaluation Pipeline"] },
      { theme: "Cloud Deployment", tasks: ["Deploy to AWS App Runner / GCP Cloud Run", "Configure cloud environment variables", "Set up CloudWatch/Stackdriver logging", "Manage secrets securely", "Integrate Langfuse for production tracing", "Set up cost/latency alerts", "Month 8 Review & GitHub Commit"] }
    ]
  },
  {
    month: 9,
    title: "Specialized Agents & Fine-Tuning",
    description: "Push boundaries with Multimodality and model fine-tuning techniques.",
    weeks: [
      { theme: "Vision & Audio Agents", tasks: ["Use GPT-4o for image analysis", "Build tool to extract text from images", "Implement visual QA workflows", "Integrate Whisper (Speech-to-Text)", "Integrate ElevenLabs (TTS)", "Stream audio chunks for real-time", "Mini-Project: Voice & Vision Assistant"] },
      { theme: "Browser Automation", tasks: ["Learn Playwright basics", "Build tools to click/type on web pages", "Implement visual web scraping", "Handle captchas (basic concepts)", "Build autonomous web-research agent", "Parse HTML DOM securely", "Mini-Project: Autonomous Flight Booker"] },
      { theme: "Fine-Tuning (LoRA/Unsloth)", tasks: ["Understand Fine-Tuning vs RAG", "Prepare a custom dataset (JSONL)", "Set up Unsloth for fast training", "Apply LoRA to Llama-3/Mistral", "Merge adapters and export to GGUF", "Test fine-tuned model performance", "Mini-Project: Domain-Specific Custom Model"] },
      { theme: "Data Analysis Agents", tasks: ["Integrate pandas and matplotlib as tools", "Create Text-to-SQL agent", "Generate dynamic charts", "Handle large datasets by sampling", "Sanitize outputs", "Pass complex visual data", "Month 9 Review & GitHub Commit"] }
    ]
  },
  {
    month: 10,
    title: "Capstone & Enterprise Security",
    description: "Build your massive portfolio piece while hardening it against security threats.",
    weeks: [
      { theme: "LLM Security (OWASP)", tasks: ["Study OWASP Top 10 for LLMs", "Identify Prompt Injection vulnerabilities", "Implement input sanitization layers", "Test Jailbreak attempts on your agent", "Implement Output Guardrails (NeMo Guardrails)", "Handle sensitive PII redaction", "Mini-Project: Hardened Secure Agent"] },
      { theme: "Capstone Architecture", tasks: ["Identify a real-world enterprise problem", "Draft Multi-Agent Architecture Diagram", "Select framework (LangGraph)", "Define all state schemas and Nodes", "List required APIs and Tools", "Set up monolithic repo and CI/CD", "Create Project Spec Document"] },
      { theme: "Data & RAG Infrastructure", tasks: ["Acquire necessary datasets", "Clean and preprocess data", "Set up Vector DB and ingest", "Build robust retrieval functions", "Test retrieval accuracy (Ragas)", "Implement caching for queries", "Finalize Data Layer"] },
      { theme: "Core Agent Logic", tasks: ["Implement individual agent nodes", "Integrate tools into agents", "Construct the StateGraph", "Implement conditional routing", "Add human-in-the-loop breakpoints", "Run end-to-end tests", "Month 10 Review: Working Backend"] }
    ]
  },
  {
    month: 11,
    title: "Capstone Productionization",
    description: "Polish the capstone, build the frontend, and deploy it to production.",
    weeks: [
      { theme: "Frontend Implementation", tasks: ["Initialize Next.js/React frontend", "Build dashboard/chat interface", "Connect to FastAPI backend", "Implement real-time streaming", "Add visualizers for graph state", "Ensure mobile responsiveness", "Finalize Frontend UI"] },
      { theme: "Performance Optimization", tasks: ["Analyze token usage logs", "Switch smaller tasks to cheaper models", "Implement semantic caching", "Optimize Docker image cold starts", "Load test the application", "Secure endpoints with rate limiting", "Finalize Optimization"] },
      { theme: "Production Deployment", tasks: ["Deploy Backend (GCP/AWS)", "Deploy Frontend (Vercel)", "Deploy Database (Supabase/RDS)", "Configure Custom Domains", "Set up production monitoring", "Perform end-to-end live testing", "Project Live!"] },
      { theme: "Open Source & Docs", tasks: ["Write exceptional README.md", "Include architecture diagrams", "Record a 3-minute video demo", "Write clean inline docstrings", "Add MIT License", "Publish article on Medium/Dev.to", "Month 11 Review & GitHub Commit"] }
    ]
  },
  {
    month: 12,
    title: "Placement & 10+ LPA Strategy",
    description: "Tailor your profile, master interviews, and land the AI Engineer role.",
    weeks: [
      { theme: "Portfolio & Brand", tasks: ["Update LinkedIn (Generative AI Engineer)", "Rewrite resume focusing on impact/tools", "Ensure GitHub has green activity graph", "Deploy personal portfolio site", "Get peer reviews on resume", "Prepare 'Tell me about yourself'", "Finalize Job Hunt Assets"] },
      { theme: "Interview Prep: Algorithms", tasks: ["Review Arrays, Hashmaps, Graphs", "Practice standard Python interview questions", "Review Asyncio and Decorators in depth", "Write clean OOP code on a whiteboard", "Review API design (REST/WebSockets)", "Practice basic SQL queries", "Mock Technical Interview"] },
      { theme: "Interview Prep: AI System Design", tasks: ["Practice designing RAG at scale", "Explain preventing prompt injection", "Discuss evaluating LLMs (DeepEval)", "Explain LangGraph state management", "Discuss cost vs latency trade-offs", "Explain vLLM vs standard inference", "Mock System Design Interview"] },
      { theme: "Networking & Applying", tasks: ["Identify 30 target AI-first companies", "Reach out to Founders/CTOs with Capstone", "Apply via traditional portals", "Attend local AI meetups", "Prepare questions for interviewers", "Negotiation strategies for 10+ LPA", "Celebrate your 1-year journey!"] }
    ]
  }
];

export default function App() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState({});
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('agenticAITrackerProgressElite');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedTasks(parsed);
        calculateStreak(parsed);
      } catch (e) {
        console.error("Failed to load progress");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('agenticAITrackerProgressElite', JSON.stringify(completedTasks));
    calculateStreak(completedTasks);
  }, [completedTasks]);

  const calculateStreak = (tasks) => {
    const completedCount = Object.keys(tasks).length;
    setStreak(completedCount);
  };

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => {
      const newState = { ...prev };
      if (newState[taskId]) delete newState[taskId];
      else newState[taskId] = true;
      return newState;
    });
  };

  const currentMonth = curriculum[selectedMonthIndex];
  const totalTasksInMonth = currentMonth.weeks.reduce((acc, week) => acc + week.tasks.length, 0);
  const completedInMonth = currentMonth.weeks.reduce((acc, week, wIdx) => {
    return acc + week.tasks.filter((_, tIdx) => completedTasks[`m${selectedMonthIndex}-w${wIdx}-t${tIdx}`]).length;
  }, 0);
  
  const progressPercentage = Math.round((completedInMonth / totalTasksInMonth) * 100) || 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col md:flex-row selection:bg-indigo-500/30">
      
      {/* Sidebar Navigation */}
      <div className="w-full md:w-80 bg-slate-900 border-r border-slate-800 flex flex-col h-auto md:h-screen sticky top-0 z-10">
        <div className="p-6 border-b border-slate-800 bg-slate-950">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
            <Code className="w-6 h-6 text-indigo-400" />
            AI Engineer Roadmap
          </h1>
          <p className="text-slate-400 text-xs mt-2 font-mono bg-slate-800/50 inline-block px-2 py-1 rounded text-indigo-300 border border-indigo-500/20">
            ENTERPRISE EDITION (15+ LPA)
          </p>
          
          <div className="mt-6 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Tasks Completed</p>
              <p className="text-2xl font-bold text-white flex items-center gap-2 mt-1">
                {streak} <Flame className="w-5 h-5 text-orange-500" />
              </p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-500 opacity-20" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar pb-20 md:pb-4">
          {curriculum.map((month, idx) => (
            <button
              key={month.month}
              onClick={() => setSelectedMonthIndex(idx)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center justify-between group
                ${selectedMonthIndex === idx 
                  ? 'bg-indigo-600/20 border border-indigo-500/30 text-white' 
                  : 'hover:bg-slate-800 text-slate-400 border border-transparent'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm
                  ${selectedMonthIndex === idx ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
                  {month.month}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold truncate w-40">{month.title}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed pb-20">
        <div className="max-w-4xl mx-auto p-6 md:p-12">
          
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
              Month {currentMonth.month}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              {currentMonth.title}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              {currentMonth.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-end mb-3 relative z-10">
              <div>
                <p className="text-sm font-semibold text-slate-400">Month {currentMonth.month} Progress</p>
                <p className="text-2xl font-bold text-white mt-1">{progressPercentage}%</p>
              </div>
              <p className="text-sm text-slate-500 font-medium">{completedInMonth} / {totalTasksInMonth} Tasks</p>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden relative z-10">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-3 rounded-full transition-all duration-700 ease-out relative"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Tasks Container */}
          <div className="space-y-10">
            {currentMonth.weeks.map((week, wIdx) => (
              <div key={wIdx} className="relative">
                {/* Week Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-slate-800 text-slate-300 font-bold px-3 py-1 rounded-md text-sm border border-slate-700 shadow-sm">
                    Week {wIdx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">{week.theme}</h3>
                  <div className="h-px bg-gradient-to-r from-slate-800 to-transparent flex-1 ml-4"></div>
                </div>

                {/* Tasks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-2 md:pl-0">
                  {week.tasks.map((task, tIdx) => {
                    const taskId = `m${selectedMonthIndex}-w${wIdx}-t${tIdx}`;
                    const isCompleted = completedTasks[taskId];
                    const isDay7 = tIdx === 6;

                    return (
                      <button
                        key={taskId}
                        onClick={() => toggleTask(taskId)}
                        className={`text-left group relative p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                          ${isCompleted 
                            ? 'bg-indigo-950/40 border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.07)]' 
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-600 hover:bg-slate-800'
                          }
                          ${isDay7 ? 'md:col-span-2 border-indigo-500/20 bg-indigo-900/10' : ''}
                        `}
                      >
                        {/* Status Icon */}
                        <div className="mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-600 group-hover:text-slate-400 transition-colors" />
                          )}
                        </div>

                        {/* Task Content */}
                        <div className="flex-1">
                          <p className="text-xs text-slate-500 font-semibold mb-1.5 uppercase tracking-wider flex justify-between items-center">
                            <span>Day {(wIdx * 7) + tIdx + 1}</span>
                            {isDay7 && <span className="text-indigo-400 flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px]"><BookOpen className="w-3 h-3"/> Milestone</span>}
                          </p>
                          <p className={`text-sm md:text-base font-medium transition-all duration-300
                            ${isCompleted ? 'text-slate-500 line-through decoration-slate-700' : 'text-slate-200'}
                          `}>
                            {task}
                          </p>
                        </div>
                        
                        {/* Completion subtle highlight */}
                        {isCompleted && (
                          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-xl shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Next Month Button */}
          {selectedMonthIndex < 11 && (
            <div className="mt-16 flex justify-end">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedMonthIndex(prev => prev + 1);
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-8 py-3.5 rounded-full font-bold hover:from-indigo-400 hover:to-cyan-400 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Proceed to Month {selectedMonthIndex + 2} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
          
        </div>
      </div>
      
      {/* Global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
