import { useQuery } from '@tanstack/react-query';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, DollarSign, BookOpen, Calendar, MapPin } from 'lucide-react';

interface BudgetItem {
  category: string;
  amount: string;
}

interface TetfundItem {
  sn: number;
  intervention: string;
  allocation: string;
}

const budgetData: BudgetItem[] = [
  { category: "Personnel Cost", amount: "3,509,610,687.00" },
  { category: "Overhead Cost", amount: "372,000,000.00" },
  { category: "Capital Expenditure", amount: "1,003,486,901.81" },
];

const tetfundData: TetfundItem[] = [
  { sn: 1, intervention: "TETFund (Training)", allocation: "150,000,000.00" },
  { sn: 2, intervention: "Physical Infrastructure/Program Upgrade", allocation: "850,000,000.00" },
  { sn: 3, intervention: "Library Development", allocation: "130,000,000.00" },
  { sn: 4, intervention: "Equipment Fabrication", allocation: "64,355,731.71" },
  { sn: 5, intervention: "Zonal Intervention", allocation: "200,000,000.00" },
  { sn: 6, intervention: "Career Service Centre", allocation: "80,000,000.00" },
  { sn: 7, intervention: "TETFUND Project Maintenance", allocation: "150,000.00" },
  { sn: 8, intervention: "Academic Main", allocation: "15,000,000.00" },
  { sn: 9, intervention: "Instruction Based Skills Development", allocation: "100,000,000.00" },
  { sn: 10, intervention: "Institution Based Research", allocation: "60,000,000.00" },
  { sn: 11, intervention: "ICT Support", allocation: "120,000,000.00" },
  { sn: 12, intervention: "Academic Research Journal", allocation: "15,000,000.00" },
  { sn: 13, intervention: "Conference Attendance", allocation: "60,000,000.00" },
];

const formatCurrency = (amount: string) => {
  return `₦${amount}`;
};

export default function InstitutionalData() {
  const { data: institutionalData, isLoading } = useQuery({
    queryKey: ['/api/institutional-data'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading institutional data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Institutional Key Performance Indicators
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive financial and academic performance data for Federal Polytechnic Ede
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Year 2025
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Federal Polytechnic Ede
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white shadow-lg border-t-4 border-t-blue-600">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-blue-600">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Annual Budget
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatCurrency("4,885,097,588.81")}
                </div>
                <p className="text-gray-600">Total budgetary allocation for 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-t-4 border-t-green-600">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-green-600">
                  <Users className="w-6 h-6 mr-2" />
                  Student Population
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">19,910</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>ND: 13,564 students</div>
                  <div>HND: 6,346 students</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-t-4 border-t-red-600">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-red-600">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  TETFUND Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatCurrency("1,844,505,731.71")}
                </div>
                <p className="text-gray-600">Current year allocation</p>
              </CardContent>
            </Card>
          </div>

          {/* Budget Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
                  Annual Budgetary Allocation (2025)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgetData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">{item.category}</div>
                      <div className="font-bold text-lg text-blue-600">
                        {formatCurrency(item.amount)}
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg border-2 border-blue-200">
                    <div className="font-bold text-gray-900">TOTAL</div>
                    <div className="font-bold text-xl text-blue-600">
                      {formatCurrency("4,885,097,588.81")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                  Student Population Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">19,910</div>
                    <div className="text-gray-600">Total Students</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">National Diploma (ND)</div>
                        <div className="text-sm text-gray-600">Undergraduate program</div>
                      </div>
                      <div className="font-bold text-lg text-green-600">13,564</div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Higher National Diploma (HND)</div>
                        <div className="text-sm text-gray-600">Postgraduate program</div>
                      </div>
                      <div className="font-bold text-lg text-green-600">6,346</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600 mt-4">
                    Data last updated: May 30, 2025 | Source: Federal Polytechnic Ede
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* TETFUND Allocation */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-red-600" />
                TETFUND Allocation (Current Year 2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">S/N</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Intervention Line</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Allocation Amount (₦)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tetfundData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-900">{item.sn}</td>
                        <td className="py-3 px-4 text-gray-900">{item.intervention}</td>
                        <td className="py-3 px-4 text-right font-medium text-red-600">
                          {formatCurrency(item.allocation)}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-gray-200 bg-red-50">
                      <td className="py-4 px-4 font-bold text-gray-900" colSpan={2}>TOTAL</td>
                      <td className="py-4 px-4 text-right font-bold text-xl text-red-600">
                        {formatCurrency("1,844,505,731.71")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Additional Institutional Data */}
          {institutionalData && institutionalData.length > 0 && (
            <Card className="bg-white shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Additional Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {institutionalData.map((data: any, index: number) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900 mb-2">{data.title}</div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">{data.value}</div>
                      {data.description && (
                        <div className="text-sm text-gray-600">{data.description}</div>
                      )}
                      <div className="text-xs text-gray-500 mt-2">
                        Category: {data.category}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}