import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Plus, X } from 'lucide-react';

// Form schemas
const programSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  duration: z.string().min(1, 'Duration is required'),
  category: z.string().min(1, 'Category is required'),
  featured: z.boolean().default(false),
  icon: z.string().min(1, 'Icon is required'),
  color: z.string().min(1, 'Color is required'),
  image: z.string().url('Must be a valid URL'),
});

const newsSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  summary: z.string().min(1, 'Summary is required'),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  featured: z.boolean().default(false),
  image: z.string().url('Must be a valid URL'),
});

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  location: z.string().min(1, 'Location is required'),
  category: z.string().min(1, 'Category is required'),
  featured: z.boolean().default(false),
  image: z.string().url().optional(),
});

const managementSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position is required'),
  bio: z.string().min(1, 'Bio is required'),
  image: z.string().url('Must be a valid URL'),
  email: z.string().email().optional(),
  linkedin: z.string().url().optional(),
});

type ProgramFormData = z.infer<typeof programSchema>;
type NewsFormData = z.infer<typeof newsSchema>;
type EventFormData = z.infer<typeof eventSchema>;
type ManagementFormData = z.infer<typeof managementSchema>;

interface AddContentFormsProps {
  type: 'program' | 'news' | 'event' | 'management';
  onClose: () => void;
}

export default function AddContentForms({ type, onClose }: AddContentFormsProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const getSchema = () => {
    switch (type) {
      case 'program': return programSchema;
      case 'news': return newsSchema;
      case 'event': return eventSchema;
      case 'management': return managementSchema;
      default: return programSchema;
    }
  };

  const form = useForm({
    resolver: zodResolver(getSchema()),
    defaultValues: {
      featured: false,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const endpoint = `/api/${type === 'management' ? 'management' : `${type}s`}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to create ${type}`);
      }

      return response.json();
    },
    onSuccess: () => {
      const queryKey = type === 'management' ? '/api/management' : `/api/${type}s`;
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast({
        title: 'Success',
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} created successfully!`,
      });
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: any) => {
    if (type === 'event') {
      data.date = new Date(data.date).toISOString();
    }
    createMutation.mutate(data);
  };

  const renderProgramForm = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Program Title</Label>
          <Input
            id="title"
            placeholder="e.g., Computer Engineering Technology"
            {...form.register('title')}
          />
          {form.formState.errors.title && (
            <p className="text-sm text-red-600">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={(value) => form.setValue('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="Arts">Arts</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.category && (
            <p className="text-sm text-red-600">{form.formState.errors.category.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Detailed program description..."
          rows={4}
          {...form.register('description')}
        />
        {form.formState.errors.description && (
          <p className="text-sm text-red-600">{form.formState.errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            placeholder="e.g., 2 Years"
            {...form.register('duration')}
          />
          {form.formState.errors.duration && (
            <p className="text-sm text-red-600">{form.formState.errors.duration.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="icon">Icon</Label>
          <Input
            id="icon"
            placeholder="e.g., 💻"
            {...form.register('icon')}
          />
          {form.formState.errors.icon && (
            <p className="text-sm text-red-600">{form.formState.errors.icon.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="color">Color Gradient</Label>
          <Select onValueChange={(value) => form.setValue('color', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="from-blue-500 to-blue-600">Blue</SelectItem>
              <SelectItem value="from-green-500 to-green-600">Green</SelectItem>
              <SelectItem value="from-red-500 to-red-600">Red</SelectItem>
              <SelectItem value="from-purple-500 to-purple-600">Purple</SelectItem>
              <SelectItem value="from-orange-500 to-orange-600">Orange</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.color && (
            <p className="text-sm text-red-600">{form.formState.errors.color.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            placeholder="https://example.com/image.jpg"
            {...form.register('image')}
          />
          {form.formState.errors.image && (
            <p className="text-sm text-red-600">{form.formState.errors.image.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="featured"
          checked={form.watch('featured')}
          onCheckedChange={(checked) => form.setValue('featured', checked as boolean)}
        />
        <Label htmlFor="featured">Feature this program</Label>
      </div>
    </>
  );

  const renderNewsForm = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Article Title</Label>
          <Input
            id="title"
            placeholder="e.g., Federal Polytechnic Ede Receives Major Grant"
            {...form.register('title')}
          />
          {form.formState.errors.title && (
            <p className="text-sm text-red-600">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={(value) => form.setValue('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Infrastructure">Infrastructure</SelectItem>
              <SelectItem value="Academic">Academic</SelectItem>
              <SelectItem value="Research">Research</SelectItem>
              <SelectItem value="Students">Students</SelectItem>
              <SelectItem value="Announcement">Announcement</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.category && (
            <p className="text-sm text-red-600">{form.formState.errors.category.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Summary</Label>
        <Textarea
          id="summary"
          placeholder="Brief summary of the article..."
          rows={2}
          {...form.register('summary')}
        />
        {form.formState.errors.summary && (
          <p className="text-sm text-red-600">{form.formState.errors.summary.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          placeholder="Full article content..."
          rows={6}
          {...form.register('content')}
        />
        {form.formState.errors.content && (
          <p className="text-sm text-red-600">{form.formState.errors.content.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          placeholder="https://example.com/image.jpg"
          {...form.register('image')}
        />
        {form.formState.errors.image && (
          <p className="text-sm text-red-600">{form.formState.errors.image.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="featured"
          checked={form.watch('featured')}
          onCheckedChange={(checked) => form.setValue('featured', checked as boolean)}
        />
        <Label htmlFor="featured">Feature this article</Label>
      </div>
    </>
  );

  const getTitle = () => {
    switch (type) {
      case 'program': return 'Add New Program';
      case 'news': return 'Add News Article';
      case 'event': return 'Create Event';
      case 'management': return 'Add Team Member';
      default: return 'Add Content';
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{getTitle()}</CardTitle>
            <CardDescription>
              Fill in the details below to add new content to the website
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {type === 'program' && renderProgramForm()}
          {type === 'news' && renderNewsForm()}
          
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={createMutation.isPending}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              {createMutation.isPending ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Creating...</span>
                </div>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Create {type.charAt(0).toUpperCase() + type.slice(1)}
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}