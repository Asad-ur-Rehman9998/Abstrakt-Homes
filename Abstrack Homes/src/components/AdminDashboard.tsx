import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Reply, 
  Trash2, 
  Search, 
  Filter, 
  Clock, 
  User, 
  Mail, 
  Phone,
  LogOut,
  Send,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: Date;
  status: 'unread' | 'read' | 'replied';
  reply?: string;
  replyTimestamp?: Date;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'read' | 'replied'>('all');
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('adminMessages');
    if (savedMessages) {
      const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
        replyTimestamp: msg.replyTimestamp ? new Date(msg.replyTimestamp) : undefined
      }));
      setMessages(parsedMessages);
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('adminMessages', JSON.stringify(messages));
  }, [messages]);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, status: 'read' as const } : msg
    ));
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
    showNotification('success', 'Message deleted successfully');
  };

  const sendReply = () => {
    if (!selectedMessage || !replyText.trim()) return;

    setMessages(prev => prev.map(msg => 
      msg.id === selectedMessage.id 
        ? { 
            ...msg, 
            status: 'replied' as const, 
            reply: replyText,
            replyTimestamp: new Date()
          } 
        : msg
    ));

    // In a real application, you would send the email here
    console.log('Sending reply to:', selectedMessage.email, 'Reply:', replyText);
    
    setReplyText('');
    setIsReplyModalOpen(false);
    showNotification('success', 'Reply sent successfully');
  };

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = 
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = statusFilter === 'all' || msg.status === statusFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: Message['status']) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'unread': return <AlertCircle className="w-4 h-4" />;
      case 'read': return <Clock className="w-4 h-4" />;
      case 'replied': return <CheckCircle className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage customer messages</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          <div className="flex items-center space-x-2">
            {notification.type === 'success' ? 
              <CheckCircle className="w-5 h-5" /> : 
              <AlertCircle className="w-5 h-5" />
            }
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar - Message List */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          {/* Search and Filter */}
          <div className="p-4 border-b border-gray-200 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="all">All Messages</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto">
            {filteredMessages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No messages found</p>
              </div>
            ) : (
              filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (message.status === 'unread') {
                      markAsRead(message.id);
                    }
                  }}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedMessage?.id === message.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate">{message.name}</h3>
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                      {getStatusIcon(message.status)}
                      <span className="capitalize">{message.status}</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 truncate">{message.subject}</p>
                  <p className="text-xs text-gray-500">
                    {message.timestamp.toLocaleDateString()} at {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Content - Message Details */}
        <div className="flex-1 flex flex-col">
          {selectedMessage ? (
            <>
              {/* Message Header */}
              <div className="p-6 bg-white border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{selectedMessage.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>{selectedMessage.email}</span>
                      </div>
                      {selectedMessage.phone && (
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Received on {selectedMessage.timestamp.toLocaleDateString()} at {selectedMessage.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsReplyModalOpen(true)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Message:</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>

                {/* Reply Section */}
                {selectedMessage.reply && (
                  <div className="mt-6 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center space-x-2 mb-4">
                      <Reply className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-blue-900">Your Reply:</h3>
                      <span className="text-sm text-blue-600">
                        {selectedMessage.replyTimestamp?.toLocaleDateString()} at {selectedMessage.replyTimestamp?.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-blue-800 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.reply}
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a message</h3>
                <p className="text-gray-500">Choose a message from the list to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reply Modal */}
      {isReplyModalOpen && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Reply to {selectedMessage.name}</h3>
              <button
                onClick={() => setIsReplyModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Original message:</p>
              <p className="text-gray-800 text-sm">{selectedMessage.message}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Reply:
                </label>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-3">
                <button
                  onClick={() => setIsReplyModalOpen(false)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={sendReply}
                  disabled={!replyText.trim()}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;