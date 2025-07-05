import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Eye } from "lucide-react";
import { format } from "date-fns";

interface ContentCardProps {
  title: string;
  description?: string;
  category?: string;
  featured?: boolean;
  publishedAt?: Date;
  status?: string;
  onEdit: () => void;
  onDelete: () => void;
  onView?: () => void;
  children?: React.ReactNode;
}

export default function ContentCard({
  title,
  description,
  category,
  featured,
  publishedAt,
  status = "Published",
  onEdit,
  onDelete,
  onView,
  children
}: ContentCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1 text-polytechnic-blue">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="line-clamp-2">
                {description}
              </CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2 ml-4">
            {featured && (
              <Badge variant="secondary" className="bg-polytechnic-green text-white">
                Featured
              </Badge>
            )}
            <Badge variant="outline">
              {status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {category && (
            <div className="text-sm">
              <span className="text-muted-foreground">Category:</span>
              <span className="ml-1 font-medium">{category}</span>
            </div>
          )}
          
          {publishedAt && (
            <div className="text-sm">
              <span className="text-muted-foreground">Published:</span>
              <span className="ml-1">{format(publishedAt, "MMM dd, yyyy")}</span>
            </div>
          )}
          
          {children}
          
          <div className="flex items-center gap-2 pt-3 border-t">
            {onView && (
              <Button
                variant="outline"
                size="sm"
                onClick={onView}
                className="flex items-center gap-1"
              >
                <Eye className="h-4 w-4" />
                View
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
              className="flex items-center gap-1"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDelete}
              className="flex items-center gap-1 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}