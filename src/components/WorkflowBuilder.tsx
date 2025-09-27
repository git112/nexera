import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Play, 
  Save,
  Settings,
  GitBranch,
  Mail,
  MessageSquare,
  Database,
  Calendar,
  FileText,
  ArrowRight,
  Zap
} from "lucide-react";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "condition";
  title: string;
  description: string;
  icon: any;
  connected: boolean;
}

const WorkflowBuilder = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: "trigger-1",
      type: "trigger",
      title: "Gmail - New Email",
      description: "Triggers when a new email arrives",
      icon: Mail,
      connected: true
    },
    {
      id: "action-1",
      type: "action",
      title: "Slack - Send Message",
      description: "Posts a message to Slack channel",
      icon: MessageSquare,
      connected: true
    },
    {
      id: "action-2",
      type: "action",
      title: "Notion - Create Page",
      description: "Creates a new page in Notion",
      icon: FileText,
      connected: false
    }
  ]);

  const availableActions = [
    { title: "Send Email", icon: Mail, category: "Communication" },
    { title: "Post to Slack", icon: MessageSquare, category: "Communication" },
    { title: "Update Database", icon: Database, category: "Data" },
    { title: "Create Calendar Event", icon: Calendar, category: "Schedule" },
    { title: "Generate Document", icon: FileText, category: "Documents" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Workflow Builder</h1>
            <p className="text-muted-foreground">Design your automation workflows with drag & drop</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="glass">
              <Save className="w-4 h-4" />
              Save
            </Button>
            <Button variant="hero">
              <Play className="w-4 h-4" />
              Test Run
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="glass-card border-border/30 h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Workflow Canvas
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                <div className="relative h-full grid-background rounded-lg p-6 overflow-hidden">
                  {/* Workflow Nodes */}
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center gap-6">
                      {nodes.map((node, index) => (
                        <motion.div
                          key={node.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          className="flex items-center gap-4"
                        >
                          {/* Node Card */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                              glass-card p-6 w-64 cursor-pointer border-2 transition-all duration-300
                              ${node.connected ? 'border-primary/50 shadow-glow' : 'border-border/30'}
                              hover:border-primary/70 hover:shadow-neon
                            `}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`
                                w-10 h-10 rounded-lg flex items-center justify-center
                                ${node.type === 'trigger' ? 'bg-success/20 text-success' : 
                                  node.type === 'action' ? 'bg-primary/20 text-primary' : 
                                  'bg-accent/20 text-accent'}
                              `}>
                                <node.icon className="w-5 h-5" />
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {node.type}
                              </Badge>
                            </div>
                            <h3 className="font-semibold mb-1">{node.title}</h3>
                            <p className="text-sm text-muted-foreground">{node.description}</p>
                            <Button variant="ghost" size="sm" className="mt-3 w-full">
                              <Settings className="w-4 h-4" />
                              Configure
                            </Button>
                          </motion.div>

                          {/* Connection Arrow */}
                          {index < nodes.length - 1 && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                              className="flex items-center"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                                <ArrowRight className="w-5 h-5 text-primary" />
                                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}

                      {/* Add Node Button */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="glass-card p-6 w-64 border-2 border-dashed border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex flex-col items-center justify-center h-32 text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                              <Plus className="w-6 h-6 text-primary" />
                            </div>
                            <p className="font-medium mb-1">Add Action</p>
                            <p className="text-sm text-muted-foreground">Choose from library</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Actions Library */}
            <Card className="glass-card border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Actions Library
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {availableActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="glass-card p-3 border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <action.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{action.title}</p>
                        <p className="text-xs text-muted-foreground">{action.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Workflow Info */}
            <Card className="glass-card border-border/30">
              <CardHeader>
                <CardTitle>Workflow Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Name</label>
                  <div className="glass-card p-2 text-sm">Email to Slack Workflow</div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Status</label>
                  <Badge className="bg-success/20 text-success">
                    <div className="w-2 h-2 rounded-full bg-success mr-2" />
                    Active
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Last Modified</label>
                  <div className="text-sm text-muted-foreground">2 hours ago</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;