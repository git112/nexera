import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Play, 
  Pause, 
  MoreVertical,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap
} from "lucide-react";

const Dashboard = () => {
  const workflowCards = [
    {
      id: 1,
      name: "Email to Slack Automation",
      description: "Automatically send important emails to Slack channels",
      status: "active",
      runs: 1240,
      lastRun: "2 minutes ago"
    },
    {
      id: 2,
      name: "Lead Generation Pipeline",
      description: "Capture leads from multiple sources and update CRM",
      status: "paused",
      runs: 856,
      lastRun: "1 hour ago"
    },
    {
      id: 3,
      name: "Social Media Scheduler",
      description: "Schedule and post content across social platforms",
      status: "active",
      runs: 423,
      lastRun: "5 minutes ago"
    }
  ];

  const stats = [
    {
      title: "Total Workflows",
      value: "24",
      change: "+12%",
      icon: Zap
    },
    {
      title: "Active Users",
      value: "1,429",
      change: "+8%",
      icon: Users
    },
    {
      title: "Hours Saved",
      value: "340",
      change: "+23%",
      icon: Clock
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.5%",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage your automation workflows</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Card className="glass-card border-border/30 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3 text-success" />
                        <span className="text-xs text-success">{stat.change}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Workflows Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card border-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Workflows</CardTitle>
                    <CardDescription>Your automation workflows and their status</CardDescription>
                  </div>
                  <Button variant="hero" size="sm">
                    <Plus className="w-4 h-4" />
                    Create Workflow
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {workflowCards.map((workflow, index) => (
                  <motion.div
                    key={workflow.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-4 border border-border/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{workflow.name}</h3>
                          <Badge 
                            variant={workflow.status === "active" ? "default" : "secondary"}
                            className={workflow.status === "active" ? "bg-success text-foreground" : ""}
                          >
                            {workflow.status === "active" ? (
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                            ) : (
                              <AlertCircle className="w-3 h-3 mr-1" />
                            )}
                            {workflow.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{workflow.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{workflow.runs} runs</span>
                          <span>Last run: {workflow.lastRun}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          {workflow.status === "active" ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <Card className="glass-card border-border/30">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Start automating in seconds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <Plus className="w-4 h-4" />
                  Create New Workflow
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Zap className="w-4 h-4" />
                  Browse Templates
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Users className="w-4 h-4" />
                  Invite Team Members
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/30">
              <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
                <CardDescription>Recommended automations for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border border-accent/20 bg-accent/5">
                    <p className="text-sm font-medium">Gmail → Notion</p>
                    <p className="text-xs text-muted-foreground">Save email attachments to Notion database</p>
                  </div>
                  <div className="p-3 rounded-lg border border-neon-pink/20 bg-neon-pink/5">
                    <p className="text-sm font-medium">Slack → Trello</p>
                    <p className="text-xs text-muted-foreground">Create Trello cards from Slack messages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;