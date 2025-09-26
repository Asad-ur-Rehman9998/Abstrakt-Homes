import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';

const Certificate = () => {
  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: "ASSA ABLOY Authorized Distributor" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Authentic Products Guaranteed" },
    { icon: <Star className="w-6 h-6" />, text: "Premium Hardware Solutions" }
  ];

  return (
    <section id="certificate" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Certification
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized for excellence and quality in architectural solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Certificate Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                <img
                  src="/Certificate.jpg"
                  alt="ASSA ABLOY Distributorship Authorization Certificate"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 p-2 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  ASSA ABLOY Authorized Distributor
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are proud to be an authorized distributor of ASSA ABLOY Guoqiang brand products in Pakistan. This certification validates our commitment to providing authentic, tested, and high-quality window and door hardware solutions.
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="text-blue-600">
                      {achievement.icon}
                    </div>
                    <span className="font-medium text-gray-900">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;