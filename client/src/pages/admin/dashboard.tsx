import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import AddContentForms from '@/components/admin/add-content-forms';
import { 
  Users, 
  BookOpen, 
  Newspaper, 
  Calendar, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Award,
  Building,
  GraduationCap,
  BarChart3,
  Eye,
  ExternalLink
} from 'lucide-react';

interface AdminUser {
  id: number;
  username: string;
  role: string;
}

interface QuickStats {
  programs: number;
  news: number;
  events: number;
  management: number;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('overview');
  const [dialogOpen, setDialogOpen] = useState<{[key: string]: boolean}>({
    program: false,
    news: false,
    event: false,
    management: false,
  });
  

  // Check authentication (simple check for now)
  const isAuthenticated = true; // In real app, check actual auth state

  const { data: programs = [] } = useQuery<any[]>({
    queryKey: ['/api/programs'],
    enabled: isAuthenticated,
  });

  const { data: news = [] } = useQuery<any[]>({
    queryKey: ['/api/news'],
    enabled: isAuthenticated,
  });

  const { data: events = [] } = useQuery<any[]>({
    queryKey: ['/api/events'],
    enabled: isAuthenticated,
  });

  const { data: management = [] } = useQuery<any[]>({
    queryKey: ['/api/management'],
    enabled: isAuthenticated,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Logged Out',
        description: 'You have been successfully logged out.',
      });
      setLocation('/admin/login');
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const quickStats: QuickStats = {
    programs: Array.isArray(programs) ? programs.length : 0,
    news: Array.isArray(news) ? news.length : 0,
    events: Array.isArray(events) ? events.length : 0,
    management: Array.isArray(management) ? management.length : 0,
  };

  if (!isAuthenticated) {
    setLocation('/admin/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Federal Polytechnic Ede Content Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Admin User
              </Badge>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 lg:w-fit">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="programs" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Programs</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <Newspaper className="w-4 h-4" />
              <span className="hidden sm:inline">News</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Management</span>
            </TabsTrigger>
            <TabsTrigger value="facilities" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">Facilities</span>
            </TabsTrigger>
            <TabsTrigger value="alumni" className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Alumni</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Programs</CardTitle>
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{quickStats.programs}</div>
                  <p className="text-xs text-gray-600">Academic programs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">News Articles</CardTitle>
                  <Newspaper className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{quickStats.news}</div>
                  <p className="text-xs text-gray-600">Published articles</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Events</CardTitle>
                  <Calendar className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{quickStats.events}</div>
                  <p className="text-xs text-gray-600">Scheduled events</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Management Team</CardTitle>
                  <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{quickStats.management}</div>
                  <p className="text-xs text-gray-600">Team members</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button 
                    className="h-auto flex-col space-y-2 p-6"
                    variant="outline"
                    onClick={() => setActiveTab('programs')}
                  >
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    <span>Manage Programs</span>
                  </Button>
                  <Button 
                    className="h-auto flex-col space-y-2 p-6"
                    variant="outline"
                    onClick={() => setActiveTab('news')}
                  >
                    <Newspaper className="w-8 h-8 text-green-600" />
                    <span>Publish News</span>
                  </Button>
                  <Button 
                    className="h-auto flex-col space-y-2 p-6"
                    variant="outline"
                    onClick={() => setActiveTab('events')}
                  >
                    <Calendar className="w-8 h-8 text-red-600" />
                    <span>Create Event</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Academic Programs Management
                  <Dialog 
                    open={dialogOpen.program} 
                    onOpenChange={(open) => setDialogOpen(prev => ({...prev, program: open}))}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Program
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add New Program</DialogTitle>
                      </DialogHeader>
                      <AddContentForms 
                        type="program" 
                        onClose={() => setDialogOpen(prev => ({...prev, program: false}))}
                      />
                    </DialogContent>
                  </Dialog>
                </CardTitle>
                <CardDescription>
                  Manage all academic programs offered by the polytechnic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.isArray(programs) && programs.map((program: any) => (
                    <div key={program.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{program.title}</h3>
                        <p className="text-sm text-gray-600">{program.category} • {program.duration}</p>
                        {program.featured && <Badge variant="secondary">Featured</Badge>}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )) || (
                    <p className="text-center text-gray-500 py-8">No programs found. Add your first program!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  News & Articles Management
                  <Dialog 
                    open={dialogOpen.news} 
                    onOpenChange={(open) => setDialogOpen(prev => ({...prev, news: open}))}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Article
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add News Article</DialogTitle>
                      </DialogHeader>
                      <AddContentForms 
                        type="news" 
                        onClose={() => setDialogOpen(prev => ({...prev, news: false}))}
                      />
                    </DialogContent>
                  </Dialog>
                </CardTitle>
                <CardDescription>
                  Publish and manage news articles and announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.isArray(news) && news.map((article: any) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.category}</p>
                        {article.featured && <Badge variant="secondary">Featured</Badge>}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )) || (
                    <p className="text-center text-gray-500 py-8">No news articles found. Publish your first article!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Events Management
                  <Dialog 
                    open={dialogOpen.event} 
                    onOpenChange={(open) => setDialogOpen(prev => ({...prev, event: open}))}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Create New Event</DialogTitle>
                      </DialogHeader>
                      <AddContentForms 
                        type="event" 
                        onClose={() => setDialogOpen(prev => ({...prev, event: false}))}
                      />
                    </DialogContent>
                  </Dialog>
                </CardTitle>
                <CardDescription>
                  Schedule and manage institutional events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.isArray(events) && events.map((event: any) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString()} at {event.time} • {event.location}
                        </p>
                        <p className="text-sm text-gray-500">{event.category}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )) || (
                    <p className="text-center text-gray-500 py-8">No events found. Schedule your first event!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Management Tab */}
          <TabsContent value="management" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Management Team
                  <Dialog 
                    open={dialogOpen.management} 
                    onOpenChange={(open) => setDialogOpen(prev => ({...prev, management: open}))}
                  >
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Member
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Add Team Member</DialogTitle>
                      </DialogHeader>
                      <AddContentForms 
                        type="management" 
                        onClose={() => setDialogOpen(prev => ({...prev, management: false}))}
                      />
                    </DialogContent>
                  </Dialog>
                </CardTitle>
                <CardDescription>
                  Manage leadership team profiles and information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.isArray(management) && management.map((member: any) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.position}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )) || (
                    <p className="text-center text-gray-500 py-8">No management team members found. Add the first member!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Facilities Tab */}
          <TabsContent value="facilities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Campus Facilities
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Facility
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage campus facilities and infrastructure information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Facilities management coming soon. This will allow you to add and manage campus facilities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alumni Tab */}
          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Alumni Success Stories
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Alumni
                  </Button>
                </CardTitle>
                <CardDescription>
                  Showcase successful alumni and their achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Alumni management coming soon. This will allow you to add and manage alumni success stories.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
