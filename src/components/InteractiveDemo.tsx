import { useState, useEffect } from "react";
import { Check, Clock, Calendar, Bell } from "lucide-react";

const demoTasks = [
  {
    id: 1,
    icon: Calendar,
    title: "Team meeting with Sarah",
    time: "Today at 2:00 PM",
    type: "meeting",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Bell,
    title: "Call dentist for appointment",
    time: "Tomorrow at 9:00 AM",
    type: "reminder",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: Check,
    title: "Review Q4 budget proposal",
    time: "Friday at 3:00 PM",
    type: "task",
    color: "from-orange-500 to-red-500",
  },
];

export const InteractiveDemo = () => {
  const [activeTask, setActiveTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Remind me to call dentist tomorrow at 9am";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTask((prev) => (prev + 1) % demoTasks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setTypedText("");
            setIsTyping(true);
          }, 2000);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  const handleTaskComplete = (taskId: number) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
      setTimeout(() => {
        setCompletedTasks(completedTasks.filter((id) => id !== taskId));
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            See Memorae in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how effortlessly Memorae manages your memories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Input Demo */}
          <div className="order-2 lg:order-1">
            <div className="glass-card p-8 rounded-3xl border border-border shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                  Natural Language Input
                </h3>
                <p className="text-muted-foreground">
                  Just type or speak naturally - no commands needed
                </p>
              </div>

              {/* Typing Animation */}
              <div className="bg-background/50 rounded-xl p-4 mb-6 min-h-[80px] flex items-center">
                <p className="text-foreground font-medium">
                  {typedText}
                  <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse"></span>
                </p>
              </div>

              {/* AI Processing */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>AI Processing...</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">
                    Smart time detection
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/80">
                    Automatic categorization
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground/80">
                    Context understanding
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Demo */}
          <div className="order-1 lg:order-2">
            <div className="glass-card p-8 rounded-3xl border border-border shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                  Your Organized Tasks
                </h3>
                <p className="text-muted-foreground">
                  Everything organized and ready when you need it
                </p>
              </div>

              <div className="space-y-4">
                {demoTasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-500 cursor-pointer ${
                      activeTask === index
                        ? "border-primary bg-primary/5 scale-105 shadow-lg"
                        : "border-border bg-card hover:border-primary/50"
                    } ${
                      completedTasks.includes(task.id)
                        ? "opacity-50 scale-95"
                        : ""
                    }`}
                    onClick={() => handleTaskComplete(task.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${task.color} flex items-center justify-center shrink-0`}
                      >
                        <task.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold mb-1 ${
                            completedTasks.includes(task.id)
                              ? "line-through"
                              : ""
                          }`}
                        >
                          {task.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {task.time}
                        </p>
                      </div>
                      {completedTasks.includes(task.id) && (
                        <Check className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Click on tasks to mark them complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
