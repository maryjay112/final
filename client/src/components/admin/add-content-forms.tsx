import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  insertProgramSchema, 
  insertNewsSchema, 
  insertEventSchema, 
  insertManagementSchema 
} from "@shared/schema";

// Form schemas
const programSchema = insertProgramSchema.extend({
  featured: z.boolean().optional(),
});

const newsSchema = insertNewsSchema.extend({
  featured: z.boolean().optional(),
});

const eventSchema = insertEventSchema.extend({
  eventDate: z.string().min(1, "Event date is required"),
});

const managementSchema = insertManagementSchema.extend({
  position: z.string().min(1, "Position is required"),
  name: z.string().min(1, "Name is required"),
});

type ProgramFormData = z.infer<typeof programSchema>;
type NewsFormData = z.infer<typeof newsSchema>;
type EventFormData = z.infer<typeof eventSchema>;
type ManagementFormData = z.infer<typeof managementSchema>;

type FormData = ProgramFormData | NewsFormData | EventFormData | ManagementFormData;

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

  const form = useForm<FormData>({
    resolver: zodResolver(getSchema()),
    defaultValues: {
      featured: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const endpoint = `/api/${type === 'management' ? 'management' : type + 's'}`;
      return apiRequest('POST', endpoint, data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} created successfully`,
      });
      
      // Invalidate related queries
      const queries = [`/api/${type === 'management' ? 'management' : type + 's'}`];
      if (type !== 'management') {
        queries.push(`/api/${type}s/featured`);
      }
      
      queries.forEach(query => {
        queryClient.invalidateQueries({ queryKey: [query] });
      });
      
      onClose();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || `Failed to create ${type}`,
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const getErrorMessage = (fieldName: string) => {
    const error = form.formState.errors[fieldName as keyof FormData];
    return error?.message || '';
  };

  const renderProgramForm = () => (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Program Title</Label>
        <Input
          id="title"
          placeholder="e.g., Computer Engineering Technology"
          {...form.register('title')}
        />
        {getErrorMessage('title') && (
          <p className="text-sm text-red-600">{getErrorMessage('title')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Brief description of the program"
          {...form.register('description')}
        />
        {getErrorMessage('description') && (
          <p className="text-sm text-red-600">{getErrorMessage('description')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          placeholder="e.g., Engineering, Business, Science"
          {...form.register('category')}
        />
        {getErrorMessage('category') && (
          <p className="text-sm text-red-600">{getErrorMessage('category')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Duration</Label>
        <Input
          id="duration"
          placeholder="e.g., 2 Years, 3 Years"
          {...form.register('duration')}
        />
        {getErrorMessage('duration') && (
          <p className="text-sm text-red-600">{getErrorMessage('duration')}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="featured"
          {...form.register('featured')}
        />
        <Label htmlFor="featured">Featured Program</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create Program'}
        </Button>
      </div>
    </form>
  );

  const renderNewsForm = () => (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">News Title</Label>
        <Input
          id="title"
          placeholder="Enter news headline"
          {...form.register('title')}
        />
        {getErrorMessage('title') && (
          <p className="text-sm text-red-600">{getErrorMessage('title')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Summary</Label>
        <Textarea
          id="summary"
          placeholder="Brief summary of the news"
          {...form.register('summary')}
        />
        {getErrorMessage('summary') && (
          <p className="text-sm text-red-600">{getErrorMessage('summary')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Full Content</Label>
        <Textarea
          id="content"
          placeholder="Full news article content"
          rows={6}
          {...form.register('content')}
        />
        {getErrorMessage('content') && (
          <p className="text-sm text-red-600">{getErrorMessage('content')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          placeholder="e.g., Academic, Infrastructure, Achievement"
          {...form.register('category')}
        />
        {getErrorMessage('category') && (
          <p className="text-sm text-red-600">{getErrorMessage('category')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          placeholder="https://example.com/image.jpg"
          {...form.register('image')}
        />
        {getErrorMessage('image') && (
          <p className="text-sm text-red-600">{getErrorMessage('image')}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="featured"
          {...form.register('featured')}
        />
        <Label htmlFor="featured">Featured News</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create News'}
        </Button>
      </div>
    </form>
  );

  const renderEventForm = () => (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Event Title</Label>
        <Input
          id="title"
          placeholder="Enter event name"
          {...form.register('title')}
        />
        {getErrorMessage('title') && (
          <p className="text-sm text-red-600">{getErrorMessage('title')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Event description"
          {...form.register('description')}
        />
        {getErrorMessage('description') && (
          <p className="text-sm text-red-600">{getErrorMessage('description')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="eventDate">Event Date</Label>
        <Input
          id="eventDate"
          type="datetime-local"
          {...form.register('eventDate')}
        />
        {getErrorMessage('eventDate') && (
          <p className="text-sm text-red-600">{getErrorMessage('eventDate')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Event venue"
          {...form.register('location')}
        />
        {getErrorMessage('location') && (
          <p className="text-sm text-red-600">{getErrorMessage('location')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          placeholder="e.g., Academic, Cultural, Sports"
          {...form.register('category')}
        />
        {getErrorMessage('category') && (
          <p className="text-sm text-red-600">{getErrorMessage('category')}</p>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create Event'}
        </Button>
      </div>
    </form>
  );

  const renderManagementForm = () => (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter full name"
          {...form.register('name')}
        />
        {getErrorMessage('name') && (
          <p className="text-sm text-red-600">{getErrorMessage('name')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Position</Label>
        <Input
          id="position"
          placeholder="e.g., Rector, Deputy Rector"
          {...form.register('position')}
        />
        {getErrorMessage('position') && (
          <p className="text-sm text-red-600">{getErrorMessage('position')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Biography</Label>
        <Textarea
          id="bio"
          placeholder="Brief biography and qualifications"
          rows={4}
          {...form.register('bio')}
        />
        {getErrorMessage('bio') && (
          <p className="text-sm text-red-600">{getErrorMessage('bio')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Profile Image URL</Label>
        <Input
          id="imageUrl"
          placeholder="https://example.com/profile.jpg"
          {...form.register('imageUrl')}
        />
        {getErrorMessage('imageUrl') && (
          <p className="text-sm text-red-600">{getErrorMessage('imageUrl')}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          placeholder="e.g., Administration, Academic Affairs"
          {...form.register('department')}
        />
        {getErrorMessage('department') && (
          <p className="text-sm text-red-600">{getErrorMessage('department')}</p>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create Management Member'}
        </Button>
      </div>
    </form>
  );

  const getTitle = () => {
    switch (type) {
      case 'program': return 'Add New Program';
      case 'news': return 'Add News Article';
      case 'event': return 'Add Event';
      case 'management': return 'Add Management Member';
      default: return 'Add Content';
    }
  };

  const renderForm = () => {
    switch (type) {
      case 'program': return renderProgramForm();
      case 'news': return renderNewsForm();
      case 'event': return renderEventForm();
      case 'management': return renderManagementForm();
      default: return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{getTitle()}</h2>
        <p className="text-gray-600 mt-1">Fill out the form below to add new content.</p>
      </div>
      {renderForm()}
    </div>
  );
}