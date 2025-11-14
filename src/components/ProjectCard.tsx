import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectCard = ({ title, description, tags, image, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] bg-gradient-to-b from-card to-secondary/20">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <span className="text-4xl font-bold text-muted-foreground/20">{title.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {liveUrl && (
            <Button variant="default" size="sm" className="gap-2 flex-1">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" className="gap-2 flex-1">
              <Github className="h-4 w-4" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
