
import React from 'react';
import { 
  DollarSign, 
  ArrowUpRight, 
  Users, 
  ArrowRightLeft,
  FileText, 
  Printer,
  BarChart,
  User,
  Calendar,
  Video
} from 'lucide-react';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import EventRow from '../components/EventRow';
import ProfileProgress from '../components/ProfileProgress';
import QuickActionButton from '../components/QuickActionButton';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gps-lightgray min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">GPS Dashboard</h1>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 6 months</option>
            <option>Last 3 months</option>
            <option>Last month</option>
            <option>Last week</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<DollarSign size={20} className="text-green-600" />}
          iconBgColor="bg-green-100"
          value="₹2,56,24,819"
          label="TYFCB Given"
          subtitle="Total Value"
          actions={
            <button className="bg-gps-blue text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors">
              Submit
            </button>
          }
        />

        <StatCard 
          icon={<ArrowRightLeft size={20} className="text-blue-600" />}
          iconBgColor="bg-blue-100"
          value="17"
          label="One-to-One"
          subtitle="One-to-One"
          actions={
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gps-blue text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors">
                Submit
              </button>
              <button className="bg-white text-gray-700 py-2 px-4 rounded-md w-full border border-gray-300 hover:bg-gray-50 transition-colors">
                Review
              </button>
            </div>
          }
        />

        <StatCard 
          icon={<Users size={20} className="text-red-600" />}
          iconBgColor="bg-red-100"
          value="35"
          label="Referrals Given"
          subtitle="Referrals Given"
          actions={
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gps-blue text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors">
                Submit
              </button>
              <button className="bg-white text-gray-700 py-2 px-4 rounded-md w-full border border-gray-300 hover:bg-gray-50 transition-colors">
                Review
              </button>
            </div>
          }
        />

        <StatCard 
          icon={<DollarSign size={20} className="text-purple-600" />}
          iconBgColor="bg-purple-100"
          value="₹44,547"
          label="Revenue Received"
          subtitle="Total Revenue"
          actions={
            <button className="bg-gps-blue text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors">
              View Details
            </button>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">My Testimonials</h2>
            <button className="text-sm bg-gps-blue text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              image="https://randomuser.me/api/portraits/women/68.jpg"
              name="Sarah Johnson"
              position="Marketing Director"
              company="InnovateCo"
              content="The visual analytics in this dashboard have lutionized how we identify and nurture key business relationships. The insights are incredibly valuable."
              date="2 weeks ago"
              rating={5}
            />
            
            <TestimonialCard
              image="https://randomuser.me/api/portraits/men/45.jpg"
              name="Robert Chen"
              position="Sales Director"
              company="TechVision"
              content="The testimonial feature replaced our referrals section perfectly. It's now much easier to showcase our network strength to potential partners."
              date="1 month ago"
              rating={4}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Referrals Received</h2>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ArrowUpRight size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">10</h3>
                <p className="text-sm text-gray-500">Referrals Received</p>
              </div>
            </div>
            
            <button className="bg-gps-blue text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors">
              Track Online
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Visitors</h2>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <User size={24} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">24</h3>
                <p className="text-sm text-gray-500">Total Visitors</p>
              </div>
            </div>
            
            <button className="bg-white text-gray-700 py-2 px-4 rounded-md w-full border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Visitor
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <QuickActionButton
                icon={<FileText size={20} className="text-purple-600" />}
                label="Received Referrals Report"
                iconBgColor="bg-purple-100"
              />
              
              <QuickActionButton
                icon={<Printer size={20} className="text-blue-600" />}
                label="Print Weekly Slips"
                iconBgColor="bg-blue-100"
              />
              
              <QuickActionButton
                icon={<BarChart size={20} className="text-red-600" />}
                label="My Participation Report"
                iconBgColor="bg-red-100"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <button className="text-sm text-gps-blue hover:underline">See More</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="bg-red-100 p-2 rounded-full mr-3">
                          <Calendar size={20} className="text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">MSP Train The Trainer</p>
                          <p className="text-sm text-gray-500">2nd & 23rd April</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="font-medium">Apr 22, 2023</p>
                      <p className="text-sm text-gray-500">09:00 AM - 11:00 AM</p>
                    </td>
                    <td className="py-4">
                      <p className="font-medium">Chennai, BNI India</p>
                      <p className="text-sm text-gray-500">MSP Training Room</p>
                    </td>
                    <td className="py-4">
                      <button className="text-red-500 hover:underline">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Video size={20} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Advance Skills TTP</p>
                          <p className="text-sm text-gray-500">24th & 25th April</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="font-medium">Apr 24, 2023</p>
                      <p className="text-sm text-gray-500">10:00 AM - 02:00 PM</p>
                    </td>
                    <td className="py-4">
                      <p className="font-medium">Chennai, BNI India</p>
                      <p className="text-sm text-gray-500">Advanced Training Hall</p>
                    </td>
                    <td className="py-4">
                      <button className="text-red-500 hover:underline">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Users size={20} className="text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Chapter Meeting</p>
                          <p className="text-sm text-gray-500">In-Person</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="font-medium">Apr 25, 2023</p>
                      <p className="text-sm text-gray-500">07:30 AM - 09:00 AM</p>
                    </td>
                    <td className="py-4">
                      <p className="font-medium">The Grand Blueprint</p>
                      <p className="text-sm text-gray-500">Conference Hall, West Tower</p>
                    </td>
                    <td className="py-4">
                      <button className="text-red-500 hover:underline">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <ProfileProgress
            percentage={98}
            tasks={[
              {
                id: '1',
                description: 'Bio information complete',
                completed: true
              },
              {
                id: '2',
                description: 'Profile photo uploaded',
                completed: true
              },
              {
                id: '3',
                description: 'Complete your My Bio by filling Tags Profile',
                completed: false,
                warning: true
              }
            ]}
          />
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-8 py-4 border-t border-gray-200">
        Copyright © 2025. All rights reserved by GPS
      </div>
    </div>
  );
};

export default Dashboard;
